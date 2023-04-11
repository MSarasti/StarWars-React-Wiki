import React, { useEffect, useState } from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead, TablePagination } from '@mui/material'
import PeopleComponent from '../components/PeopleComponent'
import  axios from '../config/axios'

function People() {
	const idRegex = /([\d]+)/g;
	const [peopleList, setPeopleList] = useState([])

	const renderPeople = () => {
		//console.log(peopleList)
		return  peopleList.map( (people) => (
			<PeopleComponent people={people} key={people.url} handleDetails={handleDetails}/>
		) )
	}
  
	const getPeople = () => {
		axios.get("/people")
		.then((response) => {
			console.log(response.data)
			setPeopleList(response.data.results)
		})
	}

	const handleDetails = () => {
		
	}

	useEffect(() => { getPeople() }, [])

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
					{renderPeople()}
				</TableBody>
			</Table>
			</TableContainer>
		</div>
	)
}

export default People
