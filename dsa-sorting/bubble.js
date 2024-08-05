function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop to traverse through the array multiple times
    do {
        swapped = false;
        for (let i = 0; i  < n - 1; i++) {
            // Inner loop to compare adjacent elements and swap if necessary
            if (arr[i] > arr[i + 1]) {
                // Swap elements if the current one is greater than the next
                [arr[i], arr [i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // After each pass, the largest element is in its correct position,
        // so we can reduce the range of the inner loop by 1.
        n--;
    } while (swapped);

    return arr;
}

module.exports = bubbleSort;