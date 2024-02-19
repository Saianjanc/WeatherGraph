import BarChart from "./BarChart"

function App(){
  return (
    <div className="flex flex-col items-center">
    <span className="text-4xl absolute left-2 top-2">City</span>
    <div><span className="text-2xl relative left-[-80px] top-40">Today</span>
    <BarChart/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Week</span>
    <BarChart/></div>
    <div><span className="text-2xl relative left-[-80px] top-40">This Month</span>
    <BarChart/></div>
    </div> 
  )
}
export default App