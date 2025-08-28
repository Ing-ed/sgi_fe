import { useContext } from "react"
import { Context } from "../Context/Context"
export function Operations(){
    const {state} = useContext(Context)
    return(
        <div className="operations">
            <p>{state}</p>
        </div>
    )
}