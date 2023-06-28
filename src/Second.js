import SecondProfile from './SecondProfile.js';
function Second() {
    return (
      <section>
        <h1>어메이징한 리액트</h1>
        <SecondProfile/>
        <SecondProfile/>
      </section>
    );
  }
  export default Second
//멋사에서는 jsx파일을 생성했었는데 지금이랑 그거를 헷갈려서 약간 해맸음..
//지금 보니 js파일을 생성하면 export할때 방법이 약간 달라지는듯
//export default===함수, 클래스 등을 전달하는 것! 중괄호 필요없음(export와 다름)
//한 파일에서는 하나의 default export만 존재 가능/ named export는 여러개 가능, 중괄호 필요)