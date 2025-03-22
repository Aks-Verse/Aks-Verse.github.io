document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");
    const tapScreen = document.getElementById("tapScreen");
    const mainPage = document.getElementById("mainPage");

    // Pehle Intro Screen Show
    setTimeout(() => {
        intro.style.display = "none";
        tapScreen.style.display = "flex";
    }, 3000);

    // Tap karne pe Main Page Show
    tapScreen.addEventListener("click", function() {
        tapScreen.style.display = "none";
        mainPage.style.display = "block";
    });
});
