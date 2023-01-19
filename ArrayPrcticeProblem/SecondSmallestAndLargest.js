/*
 Method for checking the SecondLargest Elements
*/
function findSecondLargestElem(array){
    let first = -1 , second = -1;

    for(let i = 0; i <= array.length-1; i++){
        if(array[i] > first){
            second = first;
            first = array[i];
        }
        else if( array[i] > second && array[i] != first){
            second = array[i];
        }
    }
    console.log(second);
}
const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

console.log(array);
findSecondLargestElem(array);


//logic for checking secondSmallest Element
const minimumIndex = array => {
   return array.indexOf(Math.min(...array));
};
const secondMinimum = array => {
   const copy = array.slice();
   copy.splice(minimumIndex(copy), 1);
   return copy[minimumIndex(copy)];
};
console.log(secondMinimum(array));