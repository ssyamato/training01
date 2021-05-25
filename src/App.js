import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// 変数名はパスカルケースとする（先頭大文字＆単語大文字区切り）
const App = () => {
  // JSエリア
  const onClickButton = () => {
    alert("テスト");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "38px" // キャメルケースではなくパスカルケースとする
  };
  // HTML生成エリア
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="はい、元気です💕" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
// このファイルとして、この処理を他でも仕えるようにスル
export default App;
