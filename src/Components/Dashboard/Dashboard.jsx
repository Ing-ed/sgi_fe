import { Menu } from "../Menu/Menu";
import { Operations } from "../Operations/Operations";

export function Dashboard(){
    return(
        <div className="dashboard">
            <Menu/>
            <Operations />
        </div>
    )
}