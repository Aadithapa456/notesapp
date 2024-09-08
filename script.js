let darkBtn = document.querySelector(".btn-theme");
let variables = document.querySelector(":root");
function themeChanger() {
   let currentTheme = getComputedStyle(variables)
      .getPropertyValue("--theme")
      .trim();
   console.log(currentTheme);
   if (
      currentTheme ==
      "radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%)"
   ) {
      variables.style.setProperty("--theme", "#121212");
      variables.style.setProperty("--text-color", "white");
      variables.style.setProperty("--nav-theme", "#121212");
      localStorage.setItem("theme", "dark"); // Saves Dark Theme in local storage
   } else {
      variables.style.setProperty(
         "--theme",
         "radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%)"
      );
      variables.style.setProperty("--text-color", "black");
      variables.style.setProperty("--nav-theme", "#e3e3e355");
      localStorage.setItem("theme", "light"); //Saves light theme in local storage
   }
}
function loadTheme() {
   const savedTheme = localStorage.getItem("theme"); // Extracts the stored theme from localstorage
   if (savedTheme === "dark") {
      variables.style.setProperty("--theme", "#121212");
      variables.style.setProperty("--text-color", "white");
      variables.style.setProperty("--nav-theme", "#121212");
   } else {
      variables.style.setProperty(
         "--theme",
         "radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%)"
      );
      variables.style.setProperty("--text-color", "black");
      variables.style.setProperty("--nav-theme", "#e3e3e355");
   }
}
document.addEventListener("DOMContentLoaded", loadTheme); // Runs the loadTheme() function everytime the page loads
// function navBar() {
//    let nav = document.querySelector(".nav-items");
//    nav.style.display = "none"
//    let isVisible = nav.classList.contains("nav-visible");
//    console.log(isVisible);
//    if (isVisible) {
//       nav.classList.remove("nav-visible");
//       nav.classList.add("nav-hide");
//    } else {
//       nav.classList.add("nav-visible");
//       nav.classList.remove("nav-hide");
//    }
// }
function navBar() {
   let nav = document.querySelector(".nav-items");
   let isVisible = nav.classList.contains("nav-visible");

   if (isVisible) {
      // Hide the nav
      nav.classList.remove("nav-visible");
      nav.classList.add("nav-hide");
      // Wait for the animation to complete before setting display to none
      setTimeout(() => {
         nav.style.display = "none";
      }, 400); // Timeout should match the animation duration
   } else {
      // Set display to block (or flex) before showing
      nav.style.display = "block";
      setTimeout(() => {
         nav.classList.add("nav-visible");
         nav.classList.remove("nav-hide");
      }, 10); // Small delay to allow the display to be applied before animation
   }
}
