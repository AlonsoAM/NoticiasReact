import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Noticia from './Noticia'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const ListadoNoticias = ({ noticias }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {noticias.map((noticia) => (
            <Grid item lg={4} md={6} xs={12}>
              <Noticia key={noticia.url} noticia={noticia} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
}

export default ListadoNoticias
