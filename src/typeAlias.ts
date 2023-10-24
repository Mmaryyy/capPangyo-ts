//* 특정 타입, 인터페이스를 참조할 수 있는 타입 변수
// ---> 타입에 의미를 부여해서 별도의 이름으로 부르는 것

type Myname = string;

// 타입을 정의하는 것과 동시에 변수를 어떤 의미로 사용할지에 대해 명시적으로 보여줌
const capt: Myname = "캡틴";

// 재할당은 불가하다
// type Myname = number;

//? 타입 별칭과 인터페이스의 차이점
//--> 변수에 연결된 타입이 구체적으로 어떤 모양인지 파악(미리보기) 되는 것 : type alias

type AUser = {
  id: string;
  name: string;
};

interface IUser {
  id: string;
  name: string;
}

//* 인터페이스 : 주로 객체 타입
//* 타입 별칭 : 일반 타입, 유니언 타입, 인터섹션 타입, 제네릭, 유틸리티 타입 에도 사용 가능

type Gilbut<T> = {
  book: T;
};

// type Mybeer = Pick<Beer, 'brand'>

//* 인터페이스 + 타입 별칭 정의 함께 사용
interface IPerson {
  name: string;
  age: number;
}

type Adult = {
  old: boolean;
};

type Teacher = Person & Adult;

//* 타입 확장에서의 차이 -> 이미 정의되어 있는 타입들을 조합해서 더 큰 의미의 타입 생성
// 인터페이스에서 타입 확장은 상속을 이용함
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skill: string;
}

const joo: Person & Developer = {
  name: "joo",
  age: 10,
  skill: "programming",
};

type APerson = {
  name: string;
  age: number;
};

type ADeveloper = {
  skill: string;
};

type Joo = APerson & ADeveloper;

const j00: Joo = {
  name: "joo",
  age: 10,
  skill: "programming",
};

//* 인터페이스의 선언 병합 -> 동일한 이름으로 인터페이스를 선언하면 인터페이스 내용을 합친다

interface MPerson {
  name: string;
  age: number;
}

interface MPerson {
  address: string;
}

const example: MPerson = {
  name: "예시",
  age: 100000,
  address: "구로",
};
