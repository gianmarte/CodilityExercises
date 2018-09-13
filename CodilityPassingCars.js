// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let eastCars = 0;
    let passingCars = 0;
    
    for(let x = 0; x < A.length; x++){
        if(A[x] == 0){
            eastCars++;
        }
        else{
            passingCars+=eastCars;
            if(passingCars > 1000000000){
                return -1;
            }
        }
    }
    
    return passingCars;
}

//Test Result: https://app.codility.com/demo/results/trainingBN3QHC-6MH/?showingAll=1
