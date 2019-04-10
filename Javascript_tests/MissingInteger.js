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

