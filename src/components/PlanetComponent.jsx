import React from 'react'
import { TableRow, TableCell, Button, Popper, Box, List, ListItem } from '@mui/material'
import { styled } from '@mui/system'

function PlanetComponent({planet, handleEdit, handleDetails}) {
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
        <TableCell>{idRegex.exec(planet.url)[0]}</TableCell>
        <TableCell>{planet.name}</TableCell>
        <TableCell>{planet.population}</TableCell>
        <TableCell>{planet.gravity}</TableCell>
        <TableCell>
		<Button aria-describedby={id} onClick={handleClick} variant="contained" color="info">Ver detalle</Button>
			<Popper id={id} open={open} anchorEl={anchorEl} >
				<StyledPopperDiv> 
					<Box sx={{ border: 1, p: 1}}>
						<List>
							<ListItem disablePadding>
								Name = {planet.name}
							</ListItem>
							<ListItem disablePadding>
								Diameter = {planet.diameter}
							</ListItem>
							<ListItem disablePadding>
								Rotation Period = {planet.rotation_period}
							</ListItem>
							<ListItem disablePadding>
								Orbital Period = {planet.orbital_period}
							</ListItem>
							<ListItem disablePadding>
								Gravity = {planet.gravity}
							</ListItem>
							<ListItem disablePadding>
								Climate = {planet.climate}
							</ListItem>
							<ListItem disablePadding>
								Population = {planet.population}
							</ListItem>
							<ListItem disablePadding>
								Terrain = {planet.terrain}
							</ListItem>
							<ListItem disablePadding>
								Surface water = {planet.surface_water}
							</ListItem>
						</List>
					</Box>
				</StyledPopperDiv>
			</Popper> 
        </TableCell>
    </TableRow>
  )
}

export default PlanetComponent