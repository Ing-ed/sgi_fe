import { FormField } from "../FormField/FormField"
export function Query(){
    return(
        <div id="query" className="operation">
            <FormField text="Producto" type="text" name="product"/>
            <button>Consultar</button>
        </div>
    )
}