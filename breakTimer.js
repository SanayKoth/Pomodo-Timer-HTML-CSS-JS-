(() => {
  let minutes = 5;
  let seconds = 0;
  let intervalId = null;
  let isRunning = false;

  const timerDisplay = document.getElementById('timer2');
  const startBtn = document.getElementById('start2');
  const pauseBtn = document.getElementById('pause2');
  const resetBtn = document.getElementById('reset2');

  function updateTimerDisplay() {
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    timerDisplay.textContent = `${m}:${s}`;
  }
  updateTimerDisplay();

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalId);
          isRunning = false;
          alert("Time's up!");
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(intervalId);
    isRunning = false;
  }

  function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    minutes = 5;
    seconds = 0;
    updateTimerDisplay();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
})();
