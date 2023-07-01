const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
function updateTimer() {
  // Get the current date and time
  const currentDate = new Date();

  // Extract the relevant information
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the timer string
  const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  // Update the timer display in the HTML
  const timerElement = document.getElementById('timer');
  timerElement.textContent = timerString;
}

// Update the timer initially
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
