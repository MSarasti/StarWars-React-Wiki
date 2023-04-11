import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'

function PlanetComponent({planet, handleEdit, handleDetails}) {
     return (
    <TableRow>
        <TableCell>{planet.name}</TableCell>
        <TableCell>{planet.population}</TableCell>
        <TableCell>{planet.gravity}</TableCell>
        <TableCell>
            <Button onClick={()=> handleDetails(Planet) } variant="contained" color="info">Ver detalle</Button>  
        </TableCell>
    </TableRow>
  )
}

export default PlanetComponent