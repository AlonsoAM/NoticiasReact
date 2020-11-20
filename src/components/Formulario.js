import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import useSelect from '../hooks/useSelect'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    margin: '2rem auto',
    padding: '1rem',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
  button: {
    margin: '0.5rem auto',
    width: '100%',
  },
}))

const Formulario = ({ setCategoria }) => {
  const classes = useStyles()

  // Crear las OPCIONES de categorias
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Enretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deporte' },
    { value: 'technology', label: 'Tecnología' },
  ]

  // Utilizar custom hooks

  const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

  // submit al form, pasar categoría a app.js
  const buscarNoticias = (e) => {
    e.preventDefault()
    setCategoria(categoria)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={buscarNoticias}>
            <Typography variant="h2" className={classes.title}>
              Encuentra Noticias por cartegoría
            </Typography>
            <SelectNoticias />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              Buscar
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Formulario
