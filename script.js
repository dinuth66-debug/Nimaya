// Function to create floating background emojis
function createHearts() {
    const emojis = ['❤️', '💖', '✨', '🌸', '💘'];
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHearts, 300);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const noBtn = document.getElementById('noButton');
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function nextPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>I knew you'd say yes, Nimaya! 🥰</h1>
            <img id="val-photo" src="YOUR_IMAGE_URL_HERE" alt="Our Photo">
            <p style="font-size: 1.5em; color: #ff4d6d; font-family: 'Dancing Script';">See you on the 14th! ❤️</p>
        </div>`;
}
