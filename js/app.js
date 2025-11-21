const playArea = document.querySelector("#playArea")
let clickedCard;
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

function shuffleDeck() {
    const deck = [...cards]; // copy of the original cards
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // swap
    }
    return deck;
}

function startGame() {
    const deck = shuffleDeck()

    fillStack(stacks.one, 6, deck)
    fillStack(stacks.two, 6, deck)
    fillStack(stacks.three, 6, deck)
    fillStack(stacks.four, 6, deck)
    fillStack(stacks.five, 5, deck)
    fillStack(stacks.six, 5, deck)
    fillStack(stacks.seven, 5, deck)
    fillStack(stacks.eight, 5, deck)
    fillStack(stacks.nine, 5, deck)
    fillStack(stacks.ten, 5, deck)
}

function fillStack(stack, numberOfCards, deck) {
    for (let i = 0; i < numberOfCards; i++) {
        const cardData = deck.pop() // take card from deck
        const dynamsort = cardCreate(cardData) // pass object directly
        dynamsort.style.setProperty("--i", stack.children.length)
        stack.appendChild(dynamsort)
    }
}

function cardCreate(cardObj) {
    const card = document.createElement("div")
    card.classList = `card cardVal${cardObj.number}`
    card.dataset.number = cardObj.number; // store number
    card.dataset.suit = cardObj.suit;

    const numberPl = document.createElement("p")
    const numberl = document.createTextNode(cardObj.number)
    numberPl.className = "numLC"
    numberPl.appendChild(numberl)
    card.appendChild(numberPl)

    const middleDiv = document.createElement("div")
    middleDiv.className = "middleCont"
    const middleImg = document.createElement("img")
    middleImg.className = "middleImg"
    middleImg.src = `./images/suit_icons/${cardObj.suit}.webp`
    middleDiv.appendChild(middleImg)
    card.appendChild(middleDiv)

    const numberPr = document.createElement("p")
    const numberr = document.createTextNode(cardObj.number)
    numberPr.className = "numRC"
    numberPr.appendChild(numberr)
    card.appendChild(numberPr)

    card.addEventListener("click", () => {
        for (let key in stacks) {
            const stack = stacks[key];

            const topCard = Array.from(stack.children)
                .reverse()
                .find(el => el.classList.contains("card"));

            if (!topCard || parseInt(card.dataset.number) === parseInt(topCard.dataset.number) - 1) {
                stack.appendChild(card);
                break;
            }
        }
        resortStack()

    });


    return card
}



startGame()

function resort(stack) {
    Array.from(stack.children).forEach((card, index) => {
        if (card.classList.contains("card")) {
            card.style.setProperty("--i", index);
        }
    });
}