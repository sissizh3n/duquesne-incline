window.onload = addYear();


function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");
}

function addYear() {
    console.log("addYear is running");
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
}

function validateForm() {
    
}