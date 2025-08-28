import { FormField } from "../FormField/FormField"
export function Income(){
    return(
        <div id="income" className="operation">
            <FormField text ="Producto" type="text" name="product"/>
            <FormField text ="Cantidad" type="number" name="cant" />
            <button>Ingresar</button>
        </div>
    )
}