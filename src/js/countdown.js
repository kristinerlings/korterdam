const $countdownDays = document.querySelector('.c__days');
const $countdownHours = document.querySelector('.c__hrs');
const $countdownMinutes = document.querySelector('.c__min');
const $countdownSeconds = document.querySelector('.c__sec');
const $countdownTitle = document.querySelector('.c__title');
const $countdownStatus = document.querySelector('.c__status');
const finalDate = new Date('2023-06-23T18:00:00');

const updateCountdown = () => {
  const currentTime = new Date();
  const remainingSeconds = Math.floor((finalDate - currentTime) / 1000);
  const twoDaysInSeconds = 2 * 24 * 60 * 60;

  if (remainingSeconds > 0) {
    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor(((remainingSeconds % 86400) % 3600) / 60);
    const seconds = remainingSeconds % 60;

    $countdownDays.textContent = `${days}`;
    $countdownHours.textContent = `${hours}`;
    $countdownMinutes.textContent = `${minutes}`;
    $countdownSeconds.textContent = `${seconds}`;
  } else if (currentTime >= finalDate) {
    $countdownDays.textContent = `0`;
    $countdownHours.textContent = `0`;
    $countdownMinutes.textContent = `0`;
    $countdownSeconds.textContent = `0`;
    if (
      currentTime >= finalDate &&
      currentTime <= finalDate + twoDaysInSeconds
    ) {
      $countdownTitle.textContent = `The event has started!`;
      $countdownStatus.textContent = `See you there!`;
    } else {
      $countdownTitle.textContent = `The event has ended!`;
      $countdownStatus.textContent = `See you next time!`;
    }
  }
};


const init = () => {
  updateCountdown();
  // Update every second
  setInterval(updateCountdown, 1000);
};

init();
