sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

summerSports = [];
winterSports = [];
fruits = [];

for (i = 0; i < sports.length; i++) {
    cloneArray = sports[i].slice();
    if (i < 5) {
        winterSports.push(cloneArray);
    } else {
        summerSports.push(cloneArray);
    }
}

winterFruits = winterSports.splice(2, 1);
summerFruits = summerSports.splice(2, 2);
fruits.push(winterFruits[0], summerFruits[0], summerFruits[1]);

sortedArrays = winterSports.concat(summerSports, fruits);

for (i = 0; i < sortedArrays.length; i++) {
    switch (i) {
        case 0:
            console.log('***Winter sports***');
            break
        case winterSports.length:
            console.log('');
            console.log('***Summer sports***');
            break
        case winterSports.length + summerSports.length:
            console.log('');
            console.log('***Fruits***');
            break
    }
    console.log(`${sortedArrays[i][0]}: ${sortedArrays[i][1]}`);
}
