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
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputMsg = document.getElementById("msg");
    var inputNoMsg = document.getElementById("no-msg");
    var inputPhoneNum = document.getElementById("phoneNum");
    var inputZip = document.getElementById("zip");

    var messenge = document.getElementById("inputInvalidMsg");

    if (!inputName.checkValidity()||!inputEmail.checkValidity()||inputMsg.checkValidity()
        ||inputNoMsg.checkValidity()||inputPhoneNum.checkValidity()||inputZip.checkValidity()) {
        messenge.innerHTML = "Please fill out the form correctly so we can send updates & info to you!";
        messenge.style.display = "block";
        // return false;
    } else {
        messenge.style.display = "none";
        // return true;
    }
}