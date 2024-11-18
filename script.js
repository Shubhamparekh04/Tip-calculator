'use strict';

document.querySelector('.btnSubmit').addEventListener('click', () => {
    let billAmount = +document.querySelector('#bill').value;
    let services = document.querySelector('#services').value;
    let numOfPeople = +document.querySelector('#people').value;
    let perHead;


    if (billAmount == "" || services == "" || numOfPeople == "") {
        alert('Kindly enter missing values.');
    } else {
        // console.log(+billAmount);
        if (services == "Poor - 5% Tip") {
            perHead = (billAmount + (billAmount * 0.05)) / numOfPeople
        } else if (services == "Fair - 10% Tip") {
            perHead = (billAmount + (billAmount * 0.1)) / numOfPeople
        } else if (services == "Good - 15% Tip") {
            perHead = (billAmount + (billAmount * 0.15)) / numOfPeople
        } else if (services == "Great - 20% Tip") {
            (billAmount + (billAmount * 0.20)) / numOfPeople
        } else if (services == "Excellent - 25% Tip") {
            perHead = (billAmount + (billAmount * 0.25)) / numOfPeople
        }
        alert(`Perhead Bill is : ${perHead}`);
    }
})
