const clockTitle = document.querySelector(".js-clock");

function dDay() {
    const dday = new Date("2022-12-25") - new Date();
  // 1000ms 60s 60m 24h
  const day = Math.floor(dday / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
    );
  const minutes = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(
    2,
    "0"
    );
    const seconds = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");
    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

dDay();
setInterval(dDay, 1000);
