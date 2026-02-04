// Purple Gift Data
const purpleGifts = [
  "💜 Lavender thought: Calm is also a form of strength.",
  "👑 Royal Purple reminder: You don’t need permission to feel powerful.",
  "🔮 Myth whisper: Amethyst was believed to protect the mind.",
  "🌌 Violet dream: Some ideas only arrive when the world is quiet.",
  "🎨 Creative spark: Purple exists because two opposites agreed to mix.",
  "🌙 Moon tale: Old stories say purple cloth can hold memories.",
  "✨ Fun fact: Purple was once more valuable than gold.",
  "🧠 Philosophy note: Being in-between can be a beautiful place.",
  "🪐 Cosmic purple: The universe loves this color more than we think.",
  "💭 Soft thought: You don’t have to be loud to be deep."
];

// Elements
const giftBtn = document.getElementById("purpleGiftBtn");
const giftBox = document.getElementById("purpleGiftBox");
const giftText = document.getElementById("purpleGiftText");

// Button Click Event
giftBtn.addEventListener("click",  () => {
  const randomIndex = Math.floor(Math.random() * purpleGifts.length);
  popupmsg(purpleGifts[randomIndex]);

});

function popupmsg(message) {
  const popup = document.getElementById("popupMsg");
  const text = document.getElementById("popupText");

  text.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.add("flex");
}

function closePopup() {
  const popup = document.getElementById("popupMsg");
  popup.classList.add("hidden");
  popup.classList.remove("flex");
}