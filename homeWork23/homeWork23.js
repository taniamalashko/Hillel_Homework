const amount = 100;

const monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
const tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

const minInHour = 60;

function deepClone(array) {
    let copyOfArray = [];
    
    array.forEach(function(element){
      if (Array.isArray(element)) {
        copyOfArray.push(deepClone(element));
      } else {
        copyOfArray.push(element);
      }
    });
    
    return copyOfArray;
  }


const monTue = deepClone(monday).concat(deepClone(tuesday));

let Trs = [];

monTue.forEach(function(element){
    element[1] /= minInHour;
    let salary = element[1] * amount;
    element.push(salary);
    if (element[1] > 2) {
        Trs.push(`<tr>
        <td>Task name: ${element[0]}</td>
        <td>Taks duration: ${element[1]} hours</td>
        <td>Task amount: $${element[2]}</td>
        </tr>`);
    }
})

document.write(`<table class="table table-striped table-bordered">${Trs.join('')}</table>`)

