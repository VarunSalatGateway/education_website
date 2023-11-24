// Get the current date and time
var today = new Date();

// Calculate the date two days from now
var twoDaysLater = new Date(today);
twoDaysLater.setDate(today.getDate() + 2);

// Format the date and time to be compatible with the input's value format
var formattedTwoDaysLater = twoDaysLater.toISOString().slice(0, 16);

// Set the minimum value for the input to two days from now
document.getElementById("due-date").min = formattedTwoDaysLater;
