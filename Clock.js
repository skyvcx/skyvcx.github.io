const timeN = document.querySelector(".js-clock");



function timeNow() {
  const date = new Date();
  const hour = String(parseInt(date.getHours()))
  .padStart(2, "0")
  const min = String(parseInt(date.getMinutes()))
  .padStart(2, "0")
   timeN.innerText=`${hour}:${min}`
}

timeNow();
setInterval(timeNow, 1000);