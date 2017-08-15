const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    // SECONDS
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // MINUTE
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsHand}deg)`;

    // HOUR
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // FIXING TRANSITION BUG
    if (secondsDegrees === 360) {
        document.querySelector('.hand').style.transition = "none";
    } else {
        document.querySelector('.hand').style.transition = "cubic-bezier(0, 3.82, 0.58, 1) all 0.05s";
    }

}

setInterval(setDate, 1000);