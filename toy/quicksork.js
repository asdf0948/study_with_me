const quicksort = function(n) {
    if (n.length < 2) {
        return n
    }
    console.log(n)
    let pivot = n[0];
    
    let pivotleft = [];
    let pivotRigth = [];
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] < pivot) {
            pivotleft.push(n[i])
        } if (n[i] > pivot) {
            pivotRigth.push(n[i])
        }
    }
    return quicksort(pivotleft).concat(pivot, quicksort(pivotRigth))
}

n = [4,2,3,1]
console.log(quicksort(n));

// 풀이) 
// 입력 예시 n = [4,2,3,1]가 입력되는 경우 임의의 기준이되는 수를 pivot이라 정한다
// pivot을 기준으로 작은 수는 pivotLeft 큰 수는 pivotRigth에 각각 할당해준다.

// n = [4,2,3,1] 일 경우 pivotLeft = [2,3,1] , pivotRigth = [] 로 할당이 된다.
// quicksort(pivotLeft)에 [2,3,1] 로 함수가 재실행되면 pivot = [2], pivotLeft = [1], pivotRigth[3]으로 할당된다. 
// quicksort(pivotleft) 에 [1]이 들어가 재사용되지만 (n.length < 2)조건에 막혀 바로 return 되어 quicksort(pivotleft) 자리에 [1] 이 위치하는데
// quicksort(pivotRigth)도 마찬가지다. 

// ex) quicksort([4,2,3,1])
//     pivot = 4
//     pivotLeft = [2,3,1];
//     pivotRigth = [];
//     return               quicksort(pivotleft).concat(pivot, quicksort(pivotRigth))
//                             pivot = 2                                 []
//                             pivotleft = [1]
//                             pivotRigth = [3]
//                             return   quicksort(pivotleft).concat(pivot, quicksort(pivotRigth))
//                                                 [1]                   [2]           [3]


