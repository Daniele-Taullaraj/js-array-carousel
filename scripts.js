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

// let slides = document.getElementsByClassName("slide");
// console.log(slides)
// let i = 0;

// const next = document.querySelector(".nextBtn");
// next.addEventListener("click", function () {

//     if (slides[i].classList.contains("active")) {
//         slides[i].classList.remove("active");
//         if (i == (slides.length - 1)) {
//             slides[0].classList.add("active");
//             i = 0;
//         } else {
//             slides[i + 1].classList.add("active");
//             i += 1;
//         }
//     }
// })

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




// UPDATE
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".previousBtn");

let slides = document.getElementsByClassName("slide");
console.log(slides)


// ciclo per controllare tutti gli elementi con la classe slide
for (let i = 0; i < slides.length; i++) {
    // se trovo l'elemento contenenete la classe active do il consenso per...
    if (slides[i].classList.contains("active")) {
        // attraverso il bottone next andare avanti
        next.addEventListener("click", function () {
            // rimuovo dall'elemento attuale la classe active
            slides[i].classList.remove("active");
            // se andando avanti arrivo alla max.lenght ressetto il contatore e assegno allo zeresimo elento la classe active
            if (i == (slides.length - 1)) {
                slides[0].classList.add("active");
                i = 0;
                // se invece posso acnora andare mi sposto di 1
            } else {
                slides[i + 1].classList.add("active");
                i += 1;
            }
        })
        // attraverso il bottone prev tornare indietro
        prev.addEventListener("click", function () {

            if (slides[i].classList.contains("active")) {
                slides[i].classList.remove("active");
                // se arrivo a 0 ,setto il contatore a max.lenght e assegno la classe active all'ultimo elemento
                if (i == 0) {
                    slides[slides.length - 1].classList.add("active");
                    i = slides.length - 1;
                } else {
                    slides[i - 1].classList.add("active");
                    i -= 1;
                }
            }
        })
    }
}








