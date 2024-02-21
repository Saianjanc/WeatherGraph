import { Axis, Grid, BarSeries, XYChart } from '@visx/xychart';

interface Datum {
    main: {temp: number};
    dt_txt: string;
  }
  
  const accessors = {
    xAccessor: (d: Datum) => d.dt_txt,
    yAccessor: (d: Datum) => d.main.temp,
  };
  
  export default function BarChart({data1}:{data1:Datum[]}) {
    return (
      <XYChart
        height={260}
        width={1200}
        xScale={{ type: 'band', paddingInner: 0.6, paddingOuter: 0.1 }}
        yScale={{ type: 'linear', nice: true }}
      >
        <Grid columns={false} numTicks={5} />
        <BarSeries dataKey="Line 1" data={data1} {...accessors} />
        <Axis orientation="bottom" numTicks={24}/>
        <Axis
          orientation="right"
          hideAxisLine
          numTicks={5}
          tickFormat={(value) => value +'°C'}
        />
      </XYChart>
    );
  }