
let randomArray = randomNumbers(1000000);

function randomNumbers(num) {

    let tempRandomArray = [];
    for (let i = 0; i < num; i++) {
        tempRandomArray.push(Math.floor(Math.random() * num));
    }
    return tempRandomArray;
}

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



let sortedArray = QuickSort(randomArray, 0, randomArray.length - 1);
console.log(sortedArray);

// node 9_QuickSort.js // FOR RUN