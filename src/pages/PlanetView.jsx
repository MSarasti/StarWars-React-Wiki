import React, { useEffect, useState } from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead } from '@mui/material'
import PlanetComponent from '../components/PlanetComponent'
import  axios from '../config/axios'

function Planet() {
	const idRegex = /([\d]+)/g;
	const [planetList, setPlanetList] = useState([])

	const renderPlanet = () => {
		//console.log(planetList)
		return  planetList.map( (planet)=> (
			<PlanetComponent planet={planet} key={planet.url} handleDetails={handleDetails}/>
		) )
	}
  
	const getPlanet = () => {
		axios.get("/planets")
		.then((response) => {
			setPlanetList(response.data.results)
		})
	}

	const handleDetails = () => {
		
	}

	useEffect(() => { getPlanet() }, [])

	return (
		<div>
			<TableContainer>
			<Table sx={{minWidth: 650}} >
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Population</TableCell>
						<TableCell>Gravity</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{renderPlanet()}
				</TableBody>
			</Table>
			</TableContainer>
		</div>
	)
}

export default Planet
