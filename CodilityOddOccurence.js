function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
	
	//if Array A has only 1 element, return that element
	if(A.length == 1){
		return A[0];
	}
	
	// Sort array from smallest to largest value
	A.sort();

	//Iterate through the array's element by pair
    for(let x = 0; x < A.length; x+=2){
		//if the pair are not equal, return element in Array index x
		if(A[x] != A[x+1]){
			return A[x];
			//stop for loop
			break;
		}
    }
}

//Test Result: https://app.codility.com/demo/results/training9SP9WK-PKX/?showingAll=1
