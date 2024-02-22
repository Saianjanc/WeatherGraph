import { useEffect, useState } from "react";
import BarChart from "./BarChart"
import { getData } from "../utils/weatherApi";

function App(){
  const [todayData,setTodayData] = useState<any>()
  async function data(){const data = await getData("london");data.map((ele:any)=>{ele.dt_txt=ele.dt_txt[12]+ele.dt_txt[13]+ele.dt_txt[14]+ele.dt_txt[15]});setTodayData(data)}
  useEffect(()=>{data()},[])
  
  // const todayData = [
  //   { x: '1am', y: 0.2 },
  //   { x: '2am', y: 0.28 },
  //   { x: '3am', y: 0.33 },
  //   { x: '4am', y: 0.39 },
  //   { x: '5am', y: 0.30 },
  //   { x: '6am', y: 0.50 },
  //   { x: '7am', y: 0.60 },
  //   { x: '8am', y: 0.60 },
  //   { x: '9am', y: 0.20 },
  //   { x: '10am', y: 0.10 },
  //   { x: '11am', y: 0.50 },
  //   { x: '12pm', y: 0.30 },
  //   { x: '1pm', y: 0.40 },
  //   { x: '2pm', y: 0.24 },
  //   { x: '3pm', y: 0.18 },
  //   { x: '4pm', y: 0.34 },
  //   { x: '5pm', y: 0.44 },
  //   { x: '6pm', y: 0.64 },
  //   { x: '7pm', y: 0.22 },
  //   { x: '8pm', y: 0.25 },
  //   { x: '9pm', y: 0.33 },
  //   { x: '10pm', y: 0.40 },
  //   { x: '11pm', y: 0.50 },
  //   { x: '12am', y: 0.28 },
  // ];
  // const weekData = [
  //   { x: 'Mon', y: 0.10 },
  //   { x: 'Tue', y: 0.28 },
  //   { x: 'Wed', y: 0.60 },
  //   { x: 'Thru', y: 0.30 },
  //   { x: 'Fri', y: 0.30 },
  //   { x: 'Sat', y: 0.50 },
  //   { x: 'Sun', y: 0.20 },
  // ];
  // const monthData = [
  //   { x: '1', y: 0.2 },
  //   { x: '2', y: 0.28 },
  //   { x: '3', y: 0.33 },
  //   { x: '4', y: 0.39 },
  //   { x: '5', y: 0.30 },
  //   { x: '6', y: 0.50 },
  //   { x: '7', y: 0.60 },
  //   { x: '8', y: 0.60 },
  //   { x: '9', y: 0.20 },
  //   { x: '10', y: 0.10 },
  //   { x: '11', y: 0.50 },
  //   { x: '12', y: 0.30 },
  //   { x: '13', y: 0.40 },
  //   { x: '14', y: 0.24 },
  //   { x: '15', y: 0.18 },
  //   { x: '16', y: 0.34 },
  //   { x: '17', y: 0.44 },
  //   { x: '18', y: 0.64 },
  //   { x: '19', y: 0.22 },
  //   { x: '20', y: 0.25 },
  //   { x: '21', y: 0.33 },
  //   { x: '22', y: 0.40 },
  //   { x: '23', y: 0.50 },
  //   { x: '24', y: 0.28 },
  //   { x: '25', y: 0.24 },
  //   { x: '26', y: 0.18 },
  //   { x: '27', y: 0.34 },
  //   { x: '28', y: 0.44 },
  //   { x: '29', y: 0.39 },
  //   { x: '30', y: 0.30 }
  // ];
  return (
    <div className="flex flex-col items-center">
    {todayData?<>
    <span className="text-4xl absolute left-2 top-2">City</span>
    <div><span className="text-2xl relative left-[-80px] top-40">Today</span>
    <BarChart data1={todayData}/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Week</span>
    <BarChart data1={todayData}/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Month</span>
    <BarChart data1={todayData}/></div>
    </>
    :<></>}
    </div> 
  )
}
export default App