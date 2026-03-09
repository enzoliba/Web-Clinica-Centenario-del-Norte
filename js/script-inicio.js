document.addEventListener('DOMContentLoaded', (event) => {
        const menuToogle = document.querySelector('.menu-toggle'); 
        const nav = document.querySelector('.main-nav'); 
        const navLinks = document.querySelector('.nav-links'); 

        if (menuToogle && nav) {
            menuToogle.addEventListener('click', () => {
                nav.classList.toggle('open');
            });
        }
        
        if (navLinks) {
            navLinks.addEventListener('click', (e) => {
                if (window.innerWidth <= 1280) {
                    const link = e.target.closest('a');
                    const listItem = e.target.closest('li');

                    if (link && listItem.querySelector('.submenu')) {
                        e.preventDefault();

                        const submenu = listItem.querySelector('.submenu');

                        document.querySelectorAll('.nav-links > li').forEach(item => {
                            if (item !== listItem && item.classList.contains('submenu-open')) {
                                item.classList.remove('submenu-open');
                                item.querySelector('.submenu').style.maxHeight = 0 && item.querySelector('.submenu');
                            }
                        });

                        listItem.classList.toggle('submenu-open');

                        if (listItem.classList.contains('submenu-open')) {
                            submenu.style.maxHeight = submenu.scrollHeight + "px";
                        } else {
                            submenu.style.maxHeight = 0;
                        }
                    }
                }
            });
        }
    });


