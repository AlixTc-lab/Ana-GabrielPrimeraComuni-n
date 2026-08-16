



const stars = document.querySelector('.stars');

for(let i=0;i<160;i++){
    const s = document.createElement('div');
    s.classList.add('star');

    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (Math.random()*8 + 5) + 's';
    s.style.animationDelay = (Math.random()*5) + 's';
    s.style.width = (Math.random()*3 + 1) + 'px';
    s.style.height = s.style.width;

    stars.appendChild(s);
}

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// Intentar reproducir automáticamente
music.play().then(() => {
    btn.innerHTML = "🔊";
}).catch(() => {
    // El navegador bloqueó el autoplay
    btn.innerHTML = "🎵";
});

// Botón para apagar/encender
btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.innerHTML = "🔊";
    } else {
        music.pause();
        btn.innerHTML = "🎵";
    }
});
