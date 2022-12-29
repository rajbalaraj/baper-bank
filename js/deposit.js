document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    const dipositTotalElement = document.getElementById('deposit-total');
    const depositTotal = dipositTotalElement.innerText;
    dipositTotalElement.innerText = depositAmount;



})