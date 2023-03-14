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
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp'
]
const slider = document.querySelector('.slider');
let slides ='';
//console.log(images);
//Ciclo for
for (let i = 0; i < images.length; i++) {
    slides += `<div class="slide">
                    <img src="${images[i]}" alt="img-${i}" class="object-fit-cover">
               </div> `
}
//console.log(slides);
slider.innerHTML += `${slides}`;
//console.log(slider);
document.querySelectorAll('.slide')[0].classList.add('active');