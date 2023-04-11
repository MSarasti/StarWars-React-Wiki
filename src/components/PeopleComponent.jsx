import React from 'react'
import { TableRow, TableCell, Button, Popper, Box, List, ListItem } from '@mui/material'
import { styled } from '@mui/system'

function PeopleComponent({people, handleDetails}) {
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
		<TableCell>{idRegex.exec(people.url)[0]}</TableCell>
		<TableCell>{people.name}</TableCell>
		<TableCell>{people.gender}</TableCell>
		<TableCell>{people.height}</TableCell>
		<TableCell>
		<Button aria-describedby={id} onClick={handleClick} variant="contained" color="info">Ver detalle</Button>
			<Popper id={id} open={open} anchorEl={anchorEl} >
				<StyledPopperDiv> 
					<Box sx={{ border: 1, p: 1}}>
						<List>
							<ListItem disablePadding>
								Name = {people.name}
							</ListItem>
							<ListItem disablePadding>
								Birth year = {people.birth_year}
							</ListItem>
							<ListItem disablePadding>
								Eye color = {people.eye_color}
							</ListItem>
							<ListItem disablePadding>
								Gender = {people.gender}
							</ListItem>
							<ListItem disablePadding>
								Hair color = {people.hair_color}
							</ListItem>
							<ListItem disablePadding>
								Height = {people.height}
							</ListItem>
							<ListItem disablePadding>
								Mass = {people.mass}
							</ListItem>
							<ListItem disablePadding>
								Skin color = {people.skin_color}
							</ListItem>
						</List>
					</Box>
				</StyledPopperDiv>
			</Popper> 
		</TableCell>
	</TableRow>
)
}

export default PeopleComponent