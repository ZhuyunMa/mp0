import '../css/main.css';

console.log("🔥 ZhuyunMa site loaded at", new Date().toISOString());

window.changeBg = function (color) {
  const card = document.querySelector('.card');
  if (card) {
    card.style.setProperty("background-color", color, "important");
    console.log("🎨 Card background changed to:", color);
  }
};
