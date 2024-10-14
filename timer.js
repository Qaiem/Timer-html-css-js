let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let Seconds = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date(); // We use new Date(); for getting current time and current date

  // Get the current hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  //In this tenary Oprator we are doing that we add 0 if hours,min,sec is less than 10
  // Format time to ensure two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Set the formatted time back to the innerHTML of the respective elements
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;
}, 1000);
