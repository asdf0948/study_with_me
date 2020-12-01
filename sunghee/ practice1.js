/* 
문제
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

입력 
인자 1 : score
number 타입의 정수 

출력
string 타입을 리턴해야 합니다.
각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
90 이상 --> 'A'
80 이상 --> 'B'
70 이상 --> 'C'
60 이상 --> 'D'
60 미만 --> 'F'

주의사항 
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다.
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.
*/

function plusOrMinus(score){
    const extra = score % 10;
    if (extra <= 3) {
      return '-';
    } else if (extra >= 8) {
      return '+';
    } else {
      return '';
    }
  }
/*
 + 나 - 를 붙이는 기능을 하는 plusOrMinus라는 함수를 만들어준다.
 1의 자리를 구하기 위해 10으로 나누어 나머지 값을 구한다. score % 10
 
 86점이라고 가정했을때
 최고점수(90) 보다 7점 이하 -> 80~83 마이너스 (B- 를 리턴한다!)
 최저점수(80) 보다 8점 이상 -> 88~90 플러스 (B+ 를 리턴한다!)
 나머지 -> 84~87 (B를 리턴한다!)

*/
  
  function convertScoreToGradeWithPlusAndMinus(score) {
    let grade;
    if (score > 100 || score < 0) {
      return 'INVALID SCORE';
    }
    if (score === 100) {
      return 'A+';
    }
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else if (score >= 0) {
      grade = 'F';
    }
  
    if (grade !== 'F') {            // F+ 와 F- 는 존재하지 않기 때문에.
      grade = grade + plusOrMinus(score);
    }
    return grade;
  }
