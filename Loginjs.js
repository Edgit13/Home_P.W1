document.getElementById('button_submit').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Processing login...');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'Test') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid username or password.');
    }
});

// Додаємо бульбашки на фон
document.addEventListener('DOMContentLoaded', function() {
    const bubblesBg = document.querySelector('.bubbles-bg');
    if (bubblesBg) {
        for (let i = 0; i < 18; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            // Випадковий розмір (20-50px)
            const size = Math.random() * 30 + 20;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            // Випадкова позиція по X
            bubble.style.left = `${Math.random() * 100}%`;
            // Випадкова затримка анімації
            bubble.style.animationDelay = `${Math.random() * 10}s`;
            // Випадкова швидкість
            bubble.style.animationDuration = `${10 + Math.random() * 8}s`;
            bubblesBg.appendChild(bubble);
        }
    }
});