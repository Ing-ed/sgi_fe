import { useContext } from "react"
import { Context } from "../Context/Context";
export function Menu(){
    const {setState} = useContext(Context)
    function EventHandler(e){
        console.log(e.target.textContent);
        setState(e.target.textContent);
    }
    return(
        <div className="menu">
            <p onClick={EventHandler} name = "Ingreso">Ingreso</p>
            <p onClick={EventHandler} name = "Venta">Venta</p>
            <p onClick={EventHandler} name = "Consulta">Consulta</p>
            <p>Opcion</p>
            <p>Opcion</p>
        </div>
    )
}