let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
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