document.addEventListener('DOMContentLoaded', function() {
    const tapScreen = document.getElementById('tap-screen');
    const mainContent = document.getElementById('main-content');
    const bgVideo = document.getElementById('bg-video');

    tapScreen.addEventListener('click', function() {
        tapScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        bgVideo.play();
    });
});
