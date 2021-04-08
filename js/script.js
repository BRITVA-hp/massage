window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.header__burger'),
          header = document.querySelector('.header'),
          headerMenuClose = document.querySelector('.header__menu__close');


    // появление - исчезновение меню на мобилке при нажатии на бургер
    function headerDeleteClass() {
        header.classList.remove('header--absolute');
    }
    burger.addEventListener('click', () => {
        header.classList.toggle('header--active');
        if (header.classList.contains('header--active')) {
            header.classList.add('header--absolute');
        } else {
            setTimeout(headerDeleteClass, 300);
        }
    });
    headerMenuClose.addEventListener('click', () => {
        header.classList.remove('header--active');
        setTimeout(headerDeleteClass, 300);
    });

});