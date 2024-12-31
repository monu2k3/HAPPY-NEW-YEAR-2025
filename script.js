function celebrateAgain() {
  window.location.reload();
}

// Function to simulate firecracker effect using animations
document.addEventListener('DOMContentLoaded', () => {
  const firecrackerElement = document.getElementById('firecracker');
  setInterval(() => {
    firecrackerElement.style.opacity = Math.random() > 0.5 ? 1 : 0;
  }, 500);
});
