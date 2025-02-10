document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.querySelector("#no");

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 150); // Keeps button within screen width
        const y = Math.random() * (window.innerHeight - 50); // Keeps button within screen height

        noBtn.style.position = "absolute"; // Ensures it moves
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Move button when clicked (desktop & mobile)
    noBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents clicking action
        moveNoButton(); // Moves button to a new position
    });

    // Move button when tapped (for mobile users)
    noBtn.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevent accidental clicks
        moveNoButton(); // Moves button
    });
});
document.getElementById("yes").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page reload
    // Redirect to success.html
    window.location.href = "success.html"; 
});