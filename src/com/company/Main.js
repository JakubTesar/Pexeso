let cards, cards2, pexesoContainer;

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
        let div = document.createElement('div')
        div.innerText = cards[i]

        pexesoContainer.appendChild(div)
    }
}

window.onload = onloadFun;