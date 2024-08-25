function startClock() {
    const clockElement = document.querySelector('.relogio .clocky');

    function updateClock() {
        const dataEHoraDeAgora = new Date();
        const hora = String(dataEHoraDeAgora.getHours()).padStart(2, '0');
        const minutos = String(dataEHoraDeAgora.getMinutes()).padStart(2, '0');
        const segundos = String(dataEHoraDeAgora.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hora}:${minutos}:${segundos}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

document.getElementById('fullscreen-btn').addEventListener('click', function() {
    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen()
});

startClock();