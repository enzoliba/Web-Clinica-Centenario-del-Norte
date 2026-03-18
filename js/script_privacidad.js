
document.addEventListener("DOMContentLoaded", () => {
    /* 
       ACORDEÓN PRO
  */
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const btn = item.querySelector(".accordion-btn");
        if (!btn) return;

        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("active");

            accordionItems.forEach(i => i.classList.remove("active"));
            if (!isOpen) item.classList.add("active");
        });
    });
});
