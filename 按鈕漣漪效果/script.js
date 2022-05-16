const buttons = document.querySelectorAll(".ripple");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    // 回傳點擊時的滑鼠座標（以視窗為參考點）
    const x = event.clientX;
    const y = event.clientY;

    // 回傳按鈕左上角的座標（以viewport為參考點）
    const buttonTop = event.target.getBoundingClientRect().top;
    const buttonLeft = event.target.getBoundingClientRect().left;

    // 以按鈕左上角為參考點(0, 0)，計算點擊處的座標
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // 根據座標建立 circle 元素
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    // 將 circle 接到對應按鈕上
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 300);
  });
}