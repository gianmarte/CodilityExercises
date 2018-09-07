// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    for(let x = K; x > 0; x--){
        if(A.length > 0){
            let lastElem = A.pop();
            A.unshift(lastElem);
        }
    }
        
    return A;
}