import './Menu.css'
import { useContext } from "react"
import { Context } from "../Context/Context";
export function Menu(){
    const {setState} = useContext(Context)
    function EventHandler(e){
        setState(e.target.textContent);
    }
    return(
        <div id="menu">
            <ul>
                <li><p onClick={EventHandler} name = "Ingreso">Ingreso</p></li>
                <li><p onClick={EventHandler} name = "Venta">Venta</p></li>
                <li><p onClick={EventHandler} name = "Consulta">Consulta</p></li>
                <li><p>Opcion</p></li>
            </ul>
        </div>
    )
}