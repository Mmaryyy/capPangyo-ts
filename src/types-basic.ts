/* <-- cannot redeclare block-scoped variable '' 에러를 없애기 위해 빈 객체 export  --> */
/*
 * 타입스크립트는 global execution environment에서 DOM 타이핑을 사용해서
 * 이미 전역 변수로 선언되어 있을 수 있다.
 * 이럴 때 변수를 renaming 하던지 ts 모듈을 사용해 export 해서 전역 환경과 분리하거나
 * 혹은 컴파일러 옵션을 변경해서 DOM typing 을 제거한다.
 */
export {};
const name: string = "captain";
