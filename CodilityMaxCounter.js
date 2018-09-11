// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrCount = [];
    let maxCount = 0;
    
    for(let z = N; z > 0; z--){
        arrCount.push(0);
    }
    
    if(A.length == 0){
        return arrCount;
    }
    
    
    for(let x = 0; x < A.length; x++){
        let index = A[x]-1;
        
        if(A[x] <= N){
            arrCount[index]+=1;
        }
        else{
            maxCount = Math.max(...arrCount);
            arrCount = arrCount.map(x => x < maxCount ? x=maxCount : x);
        }
    }
    
    return arrCount;
    
}

//Needs improvement
//Test Result: https://app.codility.com/demo/results/trainingAV92GD-7WH/?showingAll=1
