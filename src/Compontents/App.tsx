import { useEffect, useState } from "react";
import BarChart from "./BarChart"
import { getData } from "../utils/weatherApi";

function App(){
  const [todayData,setTodayData] = useState<any>()
  async function data(){const data = await getData("bangalore");data.map((ele:any)=>{ele.dt_txt=ele.dt_txt[12]+ele.dt_txt[13]+ele.dt_txt[14]+ele.dt_txt[15];ele.main.temp=ele.main.temp-273.15});setTodayData(data)}
  useEffect(()=>{data()},[])
  
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