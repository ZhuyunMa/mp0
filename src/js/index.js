import '../css/main.css';

console.log("🔥 ZhuyunMa site loaded at", new Date().toISOString());

window.changeBg = function (color) {
  document.body.style.backgroundColor = color;
  console.log("✅ Background changed to:", color);
};
