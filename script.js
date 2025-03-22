document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");
    const tapScreen = document.getElementById("tapScreen");
    const mainPage = document.getElementById("mainPage");

    // Step 1: Show Intro for 3 Seconds
    setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            tapScreen.style.display = "flex"; // Show Tap Screen
        }, 500);
    }, 3000);

    // Step 2: Tap to Continue
    tapScreen.addEventListener("click", function() {
        tapScreen.style.opacity = "0";
        setTimeout(() => {
            tapScreen.style.display = "none";
            mainPage.style.display = "block"; // Show Main Page
        }, 500);
    });
});
