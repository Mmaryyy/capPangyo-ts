interface User {
  name: string;
  age: number;
}

const seho: User = {
  name: "seho",
  age: 10,
};

//* 인터페이스의 옵션 속성
interface Person {
  name: string;
  age: number;
}

//* 인터페이스 상속으로 확장하기
interface Developer extends Person {
  skill: string;
}

const hazel: Developer = {
  name: "hazel",
  age: 10,
  skill: "javascript",
};

//* 인터페이스를 이용한 인덱싱 타입 정의
console.log(hazel["name"]);

interface StringArray {
  [index: number]: string;
}

const companies: StringArray = ["삼성", "네이버", "구글"];

const company: StringArray = {
  0: "삼성",
  1: "네이버",
  2: "구글",
};

//* 인덱스 시그니처 -> 정확히 속성 이름을 명시하지 않고 속성 이름의 '타입'과 속성 값의 '타입'을 정의
// 객체와 배열을 인덱싱할 때만이 아니라 객체의 속성 타입을 유연하게 정의할 때도 사용된다.
interface SalaryMap {
  [level: string]: string;
}
