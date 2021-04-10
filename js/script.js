window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.header__burger'),
          header = document.querySelector('.header'),
          headerMenuClose = document.querySelector('.header__menu__close');



    // Функция для слайдера 3d

    function slider3d(imgsSrc, cubes, arrowPrev, arrowNext) {
        const imgsSrc_ = document.querySelectorAll(imgsSrc),
              cubes_= document.querySelectorAll(cubes),
              prev_ = document.querySelector(arrowPrev),
              next_ = document.querySelector(arrowNext);
            
        let angle = 0,
            src = [],
            counter = 0;

        imgsSrc_.forEach(item => {
            src.push(item.getAttribute('src'));
        });

        prev_.addEventListener('click', () => {
            counter--;
            if (counter < 0) {
                counter = 3;
            }
            angle += 90;
            src.unshift(src.pop());
            cubes_.forEach((item, index)=> {
                for (let i = 0; i < item.children.length; i++) {
                    if (i == counter) {
                        item.children[i].firstElementChild.setAttribute('src', `${src[index]}`);
                    }
                }
                item.style.transform = `rotateY(${angle}deg)`;
            });
        });

        next_.addEventListener('click', () => {
            counter++;
            if (counter > 3) {
                counter = 0;
            }
            angle -= 90;
            src.push(src.shift());
            cubes_.forEach((item, index)=> {
                for (let i = 0; i < item.children.length; i++) {
                    if (i == counter) {
                        item.children[i].firstElementChild.setAttribute('src', `${src[index]}`);
                    }
                }
                item.style.transform = `rotateY(${angle}deg)`;
            });
        });
    }

    slider3d('.questSl__src', '.questSl__cube--1', '.questSl__arrow__prev--1', '.questSl__arrow__next--2');
    
    // Функция для появления-скрытия модалки

    function calcScroll() {
        let div = document.createElement('div');
      
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
      
        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
      
        return scarollWidth;
      }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
              modal_ = document.querySelector(modal),
              modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });
    
            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains(modal.replace(/\./, ''))) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal', 'modal--visible', '[data-modal]', '.modal__close');

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