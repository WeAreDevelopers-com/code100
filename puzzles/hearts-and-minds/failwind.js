let items = document.querySelectorAll('#canvas div');
[...items].forEach(item => {
    console.log(item);
    let data = item.className.split(' ');
    data.forEach(d => {
        let info = d.split('-');
        switch(info[0]) {
            case 'left':
                item.style.left = info[1]+'%';
            break;
            case 'top':
                item.style.top = info[1]+'%';
            break;
            case 'rot':
                item.style.transform = 'rotate('+info[1]+'deg)';
            break;
            case 'size':
                item.style.fontSize = info[1]+'vmin';
            break;
            case 'color':
                item.style.color = '#' + info[1];
            break;
        }
    })
});
