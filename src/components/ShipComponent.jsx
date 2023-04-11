import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'

function ShipComponent({starship, handleEdit, handleDetails}) {
     return (
    <TableRow>
        <TableCell>{starship.name}</TableCell>
        <TableCell>{starship.model}</TableCell>
        <TableCell>{starship.starship_class}</TableCell>
        <TableCell>
            <Button onClick={()=> handleEdit(starship) } variant="contained" color="info">Editar</Button>&nbsp;&nbsp;   
            <Button onClick={()=> handleDetails(starship) } variant="contained" color="info">Ver detalle</Button>  
        </TableCell>
    </TableRow>
  )
}

export default ShipComponent