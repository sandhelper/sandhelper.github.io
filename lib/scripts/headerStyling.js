let menuIsActive = false;
const smallVuportMenu = document.querySelector("body > section > ul");
smallVuportMenu.addEventListener("click", function() {
   if (window.innerWidth < 500) {
      !menuIsActive ? (this.style.top = "-8px") : (this.style.top = "-170px");
   }
   menuIsActive = !menuIsActive;
});
