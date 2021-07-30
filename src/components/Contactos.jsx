import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import FormularioAdd from './FormularioAdd'
import TablaContactos from './TablaContactos'


// Leer localstorage
const init = () => {
    const infoContactos = localStorage.getItem('contactos')
 
    return infoContactos ? JSON.parse(infoContactos) : [];
};


const Contactos = () => {
    const [state, dispatch] = useReducer(ContactosReducer, [], init);

    useEffect(() => {
        localStorage.setItem('contactos',JSON.stringify(state))
    }, [state])


    const [formView, setFormView] = useState(false);



    return (
        <div className='container mt-3'>

            <button 
            onClick={() => setFormView(!formView)}
            className='btn btn-sm btn-success'>
                {!formView ? '+ Agregar contacto':'- Cerrar formulario'}
            </button>
            {
                formView && <FormularioAdd dispatch={dispatch} />
            }
            <TablaContactos contactos={state} dispatch={dispatch}/>
        </div>
    )
}

export default Contactos
