import React, {useState, useEffect} from 'react';
import Form from './Componenets/Form/index'
import ImagesList from './Componenets/ImagesList/index'


function App() {

  //app's state

  const [search, saveSearch] = useState('')
  const [images, saveImages] = useState([])

  useEffect(() => {

    const callApi = async () => {

      if (search === '') return

      const imagesPerPage = 30
      const key = '18608981-cf112ac1e1811678f20cd9443'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page${imagesPerPage}`

      const response = await fetch(url)
      const result = await response.json()

      saveImages(result.hits)
    }

    callApi()

  },[search])

  return (
  
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imágenes</p>
        <Form
          saveSearch={saveSearch}
        />
      </div>
      <div className='row justify-content-center'>
        <ImagesList
          images={images}
        />
      </div>
    </div>
    
   
  );
}

export default App;
