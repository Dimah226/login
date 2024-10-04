const switcherButton = document.getElementById('theme-switcher');
const rootElement = document.documentElement; // Get the :root element

rootElement.className="dark"

// Check if a theme is saved in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.classList.add(savedTheme); // Apply saved theme if it exists
} else {
    rootElement.classList.add('dark'); // Default to dark theme if no saved preference
}

// Toggle theme and save the preference
switcherButton.addEventListener('click', function() {
    if (rootElement.classList.contains('dark')) {
        rootElement.classList.remove('dark');
        rootElement.classList.add('light');
        localStorage.setItem('theme', 'light'); // Save light theme preference
    } else {
        rootElement.classList.remove('light');
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Save dark theme preference
    }
});
