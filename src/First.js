//1번//
function First() {
  return (
    <h1>First question</h1>
  );
 }

 function Firstquestion() {
  return (
    <First/>
  );
}
export default Firstquestion;
//1-1~1-4 통합. return 뒤에 복수의 요소들이 올 때는 반드시 ()로 묶기 or return과 같은 줄로 이동
//export default는 1번만 사용 가능한듯. 
//따로 .js파일을 독립시켜서 컴포넌트 추가하면 세부적으로 구성 가능할듯)
//+추가. 각 문제(총8개)마다 그냥 따로 js파일을 만들고자 함-제출을 위해