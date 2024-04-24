-Creo il layout della pagina mettendo le immagini dentro un contenitore e 2 pulsanti per lo scorrimento avanti e indietro

-Aggiungo un'po di css per gestire il layout e creo anche 2 classi apposite per gestire il d-none e il d-block delle img, dov'è possibile utilizzo bootstrap (button,ecc..)

JS
MILESTONE2
-prendo tutti gli elementi con la classe slide
-controllo a partire dal primo elemento che contiene la classe slide se è presente la classe active
-in tal caso la rimuovo
    -se l'indice è minore della lunghezza (dell'array) allora aggiungi la classe active all'elemento con la classe slide seguente e aumenta l'indice di 1
    -se invece è uguale aggiungi la classe active allo zeresimo elemento e resetta l'indice a 0


MILESTONE3
-aggiungo una funzione al click del bottone next che mi contiene le stesse istruzioni di M2

MILESTONE4
-aggiungo la funzione contraria al next sul bottone prevoius, dove una volta che l'indice mi arriva a 0, avviene il suo reset impostandolo con il valore max per selezionare l'ultimo elemento ed aggiungergli la classe

UPDATE
-Lo script di prima funzionava solo nel caso in cui l'elemeto di partenza era lo zeresimo ,ho risolto il tutto aggiungendo un ciclo for che prima mi va a cercare quale degli elementi contiene la classe active e solo dopo può andare avanti.

BONUS 2
-creo un container flex e posiziono a destra la main-card e sulla sinistra una little-card(flex-column contenente le immagini con la classe opaity)
-chiedo al DOM gli elemnti con la classe opacity
-visto chè le immagini con la classe opacity,sono messe sul DOM con lo stesso ordine delle immagini all'interno della main-card mi basterà aggiungere/rimuovere la classe "Noopacity" nello stesso momento i  cui aggiungo/rimuovo la classe "active"

