A = [-1, 3, -4, 5, 1, -6, 2, 1];
B = [1, 2, 3];

function arraySum(array) {
	var sum = array.reduce(function(a,b) {
		return a + b;
	}, 0);
	return sum;
};

function solution(array) {
	var totalSum = arraySum(A);
	var equilibriumIndex = -1;
	
	for (i = 0; i < array.length; i++) {
		
		var lowerArray = array.slice(0, i);
		var lowerSum = arraySum(lowerArray);
		var upperArray = array.slice(i+1, array.length);
		var upperSum = arraySum(upperArray);
		
		if (lowerSum === upperSum) {
			equilibriumIndex = i;
			break;
		}
	}
	return equilibriumIndex;
}
solution(A);
solution(B);