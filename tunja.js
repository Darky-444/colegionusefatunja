document.addEventListener("DOMContentLoaded", function() {
    const titleMain = document.querySelector('.title-main');
    const titleSub = document.getElementById('tunja');
    
    titleMain.addEventListener('animationend', function() {
        titleSub.style.opacity = '1'; // Hace que el texto "Tunja" aparezca
    });
});
