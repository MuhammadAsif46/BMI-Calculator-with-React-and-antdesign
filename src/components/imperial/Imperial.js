import { Button, Input, Space, Progress } from "antd";
import { red, green, yellow, blue, purple } from "@ant-design/colors";
import "./Imperial.css";
import { useRef } from "react";
import { useState } from "react";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Imperial = () => {

  // const [height, setHeight] = useState("")
  // const [inch, setInch] = useState("")
  // const [weight, setWeight] = useState("")

  const [result, setResult] = useState("")
  const [deg, setDeg] = useState("");

  const heightFtInputRef = useRef(null);
  const inchInputRef = useRef(null);
  const weightPoundInputRef = useRef(null);

  const calculateBmiImperialHandler = () => {
    let heightFtInput = heightFtInputRef.current.input.value;
    let incheInput = inchInputRef.current.input.value;
    let weightPoundInput = weightPoundInputRef.current.input.value;
    console.log(heightFtInput);
    console.log(incheInput);
    console.log(weightPoundInput);

    if (heightFtInput && incheInput && weightPoundInput) {

      let bmi = ((weightPoundInput * 0.454) / ((( heightFtInput * 12 ) + inchInputRef ) * (( heightFtInput * 12 ) + inchInputRef ))) * 703;
      console.log(bmi);
  
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

    <div className="Imperial">
      <form>
        <Space direction="vertical" className="imperial-first-child">
          <div>
            <label htmlFor="height">Height</label>
            <br />
            <br />
            <Search
              ref={heightFtInputRef}
              id="height"
              placeholder="Enter height in feet"
              allowClear
              enterButton="ft"
              size="large"
              onSearch={onSearch}
              type="number"
              required
            />
          </div>

          <div>
            <label htmlFor="inches" style={{ marginBottom: "10px" }}>
              Inches
            </label>
            <br />
            <br />
            <Search
              ref={inchInputRef}
              id="inches"
              placeholder="Enter height in inches"
              allowClear
              enterButton="in"
              size="large"
              onSearch={onSearch}
              type="number"
              required
            />
          </div>
        </Space>

        <Space direction="vertical" className="imperial-second-child">
          <div>
            <label htmlFor="weight">Weight</label>
            <br />
            <br />
            <Search
              ref={weightPoundInputRef}
              id="Weight"
              placeholder="Enter weight in pound"
              allowClear
              enterButton="pound"
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
          <Button className="bmiBbtn" onClick={calculateBmiImperialHandler} type="primary">
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

export default Imperial;
