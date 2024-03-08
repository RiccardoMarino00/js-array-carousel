const immaginiArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// Recupero elemento contenitore (container-items)
const itemsContainer = document.getElementsByClassName(".container-items")
// Inserisco all'interno di container-items le mie immagini
   // Utilizzo un ciclo per ripetere tutte le immagini in array
   for (let i = 0; i < immaginiArray.length; i++ ){
       // Dichiaro una costante per avere il percorso dell'immagine
       const percorsoImmagine = immaginiArray[i]
       // Dichiaro la costante contenente il pezzo di codice da stampare in container-items
       const divPrintHtml = `
       <div class="item">
            <img class="immagine" src="${percorsoImmagine}" alt="">
        </div>
       `
   itemsContainer.innerHTML = divPrintHtml
       
   }

   // Per ogni elemento dell'array creo una struttura HTML
   // Concateno tutti gli elementi all'interno di container-items