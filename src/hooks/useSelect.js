import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '0.5rem auto',
    width: '80%',
  },
}))

const useSelect = (stateIncial, opciones) => {
  // State del custom hook
  const [state, actualizarState] = useState(stateIncial)

  const classes = useStyles()

  const SelectNoticias = () => (
    <FormControl className={classes.formControl}>
      <InputLabel>Seleccione una categoría</InputLabel>
      <Select value={state} onChange={(e) => actualizarState(e.target.value)}>
        {opciones.map((opcion) => (
          <MenuItem key={opcion.value} value={opcion.value}>
            {opcion.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  return [state, SelectNoticias]
}

export default useSelect
