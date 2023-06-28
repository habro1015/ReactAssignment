const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  export default function Poem() {
    let output = [];
    // 출력할 배열
    //빈 output에 push하면서 만들음
    poem.lines.forEach((line, i) => {
      output.push(
        <hr key={i + '-separator'} />
      );
      output.push(
        <p key={i + '-text'}>
          {line}
        </p>
      );
    });
//shift=첫 메소드 제거(왜???왜?????)
    output.shift();
    return (
      <article>
        {output}
      </article>
    );
  }
  