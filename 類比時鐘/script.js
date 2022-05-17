const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle-mode");

const days = ["一", "二", "三", "四", "五", "六", "日"];
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

toggleBtn.addEventListener("click", (event) => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  event.target.textContent = html.classList.contains("dark")
    ? "淺色模式"
    : "深色模式";
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "下午" : "上午";
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  hourEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  timeEl.innerHTML =
    `${meridiem} ${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes}`;

  dateEl.innerHTML = `${months[month]}月<span class="date-circle">${date}</span>日，星期${days[day]}`;
}

setTime();
setInterval(setTime, 1000);
