// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a-b);
    
    let count = 1;
    
    for(let x = 0; x < A.length; x++){
        
        if(A[x] != count){
            return count;
        }
        
        count++;
    }
    
    return count;
}

//Test Result: https://app.codility.com/demo/results/trainingS2AGTP-PX3/?showingAll=1
