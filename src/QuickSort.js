// reference: https://www.geeksforgeeks.org/quick-sort/

/**
 * Quick Sort
 * @param arr -- The list of numbers we want to sort
 * @returns {*}  -- a sorted array list
 */
function quickSort(arr) {
    /**
     * Actual do the sorting
     * @param arr  --- The list of numbers we want to sort
     * @param left -- the smaller index
     * @param right  -- the larger index
     */
    let sort = (arr, left = 0, right = arr.length - 1) => {
        if (left > right) return; //end iteration
        let i = left;
        let j = right;
        //define first number as pivot
        const pivot = arr[i];
        //find a bigger num to swap
        while (i < j) {
            while (j > i && arr[j] >= pivot) {
                j--;
            }
            arr[i] = arr[j];
            while (i < j && arr[i] <= pivot) {
                i++;
            }
            arr[j] = arr[i];
        }
        //set pivot into the right place
        arr[j] = pivot;
        //sort left part of array
        sort(arr, left, i - 1);
        //sort right part of array.
        sort(arr, i + 1, right);
    };
    sort(arr);
    return arr;
}

/**
 * The arr we want to sort.
 * @type {number[]}
 */
const nums = [89, 8, 44, 5, 22, 15, 41, 46, 2, 4, 33, 6, 0, 13];
console.log(quickSort(nums));
quickSort(nums);