// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    
    for(let x = 0; x < A.length; x++){
        if(A[x] == 0){
            //console.log("x", x);
            //console.log("A[x]", A[x]);
            for(let y = 0; y < A.length; y++){
                //console.log("y", y);
                if(A[x] == 0 && A[y] == 1){
                    if(y >= x){
                    counter++;
                    //console.log("counter", counter);
                    }
                }
            }
        }
    }
    
    return counter;
    
    if(A.length >= 1000000000){
        return -1;
    }
}

//solution([0, 1, 0, 1, 1]);