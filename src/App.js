import React, { useState } from "react";
import { Radio } from "antd";
import Metric from "./components/metric/Metric";
import "./App.css";
import Imperial from "./components/imperial/Imperial";



const plainOptions = ["Metric", "Imperial"];
const options = [
  {
    label: "Metric",
    value: "Metric",
  },
  {
    label: "Imperial",
    value: "Imperial",
  },
];

// const optionsWithDisabled = [
//   {
//     label: "Metric",
//     value: "Metric",
//   },
//   {
//     label: "Imperial",
//     value: "Imperial",
//   },
// ];

const App = () => {

  const [value1, setValue1] = useState("Metric");

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  return (
    <div className="App">
      <div>
        <div style={{textAlign:"center"}}>
          <Radio.Group options={options} onChange={onChange1} value={value1} optionType="button"/>
        </div>
        <br />
        <br />
        <div>
          {value1==="Metric" ? <Metric/> : <Imperial/> }
        </div>
      </div>
    </div>
  );
};

export default App;
