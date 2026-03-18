// Dom Vars
const convBtn = document.getElementById("conv-btn");
const convertInput = document.getElementById("convertInput");
const convertedInput = document.getElementById("convertedInput");
const convertSelection = document.getElementById("convert-selection");
const convertedSelection = document.getElementById("converted-selection");

// Array Of Weight Units
const weightArray = ["MG", "G", "KG", "TON"];

convBtn.addEventListener("click", () => {
    const convertNum = parseFloat(convertInput.value);
    const fromUnit = convertSelection.value;
    const toUnit = convertedSelection.value;

    if (isNaN(convertNum)) return;

    const fromIdx = weightArray.indexOf(fromUnit);
    const toIdx = weightArray.indexOf(toUnit);

    if (fromIdx === -1 || toIdx === -1) return;

    if (fromIdx === toIdx) {
        convertedInput.value = convertNum;
        return;
    }

    const exponent = fromIdx - toIdx;
    const result = convertNum * Math.pow(1000, exponent);

    convertedInput.value = result;
});

document.addEventListener("keydown", e => {
    // Event on enter keydown
    if (e.key === "Enter") {
        e.preventDefault();
        convBtn.click();
    }
});

// summary:
/*
I used an array to justify my laziness.
Most importantly, users will never know what they are doing wrong.
There is no error message — the function simply returns nothing.
*/
