import {useState} from 'react'
function  US3(){
    const [text, settext]=useState("L J University")
    const [c,setc]=useState("red")
    const [hsl,sethsl]=useState("Hide")
    const [hsltext,sethsltext]=useState("React JS")
    function handletext(){
        if(text==="L J University"){
            settext("Welcome  Students")
        }
        else{
            settext("L J University")
        }
    }
    function handlecolor(){
        if(c==="red"){
            setc("blue")
        }
        else{
            setc("red")
        }
    }
     const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        margin: '5px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold'
    };

    function handlehs(){
       if(hsl==="Hide"){
        sethsl("show")
        sethsltext(" ")
       }
       else{
            sethsl("Hide")
            sethsltext("React JS")
       }
    }
    return(
        <>
        <button onClick={handletext}>Change Text</button>
        <button onDoubleClick={handlecolor} style={buttonStyle}>Change Color</button>
        <button onClick={handlehs}>{hsl}</button>
        <h1 style={{color:c}}>{text}</h1>
        <h2>{hsltext}</h2>
        </>
    )
}
export default US3