var navBars = document.getElementById('navBars');
navBars.addEventListener('click',()=>{
    let links = document.getElementById('links');
    
    if(links.className === 'hide'){
        links.className = 'show';
    } else if(links.className === 'show') {
        links.className = 'hide';
    } else {
        links.className = 'show';
    }
});

