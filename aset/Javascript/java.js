const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const dots = document.querySelectorAll(".dot");
let index = 0;
function showSlide(i) {
 slides.forEach((slide, idx) => {
 slide.classList.remove("active");
 dots[idx].classList.remove("active");
 });
 slides[i].classList.add("active");
 dots[i].classList.add("active");
}
prevBtn.addEventListener("click", () => {
 index = (index - 1 + slides.length) % slides.length;
 showSlide(index);
});
nextBtn.addEventListener("click", () => {
 index = (index + 1) % slides.length;
 showSlide(index);
});
dots.forEach((dot, i) => {
 dot.addEventListener("click", () => {
 index = i;
 showSlide(index);
 });
});
// Auto slide (optionnel)
setInterval(() => {
 index = (index + 1) % slides.length;
 showSlide(index);
}, 6000);
// Initialisation
showSlide(index)