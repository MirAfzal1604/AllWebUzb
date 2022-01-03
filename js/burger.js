const contentWidth = document.querySelector(".navbar .navul");
const burger = document.querySelector(".burger")

function openNav() {
    burger.classList.toggle("change");
    contentWidth.classList.toggle("navWidth");
}

function navClose() {
    contentWidth.classList.remove("navWidth");
    burger.classList.remove("change")
}