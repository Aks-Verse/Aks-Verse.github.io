document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById("intro-screen");
    const tapScreen = document.getElementById("tap-screen");
    const mainPage = document.getElementById("main-page");
    const introVideo = document.getElementById("intro-video");

    // Intro Video Ends → Show Tap Screen
    introVideo.addEventListener("ended", function() {
        introScreen.style.display = "none";
        tapScreen.style.display = "flex";
    });

    // Tap to Continue → Show Main Page
    tapScreen.addEventListener("click", function() {
        tapScreen.style.display = "none";
        mainPage.style.display = "block";
    });
});
