function searchInsertion(array, target, start, end) {
    // Function to find an element and return its index. If not found, return the index where it would be.

    if (start > end) {
        return start;
    }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (array[mid] < target) {
        return searchInsertion(array, target, mid + 1, end);
    } else {
        return searchInsertion(array, target, start, mid - 1);
    }
}