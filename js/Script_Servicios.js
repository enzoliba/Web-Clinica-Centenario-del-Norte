document.addEventListener('DOMContentLoaded', (event) => {
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    const registerForm = document.getElementById('registerForm');
    if (loginLink && loginForm) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            const formValid = loginForm.reportValidity();
            if (formValid) {
                window.location.href = 'formulario_datos.html';
            } else { }
        });
    }
    if (registerLink && registerForm) {
        function validateRegistration(form) {
            const password = form.elements['password'].value;
            const confirmPassword = form.elements['confirmPassword'].value;
            if (!form.reportValidity()) {
                return false;
            }
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
                form.elements['confirmPassword'].focus();
                return false;
            }
            return true;
        }
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (validateRegistration(registerForm)) {
                window.location.href = 'formulario_datos.html';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth <= 767) {
        const footerHeaders = document.querySelectorAll('.footer-links h4');
        footerHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const parent = header.closest('.footer-links');
                const content = parent.querySelector('.footer-content');
                if (parent.classList.contains('active')) {
                    content.style.maxHeight = 0;
                    parent.classList.remove('active');
                } else {
                    document.querySelectorAll('.footer-links.active').forEach(item => {
                        item.classList.remove('active');
                        item.querySelector('.footer-content').style.maxHeight = 0;
                    });
                    parent.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    const updateIcon = (isDark) => {
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateIcon(true);
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');

        updateIcon(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});