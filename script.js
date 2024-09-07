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

   } else {
      variables.style.setProperty(
         "--theme",
         "radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%)"
      );
      variables.style.setProperty("--text-color", "black");
      variables.style.setProperty("--nav-theme", "#e3e3e355");

   }
}
function navBar() {
   let nav = document.querySelector(".nav-items");
   let isVisible = nav.classList.contains("nav-visible");
   console.log(isVisible);
   // Toggle class based on visibility
   nav.classList.toggle("nav-visible");
}
