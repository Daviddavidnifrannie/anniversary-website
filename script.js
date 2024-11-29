// Countdown functionality
const anniversaryDate = new Date("2024-11-30"); // Replace with your anniversary date

function updateCountdown() {
    const now = new Date();
    const timeRemaining = anniversaryDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Personalized greeting
const greetingMessage = document.getElementById("greeting-message");
greetingMessage.innerHTML = "A love like ours is one to cherish forever. 💖";
