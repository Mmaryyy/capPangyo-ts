/* 타입의 제약으로 같은 기능 함수를 따로 정의해야 함 */

function logText(word: string): string {
  return word;
}

function logNum(num: number): number {
  return num;
}

//* union 타입으로 두 가지 타입의 데이터를 받을 수 있는 유니언 타입으로 선언
function log(param: string | number) {
  return param;
}

// 위의 함수와 다른 점은 데이터 타입이 정의되지 않아 자동 완성을 제공받지 못함
function logAny(param: any) {
  return param;
}

//* 주의할 점
interface UPerson {
  name: string;
  age: number;
}

interface UDeveloper {
  name: string;
  skill: string;
}

// 공통으로 포함하는 속성인 name에 대해서만 접근 가능하다
function introduce(someone: UPerson | UDeveloper) {
  return someone.age;
}

function introduceIn(someone: UPerson | UDeveloper) {
  // in 연산자를 이용해 포함 여부를 불리언으로 받는다
  if ("age" in someone) {
    console.log(someone.age);
  }
  if ("skill" in someone) {
    console.log(someone.skill);
  }
}
