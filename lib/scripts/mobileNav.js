let menuIsActive = false;
const smallVuportMenu = document.getElementById("mobile-nav");

document.addEventListener("click", (e) => {
   if (window.innerWidth < 500) {
      const shouldOpenMenu = e.target.id === "mobile-nav-menu-btn" || pathHasMobileNav(e.path);
      if (shouldOpenMenu && !menuIsActive) {
         // Open menu
         menuIsActive = true;
         smallVuportMenu.style.top = "-8px"
      } else {
         // Close menu
         menuIsActive = false;
         smallVuportMenu.style.top = "-235px"
      }
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
