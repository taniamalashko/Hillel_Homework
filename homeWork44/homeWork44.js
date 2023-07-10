//Отримуємо елементи з html
const form = document.querySelector('#form');
const wrap = document.querySelector('.wrap');

//ПОвідомлення про помилку
const NAME_REQUIRED = 'Введіть ім\`я';
const SURNAME_REQUIRED = 'Введіть прізвище';
const DATE_REQUIRED = 'Ведіть дату народження';
const GENDER_REQUIRED = 'Оберіть стать';
const CITY_REQUIRED = 'Оберіть місто';
const ADRESS_REQUIRED = 'Введіть адресу';
const LANGUAGE_REQUIRED = 'Оберіть мову(-и), якими володієте';

//Перевірка форми і рендер таблиці
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const checkedLanguages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);
    const formData = {
        name: form.elements.name.value,
        surname: form.elements.surname.value,
        birthDate: form.elements.birthDate.value,
        gender: form.elements.gender.value,
        city: form.elements.city.value,
        adress: form.elements.adress.value,
        languages: checkedLanguages.join(', '),
    }

    if (validateForm(formData)) {
        renderTable(formData);
    }
})

//Перевірка форми
function validateForm(formData){
    isValid = true

    isValid = isValid && validateField(formData.name, 'name', NAME_REQUIRED);
    isValid = isValid && validateField(formData.surname, 'surname', SURNAME_REQUIRED);
    isValid = isValid && validateField(formData.birthDate, 'birthDate', DATE_REQUIRED);
    isValid = isValid && validateCheckedFields(formData.gender, 'gender', GENDER_REQUIRED);
    isValid = isValid && validateField(formData.city, 'city', CITY_REQUIRED);
    isValid = isValid && validateField(formData.adress, 'adress', ADRESS_REQUIRED);
    isValid = isValid && validateCheckedFields(formData.languages, 'languages', LANGUAGE_REQUIRED);

    return isValid
}

function validateField(value, id, message){
    const inputElement = document.getElementById(`${id}`);
    const smallElement = inputElement.nextElementSibling;

    if (value.trim().length < 3 || !value) {
        return showErrorMessage(message, smallElement, inputElement);
    } else {
        return validValue(smallElement, inputElement);
    }
}

function validateCheckedFields(value, id, message){
    const divElement = document.getElementById(`${id}`);
    const smallElement = divElement.lastElementChild;

    if (value.length === 0 ) {
        return showErrorMessage(message, smallElement, divElement);
    } else {
        return validValue(smallElement, divElement);
    }
}

//Повідомлення про помилку
function showErrorMessage(message, smallElement, inputElement){
    inputElement.classList.add('input-red');
    smallElement.style.display = 'block';
    smallElement.innerText = message;
    return false
}

function validValue(smallElement, inputElement){
    inputElement.classList.remove('input-red')
    smallElement.style.display = 'none';
    smallElement.innerText = '';
    return true
}

//рендер таблиці
function renderTable(formData){
    wrap.innerHTML = '';

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    table.classList.add('table');

    tbody.appendChild(createRow(formData.name, 'Ім\`я'));
    tbody.appendChild(createRow(formData.surname, 'Фамілія'));
    tbody.appendChild(createRow(formData.birthDate, 'Дата народження'));
    tbody.appendChild(createRow(formData.gender, 'Стать'));
    tbody.appendChild(createRow(formData.city, 'Місто'));
    tbody.appendChild(createRow(formData.adress, 'Адреса'));
    tbody.appendChild(createRow(formData.languages, 'Мови'));

    table.appendChild(tbody);
    wrap.appendChild(table);
}

function createRow(value, label){
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.classList.add('label');
    td2.classList.add('value');

    td1.innerText = label;
    td2.innerText = value;

    row.appendChild(td1);
    row.appendChild(td2);

    return row
}
