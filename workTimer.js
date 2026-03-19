(() => {
  // Initial timer values for standard pomodoro session
  let minutes = 25;//Work sessions start at 25:00
  let seconds = 0;
  let intervalId = null;//will store the id of the interval so we can pause/clear
  let isRunning = false;//tracks whether the timer is currently running
  //Get references to DOM elements for timer displace and control elements
  const timerDisplay = document.getElementById('timer1'); //countdown
  const startBtn = document.getElementById('start1'); //start button
  const pauseBtn = document.getElementById('pause1'); //pause button
  const resetBtn = document.getElementById('reset1'); //reset button
  //function to update timer display
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
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
})();
