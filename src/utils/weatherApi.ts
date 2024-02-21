export async function getData(city:string){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3045dd712ffe6e702e3245525ac7fa38`
    const cityData = await fetch(url).then(data=>{return data})
    const weather = await cityData.json();
    return (weather.list);
}   