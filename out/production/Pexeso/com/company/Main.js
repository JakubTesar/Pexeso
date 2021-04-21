let cards, cards2, pexesoContainer, div, div2;

let onloadFun = function () {

    pexesoContainer = document.getElementById("pexesoContainer")
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    cards2 = cards.length;
    doubleArray(cards);
    randomize(cards);
    generateDivs2();
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
        div = document.createElement('div')
        div.innerText = cards[i]
        div.style.position = "relative"
        pexesoContainer.appendChild(div)

    }
}
let generateDivs2 = function () {
    for (let i = 0; i < cards.length; i++) {
        div2 = document.createElement('div')
        div2.style.backgroundColor = "#720000"
        div2.style.position = "relative"

        div2.addEventListener("click",showCard)
        pexesoContainer.appendChild(div2)
    }
}


window.onload = onloadFun;