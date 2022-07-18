import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("Appの最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //[]の中の変数( num )が変化したときだけ useEffect関数を実行
    if (num > 0) {
      if (num % 3 === 0) {
        //falseのときに実行
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //trueのときに実行
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😛😛😛</p>}
    </>
  );
};

export default App;
