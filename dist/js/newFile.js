// ##################
// COOKIE BANNER
// ###################
document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");

  acceptCookiesBtn.addEventListener("click", () => {
    // cookieBanner.style.display = "none";
    // setCookie("cookies_accepted", "true", 365);
    console.log("ciao");
  });

  // Check if user has already accepted cookies
  if (getCookie("cookies_accepted") === "true") {
    cookieBanner.style.display = "none";
  }
});
