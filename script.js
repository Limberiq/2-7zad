
const myArray = ["1", "2", "3", "4", "5"];

// Display the array before deletion
document.getElementById("before").textContent = myArray.join(", ");

// Delete the last element and store it in a variable
const deletedValue = myArray.pop();

// Display the array after deletion
document.getElementById("after").textContent = myArray.join(", ");

// Display the deleted value
// document.getElementById("deleted").textContent = deletedValue;