// Listen for a keypress event, play a sound that match with the key pressed.

(() => {
  console.log("drumkit file loaded!");

  function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
  }


  // function called each keypress
  function playSound(e) {

    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    // debugger;
  }

  window.addEventListener('keydown', playSound);

  // create an event listner to reset transition once finished(ended)
  const keys = document.querySelectorAll('.key');

  // now we need to listen to each key event when transition happens
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

})()
