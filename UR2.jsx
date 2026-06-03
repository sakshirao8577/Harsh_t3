import { useReducer } from "react";
function reducer(state,action){
    if(action.type==="add"){return state+5}
    if(action.type==="sub"){return state-5}

}
function UR2(){
    const [state,dispatch]=useReducer(reducer,50)
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"add"})}>Add</button>
            <button onClick={()=>dispatch({type:"sub"})}>Sub</button>

        </div>
    )
} 
export default UR2