import { isMobile } from './isMobile.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_noscroll');
        })
    })
}


const arrow = `<button><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.06956 0.625L8.06956 12.0711M8.06956 12.0711L0.99849 5M8.06956 12.0711L15.1406 5"  stroke-width="1.5"/>
</svg>
</button>
`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');

        if (submenu) {
            const link = submenu.previousElementSibling;
            link.insertAdjacentHTML('afterend', arrow);

            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })


    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }

}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_side-fixed')) {
        targetEl.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }

    if (targetEl.classList.contains('_side-fixed__close')) {
        targetEl.closest('._side-fixed').classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})

const headerMenuList = document.querySelectorAll('header nav ul li a');
const pageNav = document.querySelector('.nav ul');
if (headerMenuList.length && pageNav) {
    let i = 1;
    headerMenuList.forEach(item => {
        const li = `<li><a href="${item.href}"><span class="num">0${i}</span><span class="text">${item.textContent}</span></a></li>`;
        pageNav.insertAdjacentHTML('beforeend', li);
        i++;
    })
}