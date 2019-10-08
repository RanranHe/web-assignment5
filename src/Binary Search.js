var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];

function binary(target, arr, left, right) {
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
            return binary(target, arr, left, mid - 1); //
        } else {
            // search in right part
            return binary(target, arr, mid + 1, right);
        }
    }
    // if can not find target in array, then return -1
    return -1;
}
console.log(binary(44, test, 0, test.length - 1));