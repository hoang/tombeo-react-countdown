import React from 'react';
import { render } from "react-dom";
import { TombeoReactCountdown } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TombeoReactCountdown completeAt={Date.now() + 14*24*60*60*1000}
                          dayLabel='Ngày'
                          dayLabelPlural='Ngày' />
  </div>
);

render(<App />, document.getElementById("root"));
