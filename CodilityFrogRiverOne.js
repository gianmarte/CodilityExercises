// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let time = new Set();
    
    for(let x = 0; x < A.length; x++){
        
        time.add(A[x]);

        if(time.size == X){
            return x;
        }
    }
    
    return -1;
}