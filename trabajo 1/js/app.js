'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const numberForm = document.getElementById("numberForm");
    const numberInput = document.getElementById("numberInput");
    const addNumberButton = document.getElementById("addNumber");
    const maxNumberDisplay = document.getElementById("maxNumber");
    const minNumberDisplay = document.getElementById("minNumber");

    let numbers = [];

    addNumberButton.addEventListener("click", function () {
        const enteredNumber = parseInt(numberInput.value);

        if (!isNaN(enteredNumber)) {
            numbers.push(enteredNumber);
            numberInput.value = "";
            updateMinMaxDisplay();
        }
    });

    function updateMinMaxDisplay() {
        if (numbers.length > 0) {
            const max = Math.max(...numbers);
            const min = Math.min(...numbers);

            maxNumberDisplay.textContent = max;
            minNumberDisplay.textContent = min;
        }
    }
});