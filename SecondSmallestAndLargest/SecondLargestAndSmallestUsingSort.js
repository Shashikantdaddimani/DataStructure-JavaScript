
/*
 Method for finding the Second Largest element
*/
function secondLargest(array) {
    const arraySort = array.sort((a, b) => a - b);
    return arraySort[array.length - 2];
}
const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
console.log(array);
console.log(secondLargest(array)); 

/*
 Method for finding the Second smallest element
*/
function secondsmallest(arr) {
    const arraySort = arr.sort((a, b) => a - b);
    return arraySort[arr[1]];
}

const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));
console.log(arr)
console.log(secondsmallest(arr));