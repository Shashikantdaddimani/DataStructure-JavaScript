
/*
 Method for printing the 0-100 Array Elements
*/
function arrayRange(min,max){
    let array=[];
    for(let i=min;i<=max;i++)
        array.push(i);
        return array;
    
};
console.log(arrayRange(0,100)); 
/*
Method for Find Smae digits Between 0 to 100
*/
function count_same_digit( L,  R)
{
    let tmp = 0, ans = 0;
 
    // length of R
    let n = Math.log10(R) + 1;
 
    for (let i = 0; i < n; i++) {
 
        tmp = tmp * 10 + 1;
 
        for (let j = 1; j <= 9; j++) {
 
            if (L <= (tmp * j)
                && (tmp * j) <= R) {
                ans++;
            }
        }
    }
    return ans;
}
    let L = 0, R = 100;
 
    console.log( count_same_digit(L, R));
    
