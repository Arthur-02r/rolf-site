const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "☀️";
    }
});

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (progressBar && progressText) {
        progressBar.style.width = progress + "%";
        progressText.textContent = "Прочитано: " + Math.round(progress) + "%";
    }
});