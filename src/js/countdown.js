const countdownElement = document.getElementById('countdown');
const finalDate = new Date('2023-06-23T18:00:00');

const updateCountdown = () => {
  const currentTime = new Date();
  const remainingSeconds = Math.floor((finalDate - currentTime) / 1000);

  if (remainingSeconds > 0) {
    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor(((remainingSeconds % 86400) % 3600) / 60);
    const seconds = remainingSeconds % 60;

    countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Check festival status
    if (currentTime >= finalDate) {
      countdownElement.textContent = 'Festival has started';
    } else if (remainingSeconds <= -172800) {
      // 2 days after festival started:
      countdownElement.textContent = 'Festival countdown has ended!';
    }
  }
};

const init = () => {
  updateCountdown();
  // Update every second
  setInterval(updateCountdown, 1000);
};

init();
