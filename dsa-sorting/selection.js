function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // Find the index of the smallest element in the unsorted portion
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the smallest element with the first element of the unsorted portion
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

module.exports = selectionSort;