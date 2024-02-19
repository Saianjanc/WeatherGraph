import { Axis, Grid, BarSeries, XYChart } from '@visx/xychart';

interface Datum {
    x: string;
    y: number;
  }
  
  const data1: Datum[] = [
    { x: '1am', y: 0.2 },
    { x: '2am', y: 0.28 },
    { x: '3am', y: 0.33 },
    { x: '4am', y: 0.39 },
    { x: '5am', y: 0.30 },
    { x: '6am', y: 0.50 },
    { x: '7am', y: 0.60 },
    { x: '8am', y: 0.60 },
    { x: '9am', y: 0.20 },
    { x: '10am', y: 0.10 },
    { x: '11am', y: 0.50 },
    { x: '12pm', y: 0.30 },
    { x: '1pm', y: 0.40 },
    { x: '2pm', y: 0.24 },
    { x: '3pm', y: 0.18 },
    { x: '4pm', y: 0.34 },
    { x: '5pm', y: 0.44 },
    { x: '6pm', y: 0.64 },
    { x: '7pm', y: 0.22 },
    { x: '8pm', y: 0.25 },
    { x: '9pm', y: 0.33 },
    { x: '10pm', y: 0.40 },
    { x: '11pm', y: 0.50 },
    { x: '12am', y: 0.28 },
  ];
  
  const accessors = {
    xAccessor: (d: Datum) => d.x,
    yAccessor: (d: Datum) => d.y,
  };
  
  export default function BarChart() {
    return (
      <XYChart
        height={260}
        width={800}
        xScale={{ type: 'band', paddingInner: 0.6, paddingOuter: 0.1 }}
        yScale={{ type: 'linear', nice: true }}
      >
        <Grid columns={false} numTicks={4} />
        <BarSeries dataKey="Line 1" data={data1} {...accessors} />
        <Axis orientation="bottom" hideTicks />
        <Axis
          orientation="right"
          hideAxisLine
          numTicks={4}
          tickFormat={(value) => value*100+'°C'}
        />
      </XYChart>
    );
  }