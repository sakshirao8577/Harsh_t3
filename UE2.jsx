    import { useEffect,useState } from "react";
    export default function UE2(){
    const [date,setdate]=useState(new Date())
    useEffect(()=>{setInterval(()=>{setdate(new Date())},1000)},[])
    return(
        <>
        <h1>{date.toLocaleTimeString()}</h1>
        <h2>Hours:{date.getHours()} Minutes:{date.getMinutes()} Seconds:{date.getSeconds()}</h2>
        </>
    )
    }
  //  npm config set Proxy http://192.168.10.251:808