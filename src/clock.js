const clockTitle = document.querySelector(".js-clock");

function handleClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  clockTitle.innerText = `${h} : ${m} : ${s}`;
}

function init() {
  handleClock();
  setInterval(handleClock, 1000);
}

init();
