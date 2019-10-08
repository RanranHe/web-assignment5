// reference: https://www.geeksforgeeks.org/binary-search/
/**
 * Binary Search
 * @param target  -- the number we want to find
 * @param arr -- the list of numbers
 * @param left -- the left index
 * @param right -- the right index
 * @returns {*}
 */
function binary(target, arr) {
    let search = (target, arr, left = 0, right = arr.length -1) => {
        //when left index>= right index stop searching
        if (left <= right) {
            //if(value of l index is target just return this index)
            if (arr[left] === target)
                return left;
            // same way return the right index
            if (arr[right] === target)
                return right;
            // get int number by upper the double
            const mid = Math.ceil((right + left) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] > target) {
                // if target<= mid, search in left part of array
                return search(target, arr, left, mid - 1); //
            } else {
                // search in right part
                return search(target, arr, mid + 1, right);
            }
        }
        // if can not find target in array, then return -1
        return -1;
    };
    return search(target, arr);
}

/**
 * The list we want to search certain number in
 * @type {number[]}
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
console.log(binary(44, arr));
binary(44, arr);
