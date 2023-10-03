/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  let firstWordLength = words[0].length;

  return Math.max(firstWordLength, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  return Boolean((arr[0] === val) + find(arr.slice(1), val))

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  return Boolean(
    (str[0] === str[str.length -1]) * isPalindrome(str.slice(1, str.length -1))
    );
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';
  return str[str.length -1] + revString(str.slice(0, str.length-1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1; // reached the end, return -1
  if (arr[0] === val) return 0 // don't keep looking
  let nextVal = findIndex(arr.slice(1), val); // check next value
  if (nextVal === -1 ) return -1; // if it's -1, nothing was found, return that
  return nextVal + 1; // add 1 + the next value
}

/**
 * arr = ['p']
 * val = 'p'
 * arr.length = 1
 * arr[0] = 'p'
 * return 0
 *
 * ==================
 *
 * arr = ['c', 'p']
 * val = 'p'
 * arr.length = 2
 * arr[0] = 'c'
 * findIndex(['p'], 'p') = 0
 * nextVal = 0
 * return 1
 *
 * ==================
 *
 * arr = ['d', 'c', 'p]
 * val = 'p'
 * arr.length = 3
 * arr[0] = 'd'
 * findIndex(['c', 'p'], 'p') = 1
 * nextVal = 1
 * return 2
 *
 */

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {


  if (Object.keys(obj).length === 0) return [];
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (
      typeof obj[key] === 'object'
      && obj[key] !== null
      && !Array.isArray(obj[key])
      ){
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  console.log('binarySearch called with arr:', arr)
  console.log('binarySearch called with val:', val)
  if (arr.length === 0) return false;

  let middleIdx = Math.floor(arr.length / 2);
  let middleVal = arr[middleIdx];
  if (val === middleVal){
    console.log('Match found, returning true')
    return true;
  } else if (middleVal > val){
    console.log('Value provided is less than the middleVal')
    return binarySearch(arr.slice(0, middleIdx), val)
  } else {
    console.log('Value provided is greater than the middleVal')
    return binarySearch(arr.slice(middleIdx+1, arr.length), val)
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
