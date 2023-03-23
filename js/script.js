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
// const images = [
//     './img/01.webp',
//     './img/02.webp',
//     './img/03.webp',
//     './img/04.webp',
//     './img/05.webp'
// ]
//Esercizio del 23/3 -trasformo l'array in array di oggetti
const images = [
    {
        image: './img/01.webp',
        title: 'Spiderman'
    },
    {
        image: './img/02.webp',
        title: 'Warrior cats'
    },
    {
        image: './img/03.webp',
        title: 'Superheros'
    },
    {
        image: './img/04.webp',
        title: 'Cat'
    },
    {
        image: './img/05.webp',
        title: 'Avengers'
    }
] //fine aggiunta del 23/3
const slider = document.querySelector('.slider');
let currentIndex = 0;
let slides ='';
const thumbSlider = document.querySelector('.thumb-slider');
let thumbs = '';
//Ciclo for
//Sostituisco il for con il forEach (23/3)
//for (let i = 0; i < images.length; i++) {
images.forEach((value) =>{
    slides += `<div class="slide">
                    <img src="${value.image}" alt="img-${value.title}" class="object-fit-cover">
                    <div class="overlay">
                    <h2 class="display-2  fw-bold text-center pt-5">${value.title}</h2>
               </div> 
                    </div>`;

    thumbs += `<div class="thumb">
                    <img src="${value.image}" alt="img-${value.title}">
               </div> `;
});
slider.innerHTML += `${slides}`;
thumbSlider.innerHTML += `${thumbs}`;
document.querySelectorAll('.slide')[currentIndex].classList.add('active');
document.querySelectorAll('.thumb')[currentIndex].classList.add('active');

/*
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
//Buttons function (goNext and goPrev)
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
//Esercizio del 23/3
let interval;
function start (){
    interval = setInterval(goNext, 1000);
}
function stop(){
    clearInterval(interval);
}
const container = document.querySelector('.bg-black');
start();
container.addEventListener('mouseover', stop);
container.addEventListener('mouseout', start);
