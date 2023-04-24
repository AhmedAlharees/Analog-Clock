const secondHand = document.querySelector(".main__clock__secondHand");
const minuteHand = document.querySelector(".main__clock__minuteHand");
const hourHand = document.querySelector(".main__clock__hourHand");
const clockAudio = new Audio("sound/clock-ticking.mp3");

window.onload = function () {
  function setTime() {
    const getTime = new Date();
    const seconds = getTime.getSeconds() / 60;
    const minutes = (seconds + getTime.getMinutes()) / 60;
    const hours = (minutes + getTime.getHours()) / 12;
    handsRotation(secondHand, seconds);
    handsRotation(minuteHand, minutes);
    handsRotation(hourHand, hours);
  }

  function handsRotation(handName, rotationValue) {
    handName.style.setProperty("--rotation", `${rotationValue * 360}deg`);
    clockAudio.playbackRate = 1.3;
    clockAudio.play();
  }
  setInterval(setTime, 1000);
};