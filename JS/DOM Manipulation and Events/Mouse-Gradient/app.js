function attachGradientEvents() {
    const grad = document.getElementById('gradient');
    grad.addEventListener('mousemove', mouseGradient);
    
    function mouseGradient(e) {
        const result = document.getElementById('result');
        let power = e.offsetX / (e.target.clientWidth - 1) * 100;

        power = Math.floor(power);

        result.textContent = power + '%';
    }
}