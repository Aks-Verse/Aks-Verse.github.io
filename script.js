document.addEventListener("DOMContentLoaded", function () {
    let introVideo = document.getElementById("intro-video");
    let introScreen = document.getElementById("intro-screen");
    let tapScreen = document.getElementById("tap-screen");

    // Intro Video Ends → Show Tap to Continue
    introVideo.onended = function () {
        introScreen.style.display = "none";
        tapScreen.style.display = "flex";
    };
});

function enterSite() {
    document.getElementById("tap-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
}
