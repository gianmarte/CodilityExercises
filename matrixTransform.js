function transform(mat){
	
	var rowIndex = [];
	var colIndex = [];

	for(var row = 0; row < mat.length; row++){

		if(mat[row].indexOf(1) !== -1){

			colIndex.push(mat[row].indexOf(1));
			rowIndex.push(row);

		}
	}

	for(var nRow = 0; nRow < mat.length; nRow++){

		for(var col = 0; col < mat[nRow].length; col++){

			if(rowIndex.includes(nRow)){
				mat[nRow][col] = 1;

			}

			if(colIndex.includes(col)){
				mat[nRow][col] = 1;
			}

		}

	}

	console.log(mat);
}

var matrix = [[0,0,0,1],
[0,0,0,0],
[0,0,0,0],
[1,0,0,0]];

transform(matrix);