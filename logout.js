function resetFilters() {
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('locationTerm');
    localStorage.removeItem('distanceFilter');
    localStorage.removeItem('likedVehicles');
    localStorage.removeItem('savedVehicles');
}

document.addEventListener('DOMContentLoaded', () => {
    // Clear user-specific data from localStorage
    resetFilters();

    // Countdown for redirect
    let countdown = 3;
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'index.html';
        }
    }, 1000);
});