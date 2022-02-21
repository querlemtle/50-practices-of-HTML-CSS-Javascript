const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class="key">
      ${e.key === " " ? "(empty)" : e.key}
      <small>event.key</small>
    </div>
    <div class="key">
      ${e.keyCode}
      <small id="keycode">event.keyCode</small>
      <small id="deprecated">（已廢棄）</small>
    </div>
    <div class="key">
      ${e.code}
      <small>event.code</small>  
    </div>`;
});