const vote = _ => {

fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ56agzljGMCu52ppQLKucxl7VNPfhSkkfae6OpKepByIS_GYM3_1ErztB9yjg02sbRz9m78giiVTLQ/pub?output=csv').then((response) => {
    return response.text();
}).then((data) => {
    console.log(data);
    let rows = data.split('\n');
    let newbets = [];
    let winners = [];
    let followups = [];
    rows.forEach((row,i) => {
        if (i>1){
            let data = row.split(',');
            if (data[1].trim() !== data[2].trim()) {
                winners.push(data[1].trim());
                followups.push(data[2].trim());
            }
        }
    });
    let win = {};
    winners.forEach((winner) => {
        if (win[winner]) {
            win[winner]++;
        } else {
            win[winner] = 1;
        }
    });
    let follow = {}
    followups.forEach((f) => {
        if (follow[f]) {
            follow[f]++;
        } else {
            follow[f] = 1;
        }
    });
    let overall = {};
    Object.keys(win).forEach((key) => {
        if(overall[key]){
            overall[key] += win[key];
        } else {
            overall[key] = win[key];
        }
    });
    Object.keys(follow).forEach((key) => {
        if(overall[key]){
            overall[key] += follow[key] / 2;
        } else {
            overall[key] = follow[key] / 2;
        }
    });
    overall = Object.fromEntries(
        Object.entries(overall).sort(([,a],[,b]) => b-a)
    );
    overall = Object.keys(overall).map((key) => {
        return {name: key.toLowerCase().replace(' ',''), all: overall[key], win: win[key] || 0, follow: follow[key] || 0};
    });
    console.log(bets);
    Object.keys(overall).forEach((key) => {
        let id = overall[key].name.toLowerCase().replace(' ','');
        let player = bets.find(bet => bet.key === id);
        if (player) {
            player.all = overall[key].all;
            player.wins = overall[key].win;
            player.follow = overall[key].follow;
        }
        console.log(key);
        console.log(player);
    });
}).catch((err) => {
    console.log(err);
});
};
window.setInterval(vote, 5000);