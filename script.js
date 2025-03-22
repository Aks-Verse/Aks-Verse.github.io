document.addEventListener("DOMContentLoaded", () => {
    const tapScreen = document.querySelector(".tap-screen");
    const mainPage = document.querySelector(".main");
    const introVideo = document.querySelector(".intro");

    setTimeout(() => {
        introVideo.style.opacity = "0";
        setTimeout(() => {
            introVideo.style.display = "none";
        }, 500);
    }, 3000);

    tapScreen.addEventListener("click", () => {
        tapScreen.style.opacity = "0";
        setTimeout(() => {
            tapScreen.style.display = "none";
            mainPage.classList.remove("hidden");
        }, 500);
    });
});
