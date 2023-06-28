const tableBody = document.getElementById('tableBody');

for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            let data = document.createElement('td');
            let number = (i - 1) * 10 + j;
            data.innerText = number;
            row.appendChild(data);
        }
    tableBody.appendChild(row);
}