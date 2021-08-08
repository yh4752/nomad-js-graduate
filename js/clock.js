const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText =`${hours}:${minutes}:${seconds}`;
}

// function getTime(){
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   clockTitle.innerText =
//   `${hours < 10 ? `0${hours}` : hours
//   }:${minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }
getClock()
setInterval(getClock, 1000);