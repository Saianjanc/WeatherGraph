import { useEffect, useState } from "react";
import BarChart from "./BarChart"
import { getData } from "../utils/weatherApi";

function App(){
  const [getStats,setGetStats] = useState<any>([])
  const [today,setToday] = useState<any>()
  async function data(){const data = await getData("bangalore");data.map((ele:any)=>{ele.dt_txt=ele.dt_txt.slice(8,16);ele.main.temp=ele.main.temp-273.15});setGetStats(data)}
  useEffect(()=>{data()},[])
  useEffect(()=>{setToday(getStats.slice(0,8))},[getStats])
  return (
    <div className="flex flex-col items-center">
    {today?<>
    <span className="text-4xl absolute left-2 top-2">City</span>
    <div><span className="text-2xl relative left-[-80px] top-40">Today</span>
    <BarChart data1={today}/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Week</span>
    <BarChart data1={getStats}/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Month</span>
    <BarChart data1={getStats}/></div>
    </>
    :<></>}
    </div> 
  )
}
export default App