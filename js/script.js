// Load Page
window.addEventListener("load", function () {
  //DOM Elements
  const body = document.querySelector("body");
  const menuButton = document.getElementById("menu-button");
  const navBar = document.querySelector("nav ul");
  const gallery = document.getElementById("gallery");
  const galleryImages = gallery.querySelector("#image-gallery");
  const galleryModal = gallery.querySelector("#gallery-modal-bg");
  const gallerySelectedImage = galleryModal.querySelector(
    "#gallery-image-modal"
  );
  const galleryCloseButton = galleryModal.querySelector("span");
  const yearItem = document.getElementById("year");

  //Show selected gallery image
  galleryImages.addEventListener("click", function (event) {
    const item = event.target;

    if (item.tagName === "IMG") {
      galleryModal.style.display = "flex";
      gallerySelectedImage.src = item.src;
      body.style.overflow = "hidden";
    }
  });

  //Close selected image
  galleryModal.addEventListener("click", function (event) {
    if (
      (galleryModal.style.display === "flex" &&
        event.target === galleryModal) ||
      event.target === galleryCloseButton
    ) {
      galleryModal.style.display = "none";
      gallerySelectedImage.src = "";
      body.style.overflow = "visible";
    }
  });

  //Expand/Retract navigation menu
  menuButton.addEventListener("click", function () {
    if (navBar.style.display === "flex") {
      menuButton.src = "img/expand-menu-icon.svg";
      body.style.overflow = "visible";
      return (navBar.style.display = "none");
    }
    navBar.style.display = "flex";
    menuButton.src = "img/retract-menu-icon.svg";
    body.style.overflow = "hidden";
  });

  navBar.addEventListener("click", function (event) {
    const item = event.target;
    if (navBar.style.display === "flex") {
      if (item.tagName === "A") {
        navBar.style.display = "none";
        menuButton.src = "img/expand-menu-icon.svg";
        body.style.overflow = "visible";
      }
    }
  });

  // Add Year on footer
  const date = new Date();
  yearItem.textContent = date.getFullYear();
});
