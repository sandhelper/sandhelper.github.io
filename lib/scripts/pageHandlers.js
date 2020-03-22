// Floating Mobile Call Button Scroll Handler /////////////////////////////////
const callBtnEl = document.getElementById('call-now-container');
window.onscroll = () => {
   if (document.body.offsetHeight - (window.innerHeight + window.pageYOffset) < 80) {
      callBtnEl.style.opacity = 0;
   } else {
      callBtnEl.style.opacity = 100;
   }
};

// Mobile Navigation Handler //////////////////////////////////////////////////
const smallVuportMenu = document.getElementById("mobile-nav");

document.addEventListener("click", (e) => {
   const shouldToggleMenu = e.target.id === "mobile-nav-menu-btn" || pathHasMobileNav(e.path);
   if (shouldToggleMenu) {
      smallVuportMenu.classList.toggle("menu-expanded");

      // Disable links for 1s while the menu is animating to prevent misclicks.
      smallVuportMenu.classList.add("disable-links");
      setTimeout(() => {
         smallVuportMenu.classList.remove("disable-links");
      }, 1000);
   }
});

const pathHasMobileNav = (path) => {
   for (el of path) {
      if (el == smallVuportMenu) {
         return true;
      }
   }
   return false;
}
