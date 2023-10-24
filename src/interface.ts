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

//! 인터페이스의 활용 - 백엔드와의 인터페이스 정의

// 에러 방지를 위한 함수 정의
const axios = {
  id: "axios",
  get: (param: any) => {
    return param;
  },
};
//1. JSDoc을 이용한 방법
/**
 * @typeof {Object} User
 * @property {string} id - 사용자 아이디
 * @property {string} name - 사용자 이름
 */

/**
 * @returns {User} 1번 사용자
 */
function fetchData() {
  return axios.get("http://localhost:3000/users/1");
}

// 2. 타입 별칭을 이용한 방법
// 2-1.타입 별칭으로 API 함수의 응답 형태 정의
type TAUser = {
  id: string;
  name: string;
};

function fetchDataTA(): TAUser {
  return axios.get("http://localhost:3000/users/1");
}

// 2-2. 인터페이스로 API 함수의 응답 형태 정의
//* API Response 데이터 구조 변경시 상속이나 선언 병합을 통한 확장을 고려하면 인터페이스가 더 유연하게 타입을 확장할 수 있는 장점이 있다.
interface IUser {
  id: string;
  name: string;
}

function fetchDataIF(): IUser {
  return axios.get("");
}
