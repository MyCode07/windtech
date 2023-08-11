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


const arrow = `<button><svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.45699 10.4556L0.491994 2.09611C0.359027 1.95663 0.284851 1.77132 0.284851 1.57861C0.284851 1.38591 0.359027 1.2006 0.491994 1.06111L0.500994 1.05211C0.565454 0.98426 0.643044 0.93023 0.729043 0.89331C0.815043 0.856389 0.907654 0.83735 1.00124 0.83735C1.09483 0.83735 1.18745 0.856389 1.27344 0.89331C1.35944 0.93023 1.43703 0.98426 1.50149 1.05211L9.00149 8.92411L16.4985 1.05211C16.563 0.98426 16.6405 0.93023 16.7265 0.89331C16.8125 0.856389 16.9052 0.83735 16.9987 0.83735C17.0923 0.83735 17.1849 0.856389 17.2709 0.89331C17.3569 0.93023 17.4345 0.98426 17.499 1.05211L17.508 1.06111C17.641 1.2006 17.7151 1.38591 17.7151 1.57861C17.7151 1.77132 17.641 1.95663 17.508 2.09611L9.54299 10.4556C9.47295 10.5291 9.3887 10.5877 9.29536 10.6277C9.20203 10.6676 9.10154 10.6883 8.99999 10.6883C8.89845 10.6883 8.79796 10.6676 8.70462 10.6277C8.61128 10.5877 8.52704 10.5291 8.45699 10.4556Z" fill="#444444"/>
</svg></button>
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