import React, { FunctionComponent } from 'react';
import { CartesianGrid, LabelList, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Line.css';

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, data, index } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {data[index].uv}
    </text>
  );
};

const LineChartExample: React.FC = () => {
  const data = [
    { name: "Page A", uv: 4000, uvDisplay: 40 },
    { name: "Page B", uv: 32, uvDisplay: 32},
    { name: "Page C", uv: 20, uvDisplay: 20 },
    { name: "Page D", uv: 35, uvDisplay: 35 },
    { name: "Page E", uv: 18, uvDisplay: 18 },
    { name: "Page F", uv: 23, uvDisplay: 23 },
    { name: "Page G", uv: 34, uvDisplay: 34 }
  ];

  const tickHeight = 50;

  const renderCustomYAxisTick = ({x, y, payload}: any) => {
    console.log(`x: ${x}, y: ${y}, payload: ${payload}`)
    let value;
    if (payload.value === 0) {
      value = 'write<= 10';
    } else if (payload.value === 30) {
      value = 'write>= 30';
    } else {
      value = `${payload.value}-${payload.value + 10}`;
    }
    return (
      <text x={x-80} y={y - tickHeight / 4}>{value}</text>
    );
  };

  const renderCustomXAxisTick = ({x, y, payload}: any) => {
    if (payload.value === 'Page D') {
      return (
        <svg id="chart" width="300" height="225" x={x} y={y}>
          <path d="M275,200 v-150" fill="yellow" stroke="blue" stroke-width="3" />
        </svg>
      );
    }
    return (
      <text x={x-20} y={y+15}>{payload.value}</text>
    );
  };

  const customTooltip = ({payload, label, active}: any) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].payload.uv}`}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LineChart
        width={1000}
        height={tickHeight * 4}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} tick={renderCustomXAxisTick} />
        <YAxis tick={renderCustomYAxisTick} width={300}/>
        <Tooltip content={customTooltip} />
        <Line
          connectNulls
          type="monotone"
          dataKey="uvDisplay"
          stroke="#8884d8"
          fill="#8884d8"
        >
          <LabelList content={<CustomizedLabel data={data}/>} />
        </Line>
      </LineChart>
  );
};

export default LineChartExample;