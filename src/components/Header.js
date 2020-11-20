import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}))

const Header = ({ titulo }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            {titulo}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
}

export default Header
