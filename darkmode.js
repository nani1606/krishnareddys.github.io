function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
// Check user preference on page load
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const theme = localStorage.getItem("theme");

if (theme === "dark") {
    body.classList.add("dark-mode");
    document.getElementById("toggle").checked = true;
}

});
