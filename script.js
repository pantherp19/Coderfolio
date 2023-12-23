console.log('hello world');

// Activate Menu Btn

let menuBtn = document.getElementById('menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
    // console.log(menuBar, menuBtn);
}

// Remove Menu Bar On Scroll

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
    // console.log(menuBar, menuBtn);
}