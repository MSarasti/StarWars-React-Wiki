import React, { useEffect, useState } from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead } from '@mui/material'
import ShipComponent from '../components/ShipComponent'
import  axios from '../config/axios'

function Ship() {
	const idRegex = /([\d]+)/g;
	const [shipList, setShipList] = useState([])

	const renderShip = () => {
		//console.log(shipList)
		return  shipList.map( (ship)=> (
			<ShipComponent ship={ship} key={idRegex.exec(ship.url)} handleDetails={handleDetails}/>
		) )
	}
  
	const getShip = () => {
		axios.get("/ship")
		.then((response) => {
			setShipList(response.data)
		})
	}

	const handleDetails = () => {
		
	}

	useEffect(() => { getShip() }, [])

	return (
		<div>
			<TableContainer>
			<Table sx={{minWidth: 650}} >
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Height</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{renderShip()}
				</TableBody>
			</Table>
			</TableContainer>
		</div>
	)
}

export default Ship
