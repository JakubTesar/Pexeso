let cards, pexesoContainer, cardsRandomized;

let onloadFun = function () {

    pexesoContainer = document.getElementById("pexesoContainer")
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]

    cards = doubleArray(cards);
    addCards();
    cardsRandomized = randomize(cards);
}

let doubleArray = function (cards) {
    for (let i = 0; i < 8; i++) {
        cards.push(cards[i])
    }
    return cards;
}

let randomize = function (cards) {
    let rand = Math.floor(Math.random() * 16);

    for (let i = 0; i < cards.length; i++) {
        cards[5] = cardsRandomized[i]
    }
    return cardsRandomized;
}

let addCards = function () {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div')
        div.innerText = cards[i]

        pexesoContainer.appendChild(div)
    }
}

window.onload = onloadFun;