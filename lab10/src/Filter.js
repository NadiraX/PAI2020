  
import React from "react"

function Filter(parent)
{
    return(
        <div className="filtr">
            <p>
            <input type="checkbox"
            checked={parent.filtr.done}
            onChange={()=>parent.addFilter()} />
            Schowaj wykonane
            </p>
        </div>
    )
}
export default Filter