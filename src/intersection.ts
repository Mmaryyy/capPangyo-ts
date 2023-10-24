//* intersection -> 타입 2개를 하나로 합쳐서 사용할 수 있는 타입

interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

const ironman: Avenger & Hero = {
  name: "tony",
  skill: "make robots",
};
