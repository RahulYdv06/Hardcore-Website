document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");

    function toggleMusic() {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    }

    document.querySelector(".music-button").addEventListener("click", toggleMusic);
});