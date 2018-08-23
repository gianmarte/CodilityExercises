// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    
    if(A.length <= 1 && A[0] <= 1){
        return 1;
    }
    
    for(let x = 0; x < A.length; x++){
        
        if(A[0] != 1){
            return 0;
        }
        else{
            if(A[x+1] - A[x] == 1){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    
    return 0;
}