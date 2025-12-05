const wincon = document.querySelector("#winbtn")
wincon.addEventListener("click", () =>{
    alert("YOU WIN!") // because u need too win, dont u?
})




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
// where finished deck will go in future (distant future)
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


// stacks for placement 
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

let stack; // insane play initilaizing stack. do i even use this? 
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
    // shuffels the cards in a more random then just math random
    // need too make more random
    const deck = [...cards]; // copy of the original cards
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // swap
    }
    return deck;
}

function startGame() {
    // creates deck for gameplay 
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
    // what the fuck was i on?????
}

function fillStack(stack, numberOfCards, deck) {
    for (let i = 0; i < numberOfCards; i++) {
        const cardData = deck.pop() // take card from deck
        const dynamsort = cardCreate(cardData) // pass object directly
        dynamsort.style.setProperty("--i", stack.children.length) // posistioning property
        stack.appendChild(dynamsort)
    }
}

function cardCreate(cardObj) {
    // ur average card creator. ik its messy need too clean
    const card = document.createElement("div")
    card.classList = `card cardVal${cardObj.number}`
    card.dataset.number = cardObj.number; // store number
    card.dataset.suit = cardObj.suit;

    let numberl;
    let numberr;
    const numberPl = document.createElement("p")
    if(cardObj.number === 13) {
         numberl = document.createTextNode("K")
         numberr = document.createTextNode("K")
    }else if (cardObj.number === 12) {
         numberl = document.createTextNode("Q")
         numberr = document.createTextNode("Q")
    } else if (cardObj.number === 11) {
         numberl = document.createTextNode("J")
         numberr = document.createTextNode("J")
    } else if (cardObj.number === 1) {
         numberl = document.createTextNode("A")
         numberr = document.createTextNode("A")
    } else {
         numberl = document.createTextNode(cardObj.number)
         numberr = document.createTextNode(cardObj.number)
    }

    numberPl.className = "numLC"
    numberPl.appendChild(numberl)
    card.appendChild(numberPl)
    

    const middleDiv = document.createElement("div")
    middleDiv.className = "middleCont"
    const middleImg = document.createElement("img")
    middleImg.className = "middleImg"
    middleImg.src = `./images/suit_icons/${cardObj.suit}.webp`
    // should check if queen king or the last one
    middleDiv.appendChild(middleImg)
    card.appendChild(middleDiv)

    const numberPr = document.createElement("p")
    numberPr.className = "numRC"
    numberPr.appendChild(numberr)
    card.appendChild(numberPr)

    card.addEventListener("click", () => {
        for (let key in stacks) {
            const stack = stacks[key];

            const topCard = Array.from(stack.children)
                .reverse()
                .find(el => el.classList.contains("card"));
            // i dunno but funny af. dont know what it does

            if (!topCard || parseInt(card.dataset.number) === parseInt(topCard.dataset.number) - 1) {
                // will check card and make it on the stack. movment baby!
                stack.appendChild(card);
                break;
            }
        }

        resortTool()
        checkIfWin(stacks.one)
    });

    return card
}

function checkIfWin(stack) {
    // this will count the cards and check if u have a stack
    Array.from(stack.children).forEach((card, index) => {
        if (card.dataset.number == 13) {
            console.log(card.dataset.number)
            let kingI = index // unused for now might immpliment might not :3 im just silly like that
            for (let i = 0; i >= 13; i++) {
                if (stack.children[index + i].dataset.number == 13 - i) {
                    console.log("pair" + " " + i) // doesnt work. fix leah
                } else {
                    console.log("no more")
                    break;
                }

            }
        } else {
            console.log(stack.children[index])

            console.log("is not 13") // spams console not needed for other than testing
        }
    });
}

function resortTool() {
    // TODO: make this less code
    resort(stacks.one)
    resort(stacks.two)
    resort(stacks.three)
    resort(stacks.four)
    resort(stacks.five)
    resort(stacks.six)
    resort(stacks.seven)
    resort(stacks.eight)
    resort(stacks.nine)
    resort(stacks.ten)
    // lol 
}

startGame()

function resort(stack) {
    Array.from(stack.children).forEach((card, index) => {
        if (card.classList.contains("card")) {
            card.style.setProperty("--i", index);
            // resorts based on a property in styles B) 
        }
    });
}