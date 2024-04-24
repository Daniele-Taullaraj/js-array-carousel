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



// MILESTONE 3/4 + BONUS1

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

const prev = document.querySelector(".previousBtn");
prev.addEventListener("click", function () {

    if (slides[i].classList.contains("active")) {
        slides[i].classList.remove("active");
        if (i == 0) {
            slides[slides.length - 1].classList.add("active");
            i = slides.length - 1;
        } else {
            slides[i - 1].classList.add("active");
            i -= 1;
        }
    }
})






// let slides = document.getElementsByClassName("slide");
// console.log(slides)
// const next = document.querySelector(".nextBtn");
// let dBlock;

// for (let i = 0; i < slides.length; i++) {
//     dBlock = slides[i].classList.contains("active")

//     next.addEventListener("click", function () {
//         dBlock.classList.remove("active");
//         if (i == (slides.length - 1)) {
//             slides[0].classList.add("active");
//             i = 0;
//         } else {
//             slides[i + 1].classList.add("active");
//             i += 1;
//         }
//     })
// }


// if (slides[i].classList.contains("active")) {
//     slides[i].classList.remove("active");
//     if (i == (slides.length - 1)) {
//         slides[0].classList.add("active");
//         i = 0;
//     } else {
//         slides[i + 1].classList.add("active");
//         i += 1;
//     }
// } else {
//     i++;
// }



// const prev = document.querySelector(".previousBtn");
// prev.addEventListener("click", function () {

//     if (slides[i].classList.contains("active")) {
//         slides[i].classList.remove("active");
//         if (i == 0) {
//             slides[slides.length - 1].classList.add("active");
//             i = slides.length - 1;
//         } else {
//             slides[i - 1].classList.add("active");
//             i -= 1;
//         }
//     }
// })






