// Create an Audio object
const clickSound = new Audio('mouseClick.mp3');
clickSound.volume = 0.2;
// Play on all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0; // reset to start
    clickSound.play();
  });
});
