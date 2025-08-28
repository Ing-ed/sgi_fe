import { FormField } from "../FormField/FormField"
export function Sells(){
    return(
        <div id="sells" className="operation">
            <FormField type ="text" text="Producto" name="product"/>
            <button>Venta</button>
        </div>
    )
}