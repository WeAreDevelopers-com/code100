document.querySelector('.submitbutton').addEventListener('click', (e) => {
    e.preventDefault();
    let errors = [];
    document.querySelector('.errors').textContent = '';
    document.querySelector('.errors').classList.remove('yay');
    ['name','email','country'].forEach((field) => {
        if (document.querySelector(`#${field}`).value === '') {
            errors.push(field);
        }
    });
    ['privacy','terms'].forEach((field) => {
        if (document.querySelector(`#${field}`).checked === false) {
            errors.push(field);
        }
    });

    if (errors.length > 0) {
        document.querySelector('.errors').textContent = 'Please fill in the following fields: ' + errors.join(', ');
    } else {
        document.querySelector('.errors').classList.add('yay');
        document.querySelector('.errors').textContent = 'Form submitted!';
    }


//name,email,country,privacy,terms
})

let shares = document.querySelectorAll('.share a'); 
shares.forEach(share => {
  if (share.href.endsWith('#')) {
  share.addEventListener('click', (e) => {
    e.preventDefault();
    let name = share.parentNode.parentNode.querySelector('.name').textContent;
    let id = share.parentNode.parentNode.querySelector('.who').id;
    navigator.share({ title: "Accessibility live day speaker " + name, url: ""+'#'+id});
  });
}
});
