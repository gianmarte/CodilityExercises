// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let nums = new Set();
    
    for(let x = 0; x < A.length; x++){
        nums.add(A[x]);
    }
    
    return nums.size;
}

//Test Result: https://app.codility.com/demo/results/training33SSYH-BPH/?showingAll=1
