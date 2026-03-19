(() => {
  let minutes = 5;//Break sessions start at 5:00
  let seconds = 0;
  let intervalId = null;//will store the id of the interval so we can pause/clear
  let isRunning = false;//tracks whether the timer is currently running
  //Get references to DOM elements for timer displace and control elements
  const timerDisplay = document.getElementById('timer2');//countdown
  const startBtn = document.getElementById('start2');//start button
  const pauseBtn = document.getElementById('pause2');//pause button
  const resetBtn = document.getElementById('reset2');//reset button
  //function to update timer display
  function updateTimerDisplay() {
    //ensure minutes and seconds are always 2 digit
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    timerDisplay.textContent = `${m}:${s}`; //update
  }
  updateTimerDisplay();//initialize display immediately
  //function to start and run the timer
  function startTimer() {
    if (isRunning) return;//do nothing if timer is already running
    isRunning = true;//set timer as running
    //set up intervals to count down by 1 second
    intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {//if minutes and seconds reach 0, timer is up
          clearInterval(intervalId);
          isRunning = false;
          alert("Time's up!");//alert user
          return;
        }
        minutes--;//decrease by 1 minute
        seconds = 59;//reset seconds
      } else {
        seconds--;//otherwise, only decrease seconds
      }
      updateTimerDisplay();//run this every second
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(intervalId);//stop timer
    isRunning = false;//mark as not running
  }

  function resetTimer() {
    clearInterval(intervalId);//stop timer
    isRunning = false;//mark as not running
    minutes = 5;//reset
    seconds = 0;
    updateTimerDisplay();//set timer to default
  }
  //attach event listners to buttons
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
})();
