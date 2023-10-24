/* <-- cannot redeclare block-scoped variable '' 에러를 없애기 위해 빈 객체 export  --> */
/*
 * 타입스크립트는 global execution environment에서 DOM 타이핑을 사용해서
 * 이미 전역 변수로 선언되어 있을 수 있다.
 * 이럴 때 변수를 renaming 하던지 ts 모듈을 사용해 export 해서 전역 환경과 분리하거나
 * 혹은 컴파일러 옵션을 변경해서 DOM typing 을 제거한다.
 */
export {};

//* string 타입 - 문자열
let name: string = "captain";
// 문자열 타입이 아닌 데이터 입력시 에러 발생
name = 123;

//* number
let age: number = 10;

//* boolean
let isLogin: boolean = false;

//* object
let hero: object = {
  name: "captain",
  age: 100,
};

//* array
let companies1: Array<string> = ["네이버", "삼성", "인프런"];
let companies2: string[] = ["네이버", "삼성", "인프런"];

//* tuple -> 특정 형태를 갖는 배열
// 배열 길이 고정, 각 요소 타입이 정의
let items: [string, number] = ["hi", 1];
items.push("룰루");

//? 타입스크립트는 왜 선언해둔 형태를 변경하는 메소드 호출을 막지 않을까
/**
 * 기존 파일을 마이그레이션 하는데에 있어서 한계가 생길 수 있다.
 * 가능한 튜플 형식의 데이터를 수정(?) 하지 않는 것이 좋다.
 ** 아래와 같은 방법으로 원하는 방식을 구현할 수 있다.
 */

type StrictTuple<T extends any[]> = Omit<T, keyof any[]> extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

const x: StrictTuple<[number, string]> = [1, ""]; // {0: number; 1: string }
x[1] = "okay";
x[0] = 123;
x.push(123); // error!
//~~~~ Property 'push' does not exist on type { 0: number; 1: string; }

//* any -> 아무 데이터나 취급, 자바스크립트의 유연함을 취하려고 할 때
var myName: any = "캡틴";
myName = 100; // error 안 남

//* null, undefined -> 'strict mode'에서만 사용되는 타입
var empty: null = null;
var nothingAssined: undefined;
