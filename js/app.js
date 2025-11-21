const playArea = document.querySelector("#playArea")
let clickedCard;
let cardArr;
let cards = [
    { name: "ace", number: 1, suit: "hearts" },
    { name: "two", number: 2, suit: "hearts" },
    { name: "three", number: 3, suit: "hearts" },
    { name: "four", number: 4, suit: "hearts" },
    { name: "five", number: 5, suit: "hearts" },
    { name: "six", number: 6, suit: "hearts" },
    { name: "seven", number: 7, suit: "hearts" },
    { name: "eight", number: 8, suit: "hearts" },
    { name: "nine", number: 9, suit: "hearts" },
    { name: "ten", number: 10, suit: "hearts" },
    { name: "jack", number: 11, suit: "hearts" },
    { name: "queen", number: 12, suit: "hearts" },
    { name: "king", number: 13, suit: "hearts" },
    { name: "ace", number: 1, suit: "diamonds" },
    { name: "two", number: 2, suit: "diamonds" },
    { name: "three", number: 3, suit: "diamonds" },
    { name: "four", number: 4, suit: "diamonds" },
    { name: "five", number: 5, suit: "diamonds" },
    { name: "six", number: 6, suit: "diamonds" },
    { name: "seven", number: 7, suit: "diamonds" },
    { name: "eight", number: 8, suit: "diamonds" },
    { name: "nine", number: 9, suit: "diamonds" },
    { name: "ten", number: 10, suit: "diamonds" },
    { name: "jack", number: 11, suit: "diamonds" },
    { name: "queen", number: 12, suit: "diamonds" },
    { name: "king", number: 13, suit: "diamonds" },
    { name: "ace", number: 1, suit: "clubs" },
    { name: "two", number: 2, suit: "clubs" },
    { name: "three", number: 3, suit: "clubs" },
    { name: "four", number: 4, suit: "clubs" },
    { name: "five", number: 5, suit: "clubs" },
    { name: "six", number: 6, suit: "clubs" },
    { name: "seven", number: 7, suit: "clubs" },
    { name: "eight", number: 8, suit: "clubs" },
    { name: "nine", number: 9, suit: "clubs" },
    { name: "ten", number: 10, suit: "clubs" },
    { name: "jack", number: 11, suit: "clubs" },
    { name: "queen", number: 12, suit: "clubs" },
    { name: "king", number: 13, suit: "clubs" },
    { name: "ace", number: 1, suit: "spades" },
    { name: "two", number: 2, suit: "spades" },
    { name: "three", number: 3, suit: "spades" },
    { name: "four", number: 4, suit: "spades" },
    { name: "five", number: 5, suit: "spades" },
    { name: "six", number: 6, suit: "spades" },
    { name: "seven", number: 7, suit: "spades" },
    { name: "eight", number: 8, suit: "spades" },
    { name: "nine", number: 9, suit: "spades" },
    { name: "ten", number: 10, suit: "spades" },
    { name: "jack", number: 11, suit: "spades" },
    { name: "queen", number: 12, suit: "spades" },
    { name: "king", number: 13, suit: "spades" }
]
const fStacks = {
    one: document.querySelector("#fstackOne"),
    two: document.querySelector("#fstackTwo"),
    three: document.querySelector("#fstackThree"),
    four: document.querySelector("#fstackFour"),
    five: document.querySelector("#fstackFive"),
    six: document.querySelector("#fstackSix"),
    seven: document.querySelector("#fstackSeven"),
    eight: document.querySelector("#fstackEight"),
    nine: document.querySelector("#fstackNine"),
    ten: document.querySelector("#fstackTen"),
};

const stacks = {
    one: document.querySelector("#stackOne"),
    two: document.querySelector("#stackTwo"),
    three: document.querySelector("#stackThree"),
    four: document.querySelector("#stackFour"),
    five: document.querySelector("#stackFive"),
    six: document.querySelector("#stackSix"),
    seven: document.querySelector("#stackSeven"),
    eight: document.querySelector("#stackEight"),
    nine: document.querySelector("#stackNine"),
    ten: document.querySelector("#stackTen"),
};

let stack;
// theres ten stacks in spider solitare

// todo make game logic (this will be a rough logic draft)
// test logic on placement:
// (here i need too check which card i click)
// if (number = number + 1) {
// change placement to under the card
// }
// 
// having stacks for each column:
// stack[1].foreach(e) {
// if(e = 13){
//  if (e = 12){
//      if (e=11){
//      } else {
//      continue;
//      }
//  } else {
//  continue;
// } else {
// start again e+1
// }

for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div")
    card.classList = `card cardVal${cards[i].number}`
    const numberPl = document.createElement("p")
    const numberl = document.createTextNode(cards[i].number)
    numberPl.className = "numLC"
    const numberPr = document.createElement("p")
    const numberr = document.createTextNode(cards[i].number)
    numberPr.className = "numRC"

    const middleDiv = document.createElement("div")
    middleDiv.className = "middleCont"
    let middleImg = document.createElement("img")
    middleImg.className = "middleImg"
    middleImg.src = `./images/suit_icons/${cards[i].suit}.webp`


    middleDiv.appendChild(middleImg)

    //left top corner
    numberPl.appendChild(numberl)
    card.appendChild(numberPl)

    //appends a div in the middle
    card.appendChild(middleDiv)

    // right bottom corner
    numberPr.appendChild(numberr)
    card.appendChild(numberPr)

    // puts card on board
    playArea.appendChild(card)
}