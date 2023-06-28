//props 전달은 아직도 이해를 다 못했다
//spread,rest는 얼추 이해했지만 과제 문제를 하나도 완성 못함..
function Card({ children }) {
    return (
      <div className="card">
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  }
//Card 에 chilren props 사용. 얘는 밑의 애들을 받아서 보여줄거임-밑에 Card 태그 애들을 보여줌(2번)-코드 쉽게 재사용 가능
  export default function Profile() {
    return (
      <div>
        <Card>
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
          />
        </Card>
        <Card>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </Card>
      </div>);}
//위에서 만든 틀에 밑의 세부내용이 children으로 들어감
//부모는 물려주기만 하는듯. 자식은 받기만 함
//쉽게쉽게 재사용을 위해 사용하는듯