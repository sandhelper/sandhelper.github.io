const smallVuportMenu = document.getElementById("mobile-nav");

document.addEventListener("click", (e) => {
   const shouldToggleMenu = e.target.id === "mobile-nav-menu-btn" || pathHasMobileNav(e.path);
   if (shouldToggleMenu) {
      smallVuportMenu.classList.toggle("menu-expanded");
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
