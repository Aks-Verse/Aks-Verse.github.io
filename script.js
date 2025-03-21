function startSite() {
    let tapScreen = document.getElementById("tap-screen");
    tapScreen.style.opacity = "0"; // Fade out animation
    setTimeout(() => {
        tapScreen.style.display = "none";
        document.getElementById("main-content").style.display = "flex";
    }, 500); // Wait for animation to complete
}
