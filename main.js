
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
const dayDiv = document.getElementById("today")

function rotateSecondHand() {
    // Get All
    const now = new Date();

    //Get Time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Get Day
    const day = now.getDay();
    const date = now.getDate();
    const days_of_week = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    const today = days_of_week[day];
    
    dayDiv.textContent = today + ", " + date;


    const secondDegrees = ((seconds / 60) * 360); // +90 to start from 12 o'clock
    second.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minuteDegrees = ((minutes / 60) * 360);
    minute.style.transform = `rotate(${minuteDegrees}deg)`;

    const hourDegrees = ((hours / 12) * 360) + minuteDegrees / 12
    hour.style.transform = `rotate(${hourDegrees}deg)`;

 

  }

setInterval(rotateSecondHand, 1000);





