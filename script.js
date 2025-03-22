document.addEventListener("DOMContentLoaded", function() {
    const introVideo = document.getElementById("introVideo");
    const introScreen = document.getElementById("intro");
    const tapScreen = document.getElementById("tapScreen");
    const mainPage = document.getElementById("mainPage");

    // Hide intro and show tap screen after video
    introVideo.onended = function() {
        introScreen.style.display = "none";
        tapScreen.classList.remove("hidden");
    };

    // Click to continue
    tapScreen.addEventListener("click", function() {
        tapScreen.style.display = "none";
        mainPage.classList.remove("hidden");
    });
});
