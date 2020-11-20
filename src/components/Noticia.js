import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Noticia = ({ noticia }) => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={noticia.urlToImage}
            title={noticia.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {noticia.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary" variant="outline">
              <Typography className={classes.root}>
                <Link
                  href={noticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver noticia Completa
                </Link>
              </Typography>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}

Noticia.propTypes = {}

export default Noticia
