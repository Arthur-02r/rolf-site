document.addEventListener("DOMContentLoaded", function() {

    const themeToggle = document.getElementById("themeToggle");
    const fontToggle = document.getElementById("fontToggle");
    const storyText = document.getElementById("storyText");

    // ===== ТЕМА =====
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️";
        }
    });

    // ===== ШРИФТ =====
    const fonts = ["font-classic", "font-comic", "font-modern"];
    let currentFont = 0;

    if (storyText) {
        const savedFont = localStorage.getItem("selectedFont");

        if (savedFont && fonts.includes(savedFont)) {
            storyText.classList.add(savedFont);
            currentFont = fonts.indexOf(savedFont);
        } else {
            storyText.classList.add("font-classic");
        }

        if (fontToggle) {
            fontToggle.addEventListener("click", function() {
                storyText.classList.remove(fonts[currentFont]);
                currentFont = (currentFont + 1) % fonts.length;
                storyText.classList.add(fonts[currentFont]);

                localStorage.setItem("selectedFont", fonts[currentFont]);
            });
        }
    }

    // ===== ПРОГРЕСС =====
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

});