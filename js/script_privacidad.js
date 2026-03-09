
document.addEventListener("DOMContentLoaded", () => {

    /* 
       BOTÓN TEMA (AUTO SEGURO)
    */
    let themeBtn = document.querySelector(".theme-toggle");

    if (!themeBtn) {
        themeBtn = document.createElement("button");
        themeBtn.className = "theme-toggle";
        themeBtn.innerHTML = "🌙";
        document.body.appendChild(themeBtn);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("theme-dark");
        themeBtn.innerHTML = "☀️";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
        const isDark = document.body.classList.contains("theme-dark");
        themeBtn.innerHTML = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

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
