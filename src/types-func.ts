/* 함수의 타입 정의 : 파라미터와 반환값 */

function sayWord(word: string): string {
  return word;
}

// 파라미터와 인자의 개수가 같아야 한다.
sayWord("안녕", "헤이즐");

//* optional parameter -> lasaName은 호출할 때 있어도, 없어도 되는 파라미터로 인식
function sayMyName(firstName: string, lastName?: string): string {
  return "my name" + firstName + lastName;
}
