function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;

        // Shift elements ins the sorted portion to the right until we find the correct position for currentValue
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place currentValue in its correct position
        arr[j + 1] = currentValue;
    }
    return arr;
}

module.exports = insertionSort;