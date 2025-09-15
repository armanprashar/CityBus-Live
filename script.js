function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen-container');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected screen
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
    }

    // Update active navigation item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    const currentNav = document.querySelector(`#${screenId.split('-')[0]}-nav`);
    if (currentNav) {
        currentNav.classList.add('active');
    }
}

// Add event listeners for crowd report options
document.addEventListener('DOMContentLoaded', () => {
    const crowdOptions = document.querySelectorAll('.crowd-option');
    crowdOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from all options
            crowdOptions.forEach(opt => opt.classList.remove('selected'));
            // Add 'selected' class to the clicked option
            option.classList.add('selected');
        });
    });
});