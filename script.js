function updateClock() {
    const durbanTime = new Date().toLocaleString("en-US", { 
        timeZone: "Africa/Johannesburg" 
    });
    const dateObj = new Date(durbanTime);

    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = dateObj.toLocaleDateString("en-US", options);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Mode toggle
const toggleButton = document.getElementById('mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode') 
        ? 'Switch to Dark Mode' 
        : 'Switch to Light Mode';
});

setInterval(updateClock, 1000);
updateClock();