/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.*/

/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.*/

//Array
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]
const slider = document.querySelector('.slider');
let currentIndex = 0;
let slides ='';
const thumbSlider = document.querySelector('.thumb-slider');
let thumbs = '';
//console.log(thumbSlider);
//Ciclo for
for (let i = 0; i < images.length; i++) {
    slides += `<div class="slide">
                    <img src="${images[i]}" alt="img-${i+1}" class="object-fit-cover">
               </div> `;
    thumbs += `<div class="thumb">
                    <img src="${images[i]}" alt="img-${i+1}">
               </div> `;
}
// console.dir(slides);
// console.dir(thumbs);
slider.innerHTML += `${slides}`;
thumbSlider.innerHTML += `${thumbs}`;
// console.log(slider);
// console.dir(thumbSlider);
document.querySelectorAll('.slide')[currentIndex].classList.add('active');
document.querySelectorAll('.thumb')[currentIndex].classList.add('active');

/*
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//console.log(next, prev);

next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === images.length -1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
}
function goPrev() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
}