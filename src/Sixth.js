//&&, ?:, if문 사용해 체크리스트
//{name} {importance!=0 && ' Importance:'+ (importance)}
//=={name} {importance > 0 && (Importance: {importance})}
function Drink({ name }) {
    let ing, caffeine, age;
    if (name==='tea'){
      part='leaf'
      caffeine = '15–70 mg/cup';
      age = '4,000+ years';
    }
    else if (name === 'coffee') {
      part = 'bean';
      caffeine = '80–185 mg/cup';
      age = '1,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{name}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }