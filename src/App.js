import React, {useState, useEffect} from 'react';
import Form from './Componenets/Form/index'
import ImagesList from './Componenets/ImagesList/index'


function App() {

  //app's state

  const [search, saveSearch] = useState('')
  const [images, saveImages] = useState([])
  const [actualPage, saveActualPage] = useState(1)
  const [totalPages, saveTotalPages] = useState(1)

  useEffect(() => {

    const callApi = async () => {

      if (search === '') return

      const imagesPerPage = 30
      const key = '18608981-cf112ac1e1811678f20cd9443'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page${imagesPerPage}&page=${actualPage}`

      const response = await fetch(url)
      const result = await response.json()

      saveImages(result.hits)

      //get total pages

      const getTotalPages = Math.ceil(result.totalHits/imagesPerPage)
      saveTotalPages(getTotalPages)
      
      //moving above

      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth' })
      
    }

    callApi()

  }, [search, actualPage])
  
  const previousPage = () => {

    const page = actualPage - 1

    if(page === 0)return
    
    saveActualPage(page)
  }

  const nextPage = () => {

    const page = actualPage + 1

    if (page > totalPages) return

    saveActualPage(page)
  }

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

        {(actualPage === 1) ? null : (
          <button
            type='button'
            className='bbtn btn-info mr-1'
            onClick = {previousPage}
          > 
              &laquo; Anterior
          </button>
        )}

         {(actualPage === totalPages) ? null : (
          <button
            type='button'
            className='bbtn btn-info mr-1'
            onClick = {nextPage}>
            Siguiente &raquo;
          </button>
        )}


        
        
      </div>
    </div>
    
   
  );
}

export default App;
