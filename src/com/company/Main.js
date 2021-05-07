let cards, cards2, pexesoContainer, div, div2;
let divCon;
let smajliciVPoli = [];
let prekryvaciDiv = [];
let smajl = [];
let counter = 0;
let good = [];
let targetArr = [];
let resBut;
let span;
let modal;
let divs1 = [];
let divConArr = [];

let onloadFun = function () {

    pexesoContainer = document.getElementById("pexesoContainer")
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    cards2 = cards.length;
    resBut = document.getElementById("resetButton");
    span = document.getElementsByClassName("close")[0];
    modal = document.getElementById("myModal");

    doubleArray(cards);
    randomize(cards);
    addCards();

    resBut.addEventListener("click", reset)
    span.addEventListener("click", modalNone)
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
        divConArr[i] = divCon;
        pexesoContainer.appendChild(divCon);

        div = document.createElement('div'); // Přidání smajlíků
        div.innerText = cards[i];
        divs1[i] = div;

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
    targetArr.push(e.target);

    for (let i = 0; i < cards.length; i++) {
        if (e.target === prekryvaciDiv[i]) {
            smajl.push(smajliciVPoli[i])
            console.log(smajl[0], smajl[1])
            counter++;
        }
    }
    if (counter === 2) {
        if (smajl[0] === smajl[1]) {
            good.push(smajl[0], smajl[1])
            targetArr = [];
        }
        counter = 0;
        let shownt = function () {
            targetArr[0].style.display = "block"
            targetArr[1].style.display = "block"
            targetArr = [];
        }
        if (smajl[0] !== smajl[1]) {
            setTimeout(shownt, 1000);
        }
        smajl = [];
        counter = 0;
    }

    if (good.length === cards.length) {
        modal.style.display = "block"
    }
}
let modalNone = function () {
    modal.style.display = "none";
}

let reset = function () {
    for (let i = 0; i < cards.length; i++) {
        divs1[i].remove();
        prekryvaciDiv[i].remove();
        divConArr[i].remove();
    }
    randomize(cards);
    addCards()
}


window.onload = onloadFun;