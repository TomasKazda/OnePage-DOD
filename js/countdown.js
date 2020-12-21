let odpocetDatum = new Date("Jan 14, 2021 08:00:00").getTime();
let dayElm = document.getElementById("day");
let hourElm = document.getElementById("hour");
let minuteElm = document.getElementById("minute");
let secondElm = document.getElementById("second");

// aktualizace po 1 sekundě
let x = setInterval(function() {

  let nyni = new Date().getTime();
    
  let zbyva = odpocetDatum - nyni;
    
  let day = Math.floor(zbyva / (1000 * 60 * 60 * 24));
  let hour = Math.floor((zbyva % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((zbyva % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((zbyva % (1000 * 60)) / 1000);
    
  dayElm.textContent = ("0" + day).slice(-2);
  hourElm.textContent = ("0" + hour).slice(-2);;
  minuteElm.textContent = ("0" + minute).slice(-2);;
  secondElm.textContent = ("0" + second).slice(-2);;

  if (zbyva < 0) {
    clearInterval(x);
    document.getElementById("stavova-hlaska").textContent = "Už je čas. Brzy to spustí­me...";
  }
}, 1000);