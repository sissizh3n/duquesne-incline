window.onload = addYear();
if (window.location.href.includes("directions.html")) {
    initMap();
}

function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");

    // if (dropdown.classList.contains("show")) {
    //     const element = document.getElementById("current-page");  
    //     element.classList.remove("current-page"); 
    //     const currElem = document.getElementById("dropdown-nav");
    //     currElem.classList.add("current-page"); 
    // }
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

let map;

async function initMap() {
  const position = { lat: 40.439863, lng: -80.017589 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Duquesne Incline",
  });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}