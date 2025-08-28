import './Operations.css'
import { useContext } from "react"
import { Context } from "../Context/Context"

import { Sells } from '../Sells/Sells'
import { Income } from '../Income/Income'
import { Query } from '../Query/Query'

export function Operations(){
    const {state} = useContext(Context)
    const View = {
        Venta: <Sells/>,
        Ingreso: <Income/>,
        Consulta: <Query/>
    }

    return(
        <div id="operations">
            <h3>{state}</h3>
            {View[state]}
            <div id='resp'>
                <p>response: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, tempora cupiditate. Consectetur quae facilis asperiores veritatis sunt tempore, laboriosam quaerat inventore? Quam suscipit dolorum nesciunt assumenda voluptas reprehenderit aut vitae!</p>
            </div>
        </div>
    )
}