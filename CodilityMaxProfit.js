// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length-1;
    let curMax = 0;
    let maxDiff = 0;
    let maxPrice = 0;
    let maxProfit = 0;
    let diff = 0;
    let indexMax = 0;
    
    if(A.length < 1){
        return 0;
    }
    
    while(len > 0){
        diff = A[len] - A[len-1];
        
        if(diff > 0){
            curMax = diff;
            if(diff > maxDiff){
                maxDiff = diff;
                curMax = A[len];
            }
        }
        if(curMax > maxPrice){
            maxPrice = curMax;
            indexMax = len;
        }
        len--;
    }
    
    for(let x = indexMax; x >= 0; x--){
        curMax = maxPrice - A[x];
        maxProfit = Math.max(maxProfit, curMax);
    }
    
    return maxProfit;
}

//Needs improvement
//Test Result: https://app.codility.com/demo/results/training5ACXEF-WRE/?showingAll=1
/**edge cases
[4, 3, 2, 1, 2, 3, 4]
[5,4,3,2,1]
[]
[0,20000]**/