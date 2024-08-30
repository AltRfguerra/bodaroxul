// Set the date we're counting down to
const countDownDate = new Date("Sep 15, 2024 21:00:00").getTime();

// Update the count down every 1 second
const countdownfunction = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
  
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="days", "hours", "minutes", "seconds"
  document.getElementById("days").innerHTML = days.toString().padStart(3, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("days").innerHTML = "000";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

setInterval(() => {
  const numberContainer = document.querySelector('.countdown-number');
  numberContainer.classList.toggle('active');
}, 1000);
