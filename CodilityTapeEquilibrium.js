// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let redu = A.reduce((a,b) => a+b);
    let sumRight = 0;
    let len = A.length;
    let sumLeft = 0;
    let diff = 0;
    let lowVal = 0;
    
    if(len == 1){ return A[0];}
    
    for(let x = 1; x < len; x++){
        
        sumRight += A[x-1];
        sumLeft = redu - sumRight;
        diff = Math.abs(sumRight-sumLeft);

        if(x-1 == 0){
            lowVal = diff;
        }
        else{
            if(diff < lowVal){
                lowVal = diff;
            }
        }
    }
    
    return lowVal;
}