// Get user's city using an API
async function setCityName() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const cityName = data.city || 'your area';

        // Only update the first review to use the user's city
        document.getElementById('cityName').textContent = cityName;
        document.getElementById('cityNameReview1').textContent = ` from ${cityName}`;
    } catch (error) {
        console.error('Error fetching city data:', error);
    }
}

setCityName();

// Animate progress bar to simulate process
setTimeout(() => {
    document.querySelector('.progress-bar').style.width = '100%';
}, 1000);

// FAQ collapsible functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.faq-arrow');
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
        arrow.classList.toggle('open');
    });
});

// Data for Popups (Names, Cities, and Images)
const popupData = [
    { name: "John", city: "Dallas", image: "images/men-34.jpg" },
    { name: "Emily", city: "Chicago", image: "images/women-70.jpg" },
    { name: "Michael", city: "New York", image: "images/men-35.jpg" },
    { name: "Sarah", city: "Los Angeles", image: "images/women-71.jpg" },
    { name: "David", city: "San Francisco", image: "images/men-36.jpg" },
    { name: "Jessica", city: "Boston", image: "images/women-72.jpg" },
    { name: "James", city: "Houston", image: "images/men-37.jpg" },
    { name: "Laura", city: "Seattle", image: "images/women-73.jpg" },
    { name: "Daniel", city: "Austin", image: "images/men-38.jpg" },
    { name: "Sophia", city: "Miami", image: "images/women-74.jpg" }
];

// Show claim popup with random data
function showClaimPopup() {
    const popup = document.getElementById('claimPopup');

    // Select a random popup data entry
    const randomData = popupData[Math.floor(Math.random() * popupData.length)];

    // Update popup content
    popup.querySelector('img').src = randomData.image;
    popup.querySelector('.popup-message').innerHTML = `<strong>${randomData.name} from ${randomData.city}</strong><br>Just claimed a $750 SHEIN Gift Card!`;

    // Show popup
    popup.style.display = 'block';

    // Hide popup after 5 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}

// Show popup at random intervals
setInterval(() => {
    showClaimPopup();
}, Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000);
