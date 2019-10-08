// reference: https://www.geeksforgeeks.org/quick-sort/

/**
 * Quick Sort
 * @param nums
 * @returns {*}
 */
function quickSort(arr, left, right) {
    let sort = (nums, left = 0, right = nums.length - 1) => {
        if (left > right) return; //end iteration
        let i = left;
        let j = right;
        //define first number as pivot
        const pivot = nums[i];
        //find a bigger num to swap
        while (i < j) {
            while (j > i && nums[j] >= pivot) {
                j--;
            }
            nums[i] = nums[j];
            while (i < j && nums[i] <= pivot) {
                i++;
            }
            nums[j] = nums[i];
        }
        //set pivot into the right place
        nums[j] = pivot;
        //sort left part of array
        sort(nums, left, i - 1);
        //sort right part of array.
        sort(nums, i + 1, right);
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
quickSort(nums)