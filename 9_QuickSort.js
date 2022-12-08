
let startCreateArrayTime = performance.now();

let randomArray = randomNumbers(112813858); // This is maximum number for my laptop // Creating time of array is ~3.8 seconds

function randomNumbers(num) {       // Array with random numbers

    let tempRandomArray = [];
    for (let i = 0; i < num; i++) {
        tempRandomArray.push(Math.floor(Math.random() * num));
    }
    return tempRandomArray;
}

// function randomNumbers(num) {     // For revers array (from the biggest to zero)
//
//     let tempRandomArray = [];
//     for (let i = 0; i < num; i++) {
//         tempRandomArray.push(num - i);
//     }
//     return tempRandomArray;
// }


let startTime = performance.now();
console.log(`Spend ${Math.round(startTime - startCreateArrayTime) / 1000} sec for creating array`) // Creating time of array is ~3.8 seconds
let sortedArray = QuickSort(randomArray, 0, randomArray.length - 1);
let endTime = performance.now()

console.log(sortedArray);
console.log(`Spend ${Math.round(startTime - startCreateArrayTime) / 1000} sec for creating array`) // Creating time of array is ~3.8 seconds
console.log(`Spend ${Math.round(endTime - startTime) / 1000} sec for sorting array`) // Sorting time of array is ~22.4 seconds
console.log(`Spend ${Math.round(endTime - startCreateArrayTime) / 1000} sec is general time`) // General time is ~ 26.2 seconds






function QuickSort(sourceArray, minIndex, maxIndex) {

    if (minIndex >= maxIndex) {
        return sourceArray;
    }

    let pivot = GetPivot(sourceArray, minIndex, maxIndex);
    QuickSort(sourceArray, minIndex, pivot - 1);
    QuickSort(sourceArray, pivot + 1, maxIndex);

    return sourceArray;
}

function GetPivot(sourceArray, minIndex, maxIndex) {
    let pivotIndex = minIndex - 1;

    for (let i = minIndex; i <= maxIndex; i++) {
        if (sourceArray[i] < sourceArray[maxIndex]) {
            pivotIndex++
            [sourceArray[pivotIndex], sourceArray[i]] = [sourceArray[i], sourceArray[pivotIndex]];
        }
    }

    pivotIndex++
    [sourceArray[pivotIndex], sourceArray[maxIndex]] = [sourceArray[maxIndex], sourceArray[pivotIndex]]
    return pivotIndex;
}

// node 9_QuickSort.js // FOR RUN