import { Button, Input, Space, Progress } from "antd";
import { red, green, yellow, blue, purple } from "@ant-design/colors";
import "./Metric.css";
import { useRef } from "react";
import { useState } from "react";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Metric = () => {

  // const [height, setHeight] = useState("")
  // const [inch, setInch] = useState("")
  // const [weight, setWeight] = useState("")

  const [result, setResult] = useState("");
  const [deg, setDeg] = useState("");

  const heightCmInputRef = useRef(null);
  const weightKgInputRef = useRef(null);

  const calculateBmiHandler = () => {
    let heightCmInput = heightCmInputRef.current.input.value;
    let weightKgInput = weightKgInputRef.current.input.value;
    console.log(heightCmInput);
    console.log(weightKgInput);

    if (heightCmInput && weightKgInput) {

      let bmi = (weightKgInput / ((heightCmInput * 0.01) * (heightCmInput * 0.01))).toFixed(2);
  
      if (bmi < 18.5) {
        setDeg("UnderWeight");
      } else if ( bmi >= 18.5 && bmi <= 24.9) {
        setDeg("Normal");
      } else if ( bmi >= 25 && bmi <= 29.9) {
        setDeg("OverWeight");
      } else if ( bmi >= 30 && bmi <= 34.9) {
        setDeg("Obese");
      } else if (bmi >= 35 ) {
        setDeg("Extremly Obese");
      }
  
      console.log("Your BMI is: " + bmi);
      setResult("Your BMI is: " + bmi)
    } else {
      console.log("Please enter both weight and height.");
      setResult("Please enter both weight and height.");
    }
  }
  

  return (

    <div className="Metric">
      <form>
        <Space direction="vertical" className="metric-first-child">
          <div>
            <label htmlFor="cm" style={{ marginBottom: "10px" }}>
              Inches
            </label>
            <br />
            <br />
            <Search
              ref={heightCmInputRef}
              id="cm"
              placeholder="Enter height in cm"
              allowClear
              enterButton="cm"
              size="large"
              onSearch={onSearch}
              type="number"
              required
            />
          </div>
        </Space>

        <Space direction="vertical" className="metric-second-child">
          <div>
            <label htmlFor="weight">Weight</label>
            <br />
            <br />
            <Search
              ref={weightKgInputRef}
              id="Weight"
              placeholder="Enter weight in kg"
              allowClear
              enterButton="kg"
              size="large"
              onSearch={onSearch}
              type="number"
              required
            />
          </div>
        </Space>
        <br />
        <br />
        <div style={{ padding: "10px" }}>
          <Button className="bmiBbtn" onClick={calculateBmiHandler} type="primary">
            Calculate BMI
          </Button>
        </div>

        <div id="result">
          <p>{result}</p>
        </div>

        <div id="deg">
          <p>{deg}</p>
        </div>
        <br />

        <div id="progress">
          <div style={{textAlign:"center"}}>
            <Progress
              percent={60}
              steps={5}
              strokeColor={[green[6], green[6], red[5], blue[4]]}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Metric;
