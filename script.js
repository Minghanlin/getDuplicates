var sortedArr = new Array();

function getDuplicates(arr) {
  if(arr.constructor !== Array) {
    throw new TypeError("Not an Array");
  } else {
    arr.sort();
    for(i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== 'number') {
        throw new TypeError("Not an integer");
      } else if (arr[i] === arr[i - 1] && arr[i] !== arr-[1 - 2]) {
        sortedArr.push(arr[i]);
      }
    }
    sortedArr.sort();
  }
};
