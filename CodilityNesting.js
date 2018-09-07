// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let opening = [];
    let par = {"(":")"};
    
    for(let x = 0; x < S.length; x++){
        if(S[x] == "("){
            opening.push(S[x]);
        }
        else{
            let prev = opening.pop();
            
            if(S[x] !== par[prev]){
                return 0;
            }
        }
    }
    
    if(opening.length !== 0){
        return 0;
    }
    
    return 1;
}

//Test Result: https://app.codility.com/demo/results/trainingEABV2D-J8N/?showingAll=1
