let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");
let dropdownHeader = document.getElementById("dropdown-header")

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  // icon.style.rotate = "180deg";
  dropdownHeader.classList.toggle("active");
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
    dropdownHeader.classList.remove("active");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
    if (e.target.innerText == "Everything") {
      input.placeholder = "Search Anything...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.links ul');

  hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
  });
});

// nav
// Toggle sidebar
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-respo').classList.add('active');
  document.querySelector('.sidebar-overlay').classList.add('active');
});

document.querySelector('#close-sidebar').addEventListener('click', () => {
  document.querySelector('.nav-respo').classList.remove('active');
  document.querySelector('.sidebar-overlay').classList.remove('active');
});

document.querySelector('.sidebar-overlay').addEventListener('click', () => {
  document.querySelector('.nav-respo').classList.remove('active');
  document.querySelector('.sidebar-overlay').classList.remove('active');
});

// Shop By category sidebar dropdown
const shopContainer = document.querySelector('.shop-container');
const dropdownContainer = document.querySelector('.header-dropdown-container');

shopContainer.addEventListener('click', () => {
    dropdownContainer.classList.toggle('active');
});


// Open WhatsApp chat when clicked
function openWhatsApp() {
    // Add your WhatsApp number with country code
    const phoneNumber = "+96176393947"; 
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}
