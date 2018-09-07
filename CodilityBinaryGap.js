// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let binary = N.toString(2);
    let curGap = 0;
    let count = 0;
    let indexOne = binary.indexOf(1);

    for(let x = 0; x < binary.length; x++){
        
        if(binary.charAt(x) == 0 && indexOne <= x){
            count++;
        }
        else if(binary.charAt(x) == 1 && x > indexOne){
            if(count > curGap){
                curGap = count;
            }
            count = 0;
        }
        
    }
    return curGap;
}

//Test Result: https://app.codility.com/demo/results/trainingZ95Z59-V37/?showingAll=1
