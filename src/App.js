import React, { useState } from "react";
import { Radio } from "antd";
import Metric from "./components/metric/Metric";
import "./App.css";

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

const optionsWithDisabled = [
  {
    label: "Metric",
    value: "Metric",
  },
  {
    label: "Imperial",
    value: "Imperial",
  },
];

const App = () => {
  const [value1, setValue1] = useState("Apple");

  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  return (
    <div className="App">
      <div>
        <div style={{textAlign:"center"}}>
          <Radio.Group
            options={options}
            onChange={onChange1}
            value={value1}
            optionType="button"
          />
        </div>
        <br />
        <br />
        <Metric />
      </div>
    </div>
  );
};

export default App;
