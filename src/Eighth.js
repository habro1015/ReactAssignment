//모든 컴포넌트는 퓨어하다(고 가정)
//퓨어하지 않으면 프로퍼티 이용해 순수하게 수정하기
//2번이 가장 이해가 어려움(import는 생략)
export default function Profile({ person }) {
    return (
      <Panel>
        <Header person={person} />
        <Avatar person={person} />
      </Panel>
    )
  }
//person prop 이용해서 받기
  function Header({ person }) {
    return <h1>{person.name}</h1>;
  }
  
  function Avatar({ person }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={50}
        height={50}
      />
    );
  }