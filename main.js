const btn = document.getElementById("nav__button");
console.log(btn);
const navList = document.getElementById("nav__list");
console.log(navList);
btn.addEventListener("click", function () {
    navList.classList.toggle("show");
});