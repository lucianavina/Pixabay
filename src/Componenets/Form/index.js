import React, { useState } from 'react'
import Error from '../Error/index'

const Form = ({saveSearch}) => {

    const [theme, saveTheme] = useState('')
    const [error, saveError] = useState(false)
    

    const searchImages = e => {
        e.preventDefault()

        //check

        if (theme.trim() === '') {
            saveError(true)
            return
        }

        saveError(false)

        //send search to the main component
        saveSearch(theme)
    }

    return ( 
        <form
            onSubmit={searchImages}
        >
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder=' Busca una imágenn, ej.: fútbol o café'
                        onChange={ e => saveTheme(e.target.value)}
                        />
                </div>
                <div className='form-group col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                        />
                </div>
            </div>
            {error? <Error messaje='Agrega un término de búsqueda'/> : null}
        </form>
     );
}
 
export default Form;