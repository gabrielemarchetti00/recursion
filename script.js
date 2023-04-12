//fibonacci with iteration
function fibs(n) {
	let array = [0, 1];
	for(let i = 2; i < n; i++){
		array.push(array[i-2] + array[i-1]);
	}
	return array;
}

//fibonacci with recursion
function fibsRec(n) {
	if (n == 0) return [0]
  	if (n == 1) return [0, 1]
	const arr = fibsRec(n - 1)
	
    //spread operator (concatenate the arrays)
	return [...arr, arr[n-1] + arr[n-2]]
}

console.log(fibsRec(8));



function mergeSort(array) {
	const half = array.length / 2
	
	// Base case or terminating case
	if(array.length < 2){
	  return array 
	}
	
	const left = array.splice(0, half)
	return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

console.log(mergeSort([2,1,5,4,3]));
