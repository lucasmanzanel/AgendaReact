import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const FormularioAdd = ({dispatch}) => {

    const [data,setData] = useState({nombre: '',numero: ''})

    const {nombre,numero} = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: 'add',
        payload: {
            id: uuid(),
            nombre,
            numero,
        },
    }

    const handleAdd = () => {
        dispatch(actionAdd)
           
    }

    return (
        <>    
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-3'>
                    <input
                        onChange={handleChange}
                        name='nombre'
                        value={nombre} 
                        type="text" 
                        className='form-control'
                        autoComplete='off'
                        placeholder='Ingrese nombre'
                    />
                </div>

                <div className='col-3'>
                    <input
                        onChange={handleChange} 
                        name='numero'
                        value={numero}
                        type="text" 
                        className='form-control'
                        autoComplete='off'
                        placeholder='Ingrese numero'
                    />
                </div>
            </div>

            <div className='d-grid gap-2 d-md-block'>
                <button 
                    onClick={handleAdd} 
                    className='btn btn-primary btn-sm mt-2'>
                        Agregar
                </button>
            </div>

        </div>
        </>
    )
}

export default FormularioAdd
