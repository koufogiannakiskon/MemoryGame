let clickedCard = null;
let preventClick = null;
let combosFound = 0;
const body = document.querySelector("body");

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'blue',
    'purple',
    'turquoise',
    'green'
];

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
    const cardAindex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAindex];
    cards.splice(cardAindex, 1);
    cardA.className += ` ${color}`
    cardA.setAttribute('data-color', color);

    const cardBindex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBindex];
    cards.splice(cardBindex, 1);
    cardB.className += ` ${color}`
    cardB.setAttribute('data-color', color);
}

function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === clickedCard || target.className.includes('done')) {
        return;
    }

    target.className = target.className
        .replace('color-hidden', '')
        .trim();


    if (!clickedCard) {
        //if we haven't click on a card
        clickedCard = target;
    } else if (clickedCard) {
        //if we have allready clicked check matching colors
        preventClick = true;
        if (clickedCard.getAttribute('data-color') !==
            target.getAttribute('data-color')
        ) {
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('done', '').trim() + 'color-hidden';
                target.className = target.className.replace('done', '').trim() + 'color-hidden';
                clickedCard = null;
                preventClick = false;
            }, 500);

        } else {
            clickedCard = null;
            preventClick = false;
            combosFound++;
            if (combosFound === 8) {
                body.classList.add("blur");
                alert(`CONGRATS!!! YOUR SCORE IS: ${clicks}!`)
            }
        }
    }
}
