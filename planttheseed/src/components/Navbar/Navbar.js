import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const MyNavbar = () => (

	<Navbar>
		<Navbar.Header className="hey">
			<Navbar.Brand>
				<a href="#home">React-Bootstrap</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<NavItem eventKey={1} href="#">
				Link
			</NavItem>
			<NavItem eventKey={2} href="#">
				Link
			</NavItem>
			<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				<MenuItem eventKey={3.1}>Action</MenuItem>
				<MenuItem eventKey={3.2}>Another action</MenuItem>
				<MenuItem eventKey={3.3}>Something else here</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.4}>Separated link</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>
);

export default MyNavbar;
