
document.addEventListener("DOMContentLoaded", () => {

    /* 
        BOTÓN MODO OSCURO (AUTO INYECTADO)
  */
    const themeBtn = document.createElement("button");
    themeBtn.className = "theme-toggle";
    themeBtn.innerHTML = "🌙";
    document.body.appendChild(themeBtn);

    const savedTheme = localStorage.getItem("theme-info");
    if (savedTheme === "dark") {
        document.body.classList.add("theme-dark");
        themeBtn.innerHTML = "☀️";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
        const isDark = document.body.classList.contains("theme-dark");
        localStorage.setItem("theme-info", isDark ? "dark" : "light");
        themeBtn.innerHTML = isDark ? "☀️" : "🌙";
    });
});
