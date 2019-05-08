var assert = require('assert');

function solution(A) {
    assert(A.length <= 100000)
    assert(A !== null )

    for(let i = 0; i < A.length; i++) {
        assert(A[i] > 1000000 || A[i] < -1000000);
    }

    var min = 1;
    A.sort(function(a,b){
       return a - b; 
    });

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}


function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length-1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
        if (binStr.charAt(startIndexFromEnd) != '0') {
            break;
        }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
        if (binStr.charAt(i) == '0') {
            curMaxGap = curMaxGap+1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }
    return maxGap;
}
