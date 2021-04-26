let cards, cards2, pexesoContainer, div, div2;
let divCon;
let smajliciVPoli = [];
let prekryvaciDiv = [];
let smajl = [];
let counter = 0;
let good = [];

let onloadFun = function () {

    pexesoContainer = document.getElementById("pexesoContainer")
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    cards2 = cards.length;
    doubleArray(cards);
    randomize(cards);
    addCards();
}

let doubleArray = function (cards) {
    for (let i = 0; i < cards2; i++) {
        cards.push(cards[i])
    }
    return cards;
}
let randomize = function (cards2) {
    for (let i = 0; i < cards.length; i++) {
        let rand = Math.floor(Math.random() * 16);

        let a = cards[i];
        cards[i] = cards[rand];
        cards[rand] = a;
    }
    return cards2;
}


let addCards = function () {
    for (let i = 0; i < cards.length; i++) {
        divCon = document.createElement('div');
        pexesoContainer.appendChild(divCon);

        div = document.createElement('div'); // Přidání smajlíků
        div.innerText = cards[i];

        smajliciVPoli[i] = div.innerText;

        div.style.position = "absolute";
        divCon.appendChild(div);

        div2 = document.createElement('div'); // Přidání překrytí
        div2.style.backgroundColor = "#720000";
        div2.style.position = "relative";
        divCon.appendChild(div2);
        prekryvaciDiv[i] = div2;

        div2.addEventListener("click", show);
    }
}

let show = function (e) {
    e.target.style.display = "none";
    for (let i = 0; i < 16; i++) {
        if (e.target === prekryvaciDiv[i]) {
            smajl.push(smajliciVPoli[i])
            console.log(i)
            counter++;
        }
    }

    if (counter === 1){
        if (smajl[0] === smajl[1]) {
            good.push(smajl[0], smajl[1])
            console.log("rovná")
        } else{
            let shownt = function () {
                e.target.style.display = "block";
            }
            setTimeout(shownt, 2000);
        }
        counter = 0;
        smajl = [];
    }
}

window.onload = onloadFun;