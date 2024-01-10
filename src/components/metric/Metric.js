import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Input, Space, Progress } from "antd";
import { red, green, yellow, blue, purple } from "@ant-design/colors";
import "./Metric.css";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Metric = () => {
  return (

    <div className="Metric">
      <form>
        <Space direction="vertical" className="metric-first-child">
          <div>
            <label htmlFor="height">Height</label>
            <br />
            <br />
            <Search
              id="height"
              placeholder="Enter height in feet"
              allowClear
              enterButton="ft"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <div>
            <label htmlFor="inches" style={{ marginBottom: "10px" }}>
              Inches
            </label>
            <br />
            <br />
            <Search
              id="inches"
              placeholder="Enter height in inches"
              allowClear
              enterButton="in"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </Space>

        <Space direction="vertical" className="metric-second-child">
          <div>
            <label htmlFor="weight">Weight</label>
            <br />
            <br />
            <Search
              id="Weight"
              placeholder="Enter weight in kg"
              allowClear
              enterButton="kg"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </Space>
        <br />
        <br />
        <div style={{ padding: "10px" }}>
          <Button className="bmiBbtn" type="primary">
            Calculate BMI
          </Button>
        </div>
        <div id="result">
          <p>your BMI is 12.34</p>
        </div>
        <br />
        <div id="result">
          <p>Undefined</p>
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
