let usersBirthYear = prompt('Hi! Please tell me your birth year :)');
let usersCity = prompt('Ok! what city do you live in?');
let usersFavoriteSport = prompt('And the last question, what is your favorite sport?');
let usersInfo = '';

//Додаю в змінну рік народження
if(!usersBirthYear){
    usersInfo += 'I am sorry you did not want to say your bith year :( ';
}else{
    usersInfo += `Your birth year is ${usersBirthYear}. `;
}

//Додаю в змінну місто проживання
if(!usersCity){
    usersInfo += 'I am sorry you did not want to say your city :( ';
}else if(usersCity.toLowerCase === 'Kyiv'.toLowerCase){
    usersInfo += 'Wow! You live in the capital of Ukraine! ';
}else if(usersCity.toLowerCase === 'Washington'.toLowerCase){
    usersInfo += 'Wow! You live in the capital of USA! ';
}else if(usersCity.toLowerCase === 'London'.toLowerCase){
    usersInfo += 'Wow! You live in the capital of Great Britain! ';
}else{
    usersInfo += `You live in the ${usersCity}. `;
}

//Додаю в змінну улюблений вид спорту
if(!usersFavoriteSport){
    usersInfo += 'I am sorry you did not want to say your favorite sport :(';
}else if(usersFavoriteSport.toLowerCase === 'Football'.toLowerCase){
    usersInfo += 'Cool! Do you want to become Lionel Messi?';
}else if(usersFavoriteSport.toLowerCase === 'Tennis'.toLowerCase){
    usersInfo += 'Cool! Do you want to become Novak Djokovic?';
}else if(usersFavoriteSport.toLowerCase === 'Basketball'.toLowerCase){
    usersInfo += 'Cool! Do you want to become LeBron James?';
}else{
    usersInfo += `Your favorite sport is ${usersFavoriteSport}`;
}

alert(usersInfo)
