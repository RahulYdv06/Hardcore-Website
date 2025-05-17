document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".discord-button");

    button.addEventListener("mouseover", () => {
        button.style.background = "#7289DA";
    });

    button.addEventListener("mouseleave", () => {
        button.style.background = "#5865F2";
    });
});
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
