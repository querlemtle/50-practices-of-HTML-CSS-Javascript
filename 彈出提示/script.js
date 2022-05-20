const button = document.getElementById("btn");
const toastsContainer = document.getElementById("toasts");

const messages = [
  "🎉 恭喜成為第一百位幸運兒，你已獲得大獎！",
  "📰 訂閱電子報以即時收到更多優惠！",
  "🎁 將訊息分享給好友，獨樂樂不如眾樂樂",
  "❌ ɐʇɐp pılɐʌuı",
  "✅ 已成功送出交易"
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.textContent = getRandomMessage();
  toastsContainer.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 1500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}