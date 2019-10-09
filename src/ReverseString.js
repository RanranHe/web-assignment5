/**
 * Reverse a string
 * @param str -- the string we want to reverse
 * @returns {*} -- return the reversed string
 */
function reverseString(str) {
    if (str === "") return str;
    else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("An Apple Is Dropping From The Tree"));
reverseString("An Apple Is Dropping From The Tree");