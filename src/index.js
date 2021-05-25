import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// 別ファイル（App.js）から引っ張ってきた変数を使う
ReactDom.render(<App />, document.querySelector("#root"));
