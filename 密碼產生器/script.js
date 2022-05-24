const container = document.querySelector(".container");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const clipboardEl = document.getElementById("clipboard");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

clipboardEl.addEventListener("click", () => {
  // 把密碼寫入暫時的 textarea，全選並複製內容後將 textarea 刪掉
  const textarea = document.createElement("textarea");
  const password = resultEl.textContent;
  if (!password) return;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("已複製密碼！");
});

// https://www.w3schools.com/charsets/ref_html_ascii.asp 
// 英文字母共 26 個，大寫 A 為 65；小寫 a 為 97
// 數字 0 為 48
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  // 過濾掉 false （未勾選者）
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // 若全部沒勾，顯示錯誤訊息
  if (typesCount === 0) {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "請至少勾選一個項目！";
    container.appendChild(errorMsg);
    setTimeout(() => errorMsg.remove(), 1500);
    return;
  }

  // 產生隨機密碼
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}