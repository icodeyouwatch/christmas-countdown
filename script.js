const daysElement    = document.querySelector("#days > span");
const hoursElement   = document.querySelector("#hours > span");
const minutesElement = document.querySelector("#minutes > span");
const secondsElement = document.querySelector("#seconds > span");

const date  = new Date("Dec 25, 2023 00:00:00").getTime();
let now     = new Date().getTime();

let timeBetween = date - now;

let countDown = () => {
    let days    = Math.floor( timeBetween / 1000 / 60 / 60 / 24 );
    let hours   = Math.floor( timeBetween / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor( timeBetween / 1000 / 60 ) % 60;
    let seconds = Math.floor( timeBetween / 1000 ) % 60;

    timeBetween -= 1000;

    daysElement.innerHTML    = days;
    hoursElement.innerHTML   = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}
countDown();

let intervalTime = setInterval(() => {
    countDown();

    if( timeBetween < 0 ) {
        clearInterval( intervalTime );

        document.querySelector(".content > h1").remove();
        document.querySelector(".content > .countdown").remove();
        document.querySelector(".content").innerHTML = "<h2>Merry Christmas!</h2>";
    }
}, 1000);