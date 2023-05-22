hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
colors = ['red', 'orange', 'yellow', 'green', 'cornflowerblue', 'blue', 'violet'];

rainbow = hero.concat(native, destination);
rainbow = rainbow.reverse();

for (i = 0; i < rainbow.length; i++) {
    switch (rainbow[i]) {
        case 'Poltava':
            rainbow[i] = 'Vain';
            break
        case 'Ivan':
            rainbow[i] = 'Richard';
    }
}

richard = rainbow.pop();
rainbow.unshift(richard);

inVain = rainbow.splice(1, 2);
rainbow.push('Gave', 'Battle', inVain[0], inVain[1]);

circlesAndWords = ``;

for (i = 0; i < rainbow.length; i++) {
    circlesAndWords += `<div>
    <div class="circle" style="background-color: ${colors[i]};"></div>
    <div class="word">${rainbow[i]}</div>
    </div>`;
}

document.write(`<div class="wrapper">${circlesAndWords}</div>`)


