const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  finish: '.jpg'
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl+person.imageId+person.imageSize+person.finish}        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
//객체 자체를 렌더링하는지, 객체 안의 요소를 렌더링하는지 확인할것
//src에 대해 까먹고 있었다. 반성
//img는 바로 person.image하면 에러뜸-src 때문이었음
//obj 요소들로 이미지: src={b.b1+b.b2+b.b3}