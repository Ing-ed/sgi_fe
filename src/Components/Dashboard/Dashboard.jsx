import './Dashboard.css'
import { Menu } from "../Menu/Menu";
import { Operations } from "../Operaciones/Operations";

export function Dashboard(){
    return(
        <div id="dashboard">
            <Menu/>
            <Operations />
        </div>
    )
}