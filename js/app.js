const immaginiArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

let currentIndex = 0;


// Recupero elemento contenitore (container-items)
const itemsContainer = document.querySelector(".container-items");
// Inserisco all'interno di container-items le mie immagini
// Utilizzo un ciclo per ripetere tutte le immagini in array
for (let i = 0; i < immaginiArray.length; i++) {
    let additionalClasses = '';

    if (i === currentIndex) {
        additionalClasses = 'show';
    }

    // Dichiaro una costante per avere il percorso dell'immagine
    const percorsoImmagine = immaginiArray[i];
    // Dichiaro la costante contenente il pezzo di codice da stampare in container-items
    const divPrintHtml = `
       <div class="item ${additionalClasses}">
            <img class="immagine" src="${percorsoImmagine}" alt="">
        </div>
       `;

    itemsContainer.innerHTML += divPrintHtml;

}
const items = document.querySelectorAll('.item');

const lastIndex = items.length - 1;

// Creo event listener
document.querySelector('#successivo .succ').addEventListener("click", function () {

    document.querySelector('.item.show').classList.remove('show');

    if ( currentIndex < lastIndex) {
        currentIndex ++

    } else {
        currentIndex = 0
    }

    const nextItem = items[currentIndex];
    nextItem.classList.add('show');
  
})



document.querySelector('#precedente .prec').addEventListener("click", function () {

    // Tolgo la classe show dall'elemento corrente
    document.querySelector('.item.show').classList.remove('show');

    if (currentIndex > 0) {
        currentIndex --
    } else {
        currentIndex = lastIndex
    }

    
    const prevItem = items[currentIndex];
    prevItem.classList.add('show');

})

