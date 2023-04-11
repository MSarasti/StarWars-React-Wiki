import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'

function PeopleComponent({people, handleDetails}) {
	const idRegex = /([\d]+)/g;
	return (
	<TableRow>
		<TableCell>{idRegex.exec(people.url)[0]}</TableCell>
		<TableCell>{people.name}</TableCell>
		<TableCell>{people.gender}</TableCell>
		<TableCell>{people.height}</TableCell>
		<TableCell>
			<Button onClick={()=> handleDetails(people) } variant="contained" color="info">Ver detalle</Button>  
		</TableCell>
	</TableRow>
)
}

export default PeopleComponent