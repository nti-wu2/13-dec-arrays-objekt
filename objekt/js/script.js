const suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
const deck = [];
let previousCard = null;
let activeCard = null;
let score = 0;

for(let i = 0; i<suits.length; i++){

    for(let j = 2; j<=14; j++){

        let rank = `${j}`;
        if(j === 11) { rank = 'J' }
        if(j === 12) { rank = 'D' }
        if(j === 13) { rank = 'K' }
        if(j === 14) { rank = 'A' }

        let color = 'black';
        if(suits[i] === '&hearts;' || suits[i] === '&diams;') {
            color = 'red';
        }

        let card = {
            suit: suits[i],
            value: j,
            rank: rank,
            color: color
        };

        deck.push(card)

    }
}


function pickCard(){
    
    let randomPosition = Math.floor(Math.random()*deck.length);
    let pickedCard = deck.splice(randomPosition, 1);  
    
    activeCard = pickedCard[0];
    
    updateUI(pickedCard[0]);

}

function updateScore(points){
    score += points;
    document.querySelector('header').innerText = `poäng: ${score}p`;
}

function updateUI(card){

    let main = document.querySelector('main')
    
    main.innerHTML = '';

    let el = 
    `<article class="${card.color}">
        <aside>
            <p class="suit">${card.suit}</p>
            <p>${card.rank}</p>
        </aside>
        <h1 class="suit">${card.suit}</h1>
        <aside class="bottom">
            <p class="suit">${card.suit}</p>
            <p>${card.rank}</p>
        </aside>
    </article>
    <p>${deck.length} kort kvar.</p>
    `;

    main.insertAdjacentHTML('beforeend', el);
}



document.querySelector('#lower').addEventListener('click', () => {
    console.log('Du gissade att nästa kort är LÄGRE!')

    previousCard = activeCard;

    pickCard();

    // compare
    if(activeCard.value < previousCard.value ){
        // Du gissade rätt!
        updateScore(10);
    } else {
        // Du gissade fel
        console.log('Felgissning!')
    }

});

document.querySelector('#identical').addEventListener('click', () => {
    console.log('Du gissade att nästa kort är SAMMA VÄRDE!');

    // skifta kort
    previousCard = activeCard;

    // nytt kort
    pickCard();

    // Jämför
    if(previousCard.value === activeCard.value){
        // Sucess!
        updateScore(100)
    } else {
        // fail!
    }

});

document.querySelector('#higher').addEventListener('click', () => {
    console.log('Du gissade att nästa kort är HÖGRE!');

    // Skifta kort
    previousCard = activeCard;

    // dra nytt
    pickCard();

    // jämför
    if(previousCard.value < activeCard.value){
        updateScore(10)
    } else {
        // fail!
    }

});

// init on game
pickCard();