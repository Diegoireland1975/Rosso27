// SCROLL ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

// *************
// cookie banner
// **************

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");
  const rejectCookiesBtn = document.getElementById("reject-cookies");

  // Function to show the cookie banner
  const showCookieBanner = () => {
    cookieBanner.style.display = "block";
  };

  // Show the cookie banner after a delay of 2 seconds (adjust as needed)
  setTimeout(showCookieBanner, 2000);

  // Function to handle accepting cookies
  const acceptCookies = () => {
    cookieBanner.style.display = "none";
    setCookie("cookies_accepted", "true", 365);
  };

  // Function to handle rejecting cookies
  const rejectCookies = () => {
    cookieBanner.style.display = "none";
    // You can add additional logic here for what happens when cookies are rejected
  };

  // Event listener for accepting cookies
  acceptCookiesBtn.addEventListener("click", acceptCookies);

  // Event listener for rejecting cookies
  rejectCookiesBtn.addEventListener("click", rejectCookies);

  // Check if user has already accepted cookies
  if (getCookie("cookies_accepted") === "true") {
    cookieBanner.style.display = "none";
  }
});

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// // Hamburger Menu
const hamburgerMenu = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show");
  nav.classList.toggle("show");
});

// change header opacity on scroll
const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mainHeader.style.opacity = 0.96;
  } else {
    mainHeader.style.opacity = 1;
  }
});

// ##################
// LOAD MORE BUTTON
// ###################
const wrapper = document.querySelectorAll("#wrapper");
const btnLoadMore = document.querySelector("#btn-load-more");
let currentImg = 2;

btnLoadMore.addEventListener("click", () => {
  for (let i = currentImg; i < currentImg + 1; i++) {
    if (wrapper[i]) {
      wrapper[i].style.display = "inline-flex";
    }
  }
  currentImg += 1;
  if (currentImg >= wrapper.length) {
    btnLoadMore.style.display = "none";
  }
});
