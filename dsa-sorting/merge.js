function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

function mergeSort(array) {
    // Base case: arrays with one or zero elements are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

module.exports = { merge, mergeSort};