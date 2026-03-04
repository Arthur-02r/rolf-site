document.addEventListener("DOMContentLoaded", function() {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // минимальное расстояние свайпа
    const prevBtn = document.querySelector(".prev-page");
    const nextBtn = document.querySelector(".next-page");

    document.addEventListener("touchstart", function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const distance = touchEndX - touchStartX;

        if(distance > minSwipeDistance) {
            // свайп вправо → предыдущая страница
            if(prevBtn) prevBtn.click();
        } else if(distance < -minSwipeDistance) {
            // свайп влево → следующая страница
            if(nextBtn) nextBtn.click();
        }
    }
});