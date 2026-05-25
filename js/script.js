const linterna = document.getElementById('linterna');

window.addEventListener('mousemove', (e) => {
    linterna.style.setProperty('--cursor-x', e.clientX + 'px');
    linterna.style.setProperty('--cursor-y', e.clientY + 'px');
});


