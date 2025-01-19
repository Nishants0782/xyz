

let hamburger = document.querySelector(".ri-menu-line");
let phone_view = document.querySelector(".phone-view");

hamburger.addEventListener("click", () => {
    console.log("Clicked")
    phone_view.style.display="flex";
    phone_view.style.flexDirection="column";

});