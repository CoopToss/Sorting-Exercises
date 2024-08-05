/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    // Choose the first element as the pivot
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1;  i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }

    // Swap the pivot value with the swapIndex to put it in the right place
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        // Recursively sort the left and right subarrays
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;