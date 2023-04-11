import React from 'react'
import { TableRow, TableCell, Button, Popper, Box, List, ListItem } from '@mui/material'
import { styled } from '@mui/system'

function ShipComponent({starship, handleEdit, handleDetails}) {
	const idRegex = /([\d]+)/g;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
  	const id = open ? 'simple-popper' : undefined;

	const StyledPopperDiv = styled('div')(
		({ theme }) => `
		padding: 0.5rem;
		border: 1px solid;
		background-color: ${theme.palette.mode === 'dark' ? '#121212' : '#fff'};
		opacity: 1;
		margin: 0.25rem 0px;
	`,
	);

    return (
    <TableRow>
        <TableCell>{idRegex.exec(starship.url)[0]}</TableCell>
        <TableCell>{starship.name}</TableCell>
        <TableCell>{starship.model}</TableCell>
        <TableCell>{starship.starship_class}</TableCell>
        <TableCell>
            <Button onClick={()=> handleEdit(starship) } variant="contained" color="info">Editar</Button>&nbsp;&nbsp;   
            <Button aria-describedby={id} onClick={handleClick} variant="contained" color="info">Ver detalle</Button>
			<Popper id={id} open={open} anchorEl={anchorEl} >
				<StyledPopperDiv> 
					<Box sx={{ border: 1, p: 1}}>
						<List>
							<ListItem disablePadding>
								Name = {starship.name}
							</ListItem>
							<ListItem disablePadding>
								Model = {starship.model}
							</ListItem>
							<ListItem disablePadding>
								Starship class = {starship.starship_class}
							</ListItem>
							<ListItem disablePadding>
								Manufacturer = {starship.manufacturer}
							</ListItem>
							<ListItem disablePadding>
								Cost = {starship.cost_in_credits}
							</ListItem>
							<ListItem disablePadding>
								Length = {starship.length}
							</ListItem>
							<ListItem disablePadding>
								Crew = {starship.crew}
							</ListItem>
							<ListItem disablePadding>
								passengers = {starship.passengers}
							</ListItem>
							<ListItem disablePadding>
								Max atmosphering speed = {starship.max_atmosphering_speed}
							</ListItem>
							<ListItem disablePadding>
								Hyperdrive rating = {starship.hyperdrive_rating} 
							</ListItem>
							<ListItem disablePadding>
								MGLT = {starship.MGLT}
							</ListItem>
							<ListItem disablePadding>
								Cargo capacity = {starship.cargo_capacity}
							</ListItem>
							<ListItem disablePadding>
								Consumables = {starship.consumables}
							</ListItem>
							<ListItem disablePadding>
								Pilots = {starship.pilots}
							</ListItem>
						</List>
					</Box>
				</StyledPopperDiv>
			</Popper> 
        </TableCell>
    </TableRow>
  )
}

export default ShipComponent