import React from "react";
function Increament({count,increament}){
    return(
        <div>
             <h2>Count: {count}</h2>
            <button onClick={increament}>increament</button>
        </div>
    )
}
export default Increament;