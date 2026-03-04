document.addEventListener("DOMContentLoaded", function() {
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const topBar = document.querySelector(".top-bar");
    let lastScroll = window.scrollY;

    // ===== Определяем начальный прогресс =====
    let startPercent = 0; // для первой страницы
    if(document.body.dataset.page === "page2") {
        startPercent = 50; // для второй страницы
    }

    if(progressFill) progressFill.style.width = startPercent + "%";
    if(progressText) progressText.textContent = Math.round(startPercent) + "%";

    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        let progress = startPercent;
        if(docHeight > 0){
            // прогресс по странице
            let scrollProgress = (scrollTop / docHeight) * 50; // половина полосы на страницу
            progress = startPercent + scrollProgress;
        }
        progress = Math.min(progress, 100);

        if(progressFill) progressFill.style.width = progress + "%";
        if(progressText) progressText.textContent = Math.round(progress) + "%";

        // ===== Скрытие/появление верхней панели =====
        if(scrollTop > lastScroll && scrollTop > 50) {
            topBar.classList.add("hidden");
        } else {
            topBar.classList.remove("hidden");
        }

        lastScroll = scrollTop;
    });
});