let animated = true;
let bets = [];

const drawboard = (challengers) => {
    let githubsvg = '<svg viewBox="0 0 64 64" width="1em" height="1em"><title>#title</title><path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path></svg>'
    let linkedinsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><title>#title</title><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>';
    challengers.forEach((challenger,k) => {
        let [name, lastname, company, languages, slogan, country, years, linkedin, github,youtube] = challenger;
        bets.push({name: name+' '+lastname, all: 0,bet:(k+1*100), wins: 0, follow: 0,key:name.toLowerCase().trim()+lastname.toLowerCase().trim()});
        let item = document.createElement('div');
        item.classList.add('item');
        item.style.setProperty('--order', (k));
        item.setAttribute('id', name.toLowerCase().trim()+lastname.toLowerCase().trim());
        item.style.order =  (k + 1);
        //MARK: item HTML\
        
        out =`
        <img src="https://puzzles.code100.dev/manchester-challengers/challengers/${name.toLowerCase()}${lastname.toLowerCase()}.jpg" alt="Photo of ${name} ${lastname}">
        <div class="namecontainer">
                <h2 class="name">
                    <span class="place"></span>
                    <span>${name} ${lastname}</span>
                    ${github ? '<a href="'+github+'" class="github">'+githubsvg+'</a>': ''}
                    ${linkedin ? '<a href="'+linkedin+'" class="linkedin">'+linkedinsvg+'</a>': ''}
                
                </h2>
                <div class="valuecontainer"><span class="value"></span></div>
                <div class="slogan">${slogan}</div>
                <div class="youtube">
                ${youtube ? '<a href="'+youtube+'" class="youtube">Watch '+name+'\'s interview</a>': '&nbsp;'}
                </div>
                <div class="meta">
                    <!-- <span class="company">${company}</span> -->
                    <span>Languages: ${languages}</span>
                    <!-- <span class="years">${years}</span> -->
                </div>
            </div>
        `;
        item.innerHTML = out;
        document.querySelector('.container').appendChild(item);
    });
};

//#region shuffle the board
const shuffleboard = () => {
    bets.forEach(bet => {
        bet.bet = Math.floor(Math.random() * 1000);
    });
    if (document.querySelector('body').classList.contains('live')) {
        bets.sort((a, b) => b.all - a.all);
    } else {
        bets.sort((a, b) => b.bet - a.bet);
    }
    bets.forEach((bet,k) => {
        let item = document.querySelector('#'+bet.key);
        if (animated) {
            item.style.setProperty('--order', k);
            item.style.order = k;
        }
        if (document.querySelector('body').classList.contains('live')) {
            let valuestring = ' ';
            valuestring += bet.wins ? `${bet.wins} ｘ 🏆 ` : '';
            valuestring += bet.follow ? `${bet.follow} ｘ 🏃🏼‍♂️ ` : '';
            item.querySelector('.place').textContent = k + 1;
            item.querySelector('.value').textContent = valuestring;
        }
    });
    setTimeout(shuffleboard, 2000);
    };
shuffleboard();
//#endregion

//#region animation and layout selector 
document.querySelector('.options').addEventListener('change', () => {
    let container = document.querySelector('.container');
    // toggle layout
    document.querySelector('#leaderboard').checked ? 
        container.classList.add('leaderboard') :
        container.classList.remove('leaderboard');
    // toggle animation
    if (!document.querySelector('#ani').checked){
        container.classList.remove('animation');
        animated = false;
    } else {
        container.classList.add('animation');
        animated = true;
    }
});
//#endregion

//#region youtube player
document.querySelector('#yt button').addEventListener('click', function(e) {
    document.querySelector('body').classList.remove('chosen');
    player.stopVideo();
});
document.body.addEventListener('click', e => {
    let t = e.target;
    if (t.tagName === 'A' && t.classList.contains('youtube')) {
        e.preventDefault();
        animated = false;
        document.querySelector('#ani').checked = false;
        let src = t.getAttribute('href');
        src = src.split('v=')[1];
        if (player) {
            player.loadVideoById(src);
        } else {
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: src,
                playerVars: {
                'playsinline': 1,
                    'autoplay': 1
                }
            });
        }
        document.querySelector('body').classList.add('chosen');
    }
});
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onPlayerReady(event) {
    event.target.playVideo();
}
//#endregion


//MARK: pull data
let url = 'http://localhost:8080/manchester-challengers/challengers.csv';
url = 'https://puzzles.code100.dev/manchester-challengers/challengers.csv';
fetch(url).then(response => response.text()).then(text => {
    let lines = text.split('\n');
    lines.shift();
    lines = lines.filter(line => !line.startsWith('-'));
    let challengers = lines.map(line => line.split(';'));
    drawboard(challengers);
});