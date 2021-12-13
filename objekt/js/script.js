const suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
const deck = [];

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

console.log(deck);



function pickRandomCard(){
    let randomPosition = Math.floor(Math.random()*deck.length);
    let pickedCard = deck[randomPosition];

    generateCard(pickedCard);

}

function generateCard(card){

    let el = 
    `<article>
        <aside>
            <p class="suit">${card.suit}</p>
            <p>${card.rank}</p>
        </aside>
        <h1 class="suit">${card.suit}</h1>
        <aside class="bottom">
            <p class="suit">${card.suit}</p>
            <p>${card.rank}</p>
        </aside>
    </article>`;

    document.querySelector('main').insertAdjacentHTML('beforeend', el);

}


pickRandomCard();

