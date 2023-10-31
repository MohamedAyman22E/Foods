// menu icon

let allSpan = document.querySelector(".allSpan");

let spanOne = document.querySelector(".menu-icon .one");
let spanTwo = document.querySelector(".menu-icon .two");
let spanthree = document.querySelector(".menu-icon .three");
let menu = document.querySelector(".menu-icon .menu");
let closeBtn = document.querySelector(".menu-icon .close");

let menuIcon = document.querySelector(".navbar ");

allSpan.addEventListener("click", () => {
  spanOne.classList.toggle("active");
  spanTwo.classList.toggle("active");
  spanthree.classList.toggle("active");
  menu.classList.toggle("active");
  closeBtn.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// active links in navbar

let navlist = document.querySelectorAll(".nav-item a");
let section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      document
        .querySelector("header nav .navbar a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("header nav .navbar a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};

// header
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 0);
});

// scroll to top
let scroolTop = document.querySelector(".arrowtop");
window.addEventListener("scroll", function () {
  scroolTop.classList.toggle("active", window.scrollY > 500);
});
scroolTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
