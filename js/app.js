const playArea = document.querySelector("#playArea")
let clickedCard;
let cardArr;
let cards = [
    {
        name: "ace",
        number: 1,
        suit: "hearts"
    },
    {
        name: "two",
        number: 2,
        suit: "hearts"
    },
]



for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div")
    card.classList = `card cardVal${cards[i].number}`
    const numberPl = document.createElement("p")
    const numberl = document.createTextNode(cards[i].number)
    numberPl.className = "numLC"
    const numberPr = document.createElement("p")
    const numberr = document.createTextNode(cards[i].number)
    numberPr.className = "numRC"

    //left top corner
    numberPl.appendChild(numberl)
    card.appendChild(numberPl)

    //appends a div in the middle


    // right bottom corner
    numberPr.appendChild(numberr)
    card.appendChild(numberPr)

    // puts card on board
    playArea.appendChild(card)
}