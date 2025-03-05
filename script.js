document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("studentName").value.trim(); // Get StudentName value
    let age = document.getElementById("age").value.trim(); // Get Age Value
    let gender = document.querySelector('input[name="gender"]:checked'); // Get selected gender
    let course = document.getElementById("course").value.trim(); //Get Course Value
    let email = document.getElementById("email").value.trim(); //Get email Value
    
    if (!name || !age || !gender || !course || !email) {
        showPopup("Please fill all fields!", "bg-yellow-500");
        return;
    }



    let tableBody = document.getElementById("studentTableBody"); // Get table body
    let newRow = document.createElement("tr"); // Create new row

    let nameCell = document.createElement("td"); // Create name cell
    nameCell.textContent = name; // Set name text
    nameCell.classList.add("border", "p-2", "text-center");

    let ageCell = document.createElement("td"); // Create name cell
    ageCell.textContent = age; // Set name text
    ageCell.classList.add("border", "p-2", "text-center");

    let genderCell = document.createElement("td"); 
    genderCell.textContent = gender.value; // Get gender value
    genderCell.classList.add("border", "p-2", "text-center");

    let courseCell = document.createElement("td");
    courseCell.textContent = course; // Get Course Value
    courseCell.classList.add("border", "p-2", "text-center");

    let emailCell = document.createElement("td");
    emailCell.textContent = email; // Get Course Value
    emailCell.classList.add("border", "p-2", "text-center");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("bg-red-600", "text-white", "px-3", "py-1", "rounded", "hover:bg-red-700", "transition", "duration-300");


    newRow.appendChild(nameCell); // Add name cell to row
    newRow.appendChild(ageCell); // Add age cell to row
    newRow.appendChild(genderCell); // Add Gender cell to row
    newRow.appendChild(courseCell); // Add Course Cell to row
    newRow.appendChild(emailCell); // Add email Cell to row
    newRow.appendChild(emailCell); // Add email Cell to row
    newRow.appendChild(deleteButton); // Add delete Cell to row

    tableBody.appendChild(newRow);  //add value to row
    showPopup("Student added successfully!", "bg-green-500");

    
    deleteButton.addEventListener("click", function() {
        tableBody.removeChild(newRow); // Remove row when clicked
        showPopup("Student deleted successfully!", "bg-red-500");
    });

    
    // Clear form inputs after submission
    document.getElementById("studentForm").reset();
});
// Function to show popup message
function showPopup(message, bgColor) {
    let popup = document.createElement("div");
    popup.textContent = message;
    popup.classList.add(bgColor, "text-white", "p-3", "fixed", "top-5", "center", "rounded", "shadow-lg", "fade-in");

    document.body.appendChild(popup);

    // Remove popup after 2 seconds
    setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500);
    }, 2000);
}