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
			<ShipComponent starship={ship} key={ship.url} handleDetails={handleDetails}/>
		) )
	}
  
	const getShip = () => {
		axios.get("/starships")
		.then((response) => {
			setShipList(response.data.results)
		})
	}

	const handleDetails = (ship) => {
        console.log(ship);
        
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
						<TableCell>Model</TableCell>
						<TableCell>Class</TableCell>
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
