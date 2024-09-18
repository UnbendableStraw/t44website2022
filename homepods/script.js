// Array of quotes
const quotes = [
    "I Am HomePod Man",
    "Home of Challenge Fixing",
    "Look Ma, No Recalls!",
    "Nic Fixes What Apple Won't",
    "Snap, Crackle, Pop, My HomePod!",
    "Wake Up. Fix HomePod. Get Out of Bed.",
    "Busted HomePod?",
    "Oh My Pod.",
    "I have a fever. The only cure, is more HomePod.",
    "Will Work 4 HomePods"
];

// Function to display a random quote
function displayRandomQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Display the random quote
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Run the function when the page loads
window.onload = displayRandomQuote;
