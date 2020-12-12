const rockPaperScissors = function(n) {
    let result = [];
    let rps = [['rock'], ['paper'], ['scissors']];
    n = n || 3;
    if (n === 1) {
        [['rock'], ['paper'], ['scissors']];
    }
    let prev = rockPaperScissors(n - 1);
  
    for (let i = 0; i < rps.length; i++) {
        for (let j = 0; j < prev.length; j++) {
            result.push([...rps[i], ...prev[j]]);
        }
    }
    return result;
  };

rockPaperScissors();
// n = 3 
// prev = rockPaperScissors(3 - 1) 
// rockPaperScissors(2 - 1) prev = [['rock'], ['paper'], ['scissors']];
// result = [
//   [ 'rock', 'rock' ],
//   [ 'rock', 'paper' ],
//   [ 'rock', 'scissors' ],
//   [ 'paper', 'rock' ],
//   [ 'paper', 'paper' ],
//   [ 'paper', 'scissors' ],
//   [ 'scissors', 'rock' ],
//   [ 'scissors', 'paper' ],
//   [ 'scissors', 'scissors' ]
// ]
// 재귀의 탈출 조건으로 1차원 배열끼리의 합 경우의 수를 모두 각각 하나의 배열로 만들어서 리턴합니다.
// 각 리턴된 배열은 하나의 배열로 해당 rps[i]에 해당하는 단어와 합쳐지며 result에 담기게 됩니다.
//  ['rock'] [ 'rock', 'rock' ]  =   [ 'rock', 'rock', 'rock'] 와 같이 하나의 배열로서 resut에 담기게 됩니다
                            