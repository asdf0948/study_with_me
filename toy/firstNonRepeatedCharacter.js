// 임의의 문자열을 입력받아 문자열 내에서 한 번만 등장하는 문자를 리턴해야 합니다.

const firstNonRepeatedCharacter = function(str) {
    // TODO: 여기에 코드를 작성합니다.
    // let str1 = str.toLowerCase();/
    let result = {};
    for ( let i = 0; i < str.length; i++ ) {
      if( result[str[i]] === undefined) {
          result[str[i]] = 1;
      } else {
          result[str[i]]++
      }
    }
    for ( let i in result) {
        if (result[i] === 1) {
            return i;
        }
    }
      return null;
  };