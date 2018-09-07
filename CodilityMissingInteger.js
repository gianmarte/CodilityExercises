// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a-b);
    let count = 1;
    
    for(let i = 0; i<A.length; i++) {
        if(A[i] > 0){
            if(count == A[i]){
                count++;
            }
        }
    }
   return count;
}

//Test Result: https://app.codility.com/demo/results/trainingED565T-ZJK/?showingAll=1
