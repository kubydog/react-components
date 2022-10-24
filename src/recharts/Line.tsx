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

interface Data {
  name: string;
  uv: string;
  uvDisplay?: number;
}

const LineChartExample: React.FC = () => {
  const data: Data[] = [
    { name: "01:00", uv: 'cool'},
    { name: "02:00", uv: 'warm'},
    { name: "03:00", uv: 'cool'},
    { name: "04:00", uv: 'hot'},
    { name: "05:00", uv: 'hot'},
    { name: "06:00", uv: 'warm'},
    { name: "07:00", uv: 'cool'}
  ];

  const renderData = data.map((record) => {
    if (record.uv === 'cool') {
      record.uvDisplay = 0.5;
    } else if (record.uv === 'warm') {
      record.uvDisplay = 1.5;
    } else if (record.uv === 'hot') {
      record.uvDisplay = 2.5;
    }
    return record;
  })

  const tickHeight = 50;

  const renderCustomYAxisTick = ({x, y, payload}: any) => {
    console.log(`x: ${x}, y: ${y}, payload: ${payload}`)
    let value;
    if (payload.value === 0) {
      value = 'cool';
    } else if (payload.value === 1) {
      value = 'warm';
    } else if (payload.value === 2){
      value = 'hot';
    }
    return (
      <text x={x-80} y={y - tickHeight / 4}>{value}</text>
    );
  };

  // const renderCustomXAxisTick = ({x, y, payload}: any) => {
  //   if (payload.value === 'Page D') {
  //     return (
  //       <svg id="chart" width="300" height="225" x={x} y={y}>
  //         <path d="M275,200 v-150" fill="yellow" stroke="blue" stroke-width="3" />
  //       </svg>
  //     );
  //   }
  //   return (
  //     <text x={x-20} y={y+15}>{payload.value}</text>
  //   );
  // };

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
        height={tickHeight * 3}
        data={renderData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis width={300} domain={[0, 3]} tickCount={4} tick={renderCustomYAxisTick}/>
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
