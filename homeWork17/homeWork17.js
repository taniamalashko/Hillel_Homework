//.wrapper .card--person .person .card__info

TRs = [];
cardRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
cardRankIndex = 0;

cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];
cardPersons = ['jack', 'queen', 'king', 'clubs', 'spades', 'diamonds', 'hearts'];

for (tr = 1; tr <= 7; tr++) {
    TDs = [];
    cardSuit = 0;
    cardPerson = 0;

    for (td = 1; td <= 8; td++) {
        card = '';

        if (((td === 1 || td === 5) && tr !== 7) || (td === 3 && tr ===7)) {
            cardRankIndex++;
        }  
        if ((tr === 6 && td === 1) || (tr === 6 && td === 5) || (tr === 7 && [1, 2, 3, 4, 5, 6].includes(td))) {
            cardPerson++;
        }

        if ((![5, 6, 7].includes(tr)) || (tr === 5 && ![5, 6, 7, 8].includes(td))) {
            card = `<div class="card">
            <div class="card__info">${cardRanks[cardRankIndex]}
            <img src="/Hillel_Homework/homeWork17/images/${cardSuits[cardSuit]}.svg" alt="${cardSuits[cardSuit]}"></div>
            <div class="card__info">${cardRanks[cardRankIndex]}
            <img src="/Hillel_Homework/homeWork17/images/${cardSuits[cardSuit]}.svg" alt="${cardSuits[cardSuit]}"></div>
            </div>`;
        }
        if ((tr === 5 && ![1, 2, 3, 4].includes(td)) || tr === 6 || (tr === 7 && ![1, 2, 7, 8].includes(td))) {
            card = `<div class="card card--person">
            <div class="card__info">${cardRanks[cardRankIndex]}
            <img src="/Hillel_Homework/homeWork17/images/${cardSuits[cardSuit]}.svg" alt="${cardSuits[cardSuit]}"></div>
            <img class="person" src="/Hillel_Homework/homeWork17/images/${cardPersons[cardPerson]}.svg" alt="${cardPerson}">
            <div class="card__info">${cardRanks[cardRankIndex]}
            <img src="/Hillel_Homework/homeWork17/images/${cardSuits[cardSuit]}.svg" alt="${cardSuits[cardSuit]}"></div>
            </div>`;
        }

        TDs.push(`<td>${card}</td>`);

        cardSuit++;
        if ((cardSuit === 4 && tr !== 7) || (td === 2 && tr ===7)) {
            cardSuit = 0;
        }
    }
    TRs.push(`<tr>${TDs.join('')}</tr>`);
}
document.write(`<div class="wrapper"><table>${TRs.join('')}</table></div>`);