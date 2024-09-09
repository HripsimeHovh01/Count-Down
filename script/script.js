"use stirct";

let countdownInterval;
const targetDate = new Date("2024-10-10T00:00:00").getTime();
const start = document.querySelector("#start-button").addEventListener("click", startCountdown);
const stop = document.querySelector("#stop-button").addEventListener("click", stopCountdown);

function startCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const text = (document.querySelector(
      "#countdown"
    ).innerHTML = `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  const countDown = document.querySelector("#countdown").innerHTML =
    "Countdown stopped";
  const startEl = document.querySelector("#start-button").disabled = false;
}
