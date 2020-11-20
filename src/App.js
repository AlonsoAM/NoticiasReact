import Container from '@material-ui/core/Container'
import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import axios from 'axios'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  // Definir la categoría y noticias
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const key = '310500c4437e4dbab219b024e6af765f'
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`

    const consultarAPI = async () => {
      try {
        const noticias = await axios.get(url)
        setNoticias(noticias.data.articles)
      } catch (error) {
        console.log(error)
      }
    }

    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <Container maxWidth="md">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </Container>
    </>
  )
}

export default App
