(function() {
    document.querySelector('.burger-menu').addEventListener('click', toogleBurgerMenu);

    function toogleBurgerMenu(e) {
        document.body.classList.toggle('stop-scrolling');
        document.querySelector('.main-nav').classList.toggle('change-burger-btn');
        document.querySelector('.nav-links').classList.toggle('show-links');
        document.getElementById('modal').classList.toggle('modal-efects');
    }

    document.querySelector('.nav-links').addEventListener('click', closeBurgerMenu);

    function closeBurgerMenu() {
        document.body.classList.remove('stop-scrolling');
        document.querySelector('.main-nav').classList.remove('change-burger-btn');
        document.querySelector('.nav-links').classList.remove('show-links');
        document.getElementById('modal').classList.remove('modal-efects');
    }

    window.onclick = (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            document.querySelector('.main-nav').classList.remove('change-burger-btn');
            document.querySelector('.nav-links').classList.remove('show-links');
            document.getElementById('modal').classList.remove('modal-efects');
        }
    }
})();
