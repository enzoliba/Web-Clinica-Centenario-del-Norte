document.addEventListener("DOMContentLoaded", () => {
    /* =========================================
       3. FAQ ACORDEÓN (Tu lógica)
    ========================================= */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(other => {
                    if (other !== item) other.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        }
    });

    /* =========================================
       4. MODAL (Adaptado a .hidden)
    ========================================= */
    const modal = document.getElementById('questionModal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const form = document.getElementById('questionForm');
    const toast = document.getElementById('toast');

    // Funciones de utilidad
    function openModal() {
        if(modal) modal.classList.remove('hidden');
    }

    function closeModal() {
        if(modal) {
            modal.classList.add('hidden');
            form.reset(); // Limpiar formulario al cerrar
        }
    }

    // Event Listeners
    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal();
        });
    }

    /* =========================================
       5. VALIDACIÓN FORM (Tu lógica + Toast)
    ========================================= */
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const questionInput = document.getElementById('question');

    function showToast(message) {
        if(toast) {
            toast.textContent = message;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        } else {
            alert(message);
        }
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            let valid = true;
            let errorMessage = "";

            if (nameInput.value.trim().length < 3) {
                errorMessage = 'Ingrese un nombre válido (mínimo 3 letras)';
                valid = false;
            } else if (!validateEmail(emailInput.value)) {
                errorMessage = 'Correo electrónico inválido';
                valid = false;
            } else if (questionInput.value.trim().length < 10) {
                errorMessage = 'La pregunta debe tener al menos 10 caracteres';
                valid = false;
            }

            if (!valid) {
                alert("⚠️ " + errorMessage); // Usamos alert para error rápido
            } else {
                showToast('✅ Tu pregunta fue enviada correctamente');
                closeModal();
            }
        });
    }
});
