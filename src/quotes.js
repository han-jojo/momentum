const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로"
  },
  {
    quote: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑"
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨"
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료"
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 한다.",
    author: "찰리 채플린"
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드"
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다.",
    author: "켄러"
  },
  {
    quote: "우리를 향해 열린 문을 보지 못하게 된다.",
    author: "헬렌 켈러"
  },
  {
    quote:
      "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
    author: "채근담"
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author: "단테"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
