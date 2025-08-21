const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const nglBtn = document.getElementById("nglBtn");

// Tombol No kabur
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Klik Yes
yesBtn.addEventListener("click", () => {
  message.textContent = "You're my girlfriend 💖";
  message.classList.add("heartbeat");
  nglBtn.style.display = "inline-block"; // tombol NGL muncul
  setInterval(createEmoji, 200); // jatuhin banyak emoji
});

// emoji jatuh ke bawah
function createEmoji() {
  const emojis = ["💖","🌸","❤️","✨","💐","🌹","💕","💞","💓"];
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 20 + 20 + "px";
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

// hearts naik otomatis
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  const options = ["❤️","💖","💕","💓","💘","🌸","✨"];
  heart.textContent = options[Math.floor(Math.random() * options.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 800);
