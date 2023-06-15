const countdownDays = document.querySelector('.countdown__days');
const countdownHours = document.querySelector('.countdown__hrs');
const countdownMinutes = document.querySelector('.countdown__min');
const countdownSeconds = document.querySelector('.countdown__sec');
const finalDate = new Date('2023-06-23T18:00:00');

const updateCountdown = () => {
  const currentTime = new Date();
  const remainingSeconds = Math.floor((finalDate - currentTime) / 1000);

  if (remainingSeconds > 0) {
    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor(((remainingSeconds % 86400) % 3600) / 60);
    const seconds = remainingSeconds % 60;

    countdownDays.textContent = `${days}`;
    countdownHours.textContent = `${hours}`;
    countdownMinutes.textContent = `${minutes}`;
    countdownSeconds.textContent = `${seconds}`;
  } else if (currentTime >= finalDate) {
    countdownDays.textContent = `0`;
    countdownHours.textContent = `0`;
    countdownMinutes.textContent = `0`;
    countdownSeconds.textContent = `0`;
  }
};

const init = () => {
  updateCountdown();
  // Update every second
  setInterval(updateCountdown, 1000);
};

init();
