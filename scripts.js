// MILESTONE 2
// let slides = document.getElementsByClassName("slide");
// console.log(slides)
// let i = 0;

// if (slides[i].classList.contains("active")) {
//     slides[i].classList.remove("active");
//     if (i == (slides.length - 1)) {
//         slides[0].classList.add("active");
//         i = 0;
//     } else {
//         slides[i + 1].classList.add("active");
//         i += 1;
//     }
// }



// MILESTONE 3

let slides = document.getElementsByClassName("slide");
console.log(slides)
let i = 0;
const next = document.querySelector(".nextBtn");
next.addEventListener("click", function () {

    if (slides[i].classList.contains("active")) {
        slides[i].classList.remove("active");
        if (i == (slides.length - 1)) {
            slides[0].classList.add("active");
            i = 0;
        } else {
            slides[i + 1].classList.add("active");
            i += 1;
        }
    }
})





