// Function to display popup
function showPopup() {
    document.getElementById('rulesPopup').style.display = 'block';
}

// Function to close popup
function closePopup() {
    document.getElementById('rulesPopup').style.display = 'none';
}

// Event listener for rules button
document.getElementById('rulesButton').addEventListener('click', showPopup);
