



var images =[
    "ar_carro",
    "senza_testa",
    "carro_getto",
    "credendari",
    "diavoli",
    "mercenari",
    "pantere",
    "picche",
    "pif_tamburino",
    "scorta_mugnaia",
    "ar_carro",
    "senza_testa",
    "carro_getto",
    "credendari",
    "diavoli",
    "mercenari",
    "pantere",
    "picche",
    "pif_tamburino",
    "scorta_mugnaia"
    
    
];

// TRUE= primo click
// FALSE= secondo click
var firstClick = true;

var controlCards = [];

// TRUE= primo click
// FALSE= secondo click
var firstClick = true;

var primoIndex;

document.querySelector("#pStart").onclick = function () {
    mischiaMazzo(images);
    //inizializza mazzo di controllo
    initControllo();
    showCards();
    hideCards(3000);
    selCards();
};

function mischiaMazzo(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function hideCards(time) {
    setTimeout(function () {
        document.querySelectorAll(".carta").forEach(function (elm, k) {
            if (controlCards[k]) {
                elm.src = "immagini_25feb/arancia_gold.png";
            }
        });
    }, time);


}

function showCards() {
    let html;
    // indice del array
    let indice = 0;

    html = "<table>";
    //genero tabella
    for (let r = 1; r <= 4; r++) {
        //inserisco la riga
        html += "<tr>";
        for (let c = 1; c <= 5; c++) {
            html += '<td><img class="carta" src="immagini_25feb/'+ images[indice] + '.png" alt="" width="200px" height="200px" /></td>';
            indice++;
        }
        html += "</tr>";
    }
    html += "</table>";

    document.querySelector("#cartabox").innerHTML = html;
}

function selCards() {
    document.querySelectorAll(".carta").forEach(function (elm, k) {

        elm.onclick = function () {

            if (firstClick) {
                // PRIMO CLICK
                elm.src = "immagini_25feb/" + images[k] + ".png";
                primoIndex = k;
                firstClick = false;
                controlCards[k] = false;

            } else {
                // SECONDO CLICK
                elm.src = "immagini_25feb/" + images[k] + ".png";
                if (images[k] === images[primoIndex]) {
                    // COPPIA ESATTA
                    // SCOPRIRE DEFINITIVAMENTE
                    controlCards[k] = false;
                    controlCards[primoIndex] = false;
                } else {
                    // COPPIA ERRATA
                    // NASCONDERE
                    controlCards[k] = true;
                    controlCards[primoIndex] = true;
                    hideCards(1000);
                }

                firstClick = true;

            }

        };

    });
}

function initControllo() {
    for (let i = 0; i < 20; i++) {
        controlCards[i] = true;
    }
}









