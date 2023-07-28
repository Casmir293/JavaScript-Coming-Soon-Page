// Set date and time (YYYY-MM-DD HH:MM:SS format)
const launchDate = new Date("2023-10-01 12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerText = "Launching now!";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
