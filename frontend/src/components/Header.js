import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>Jamazon</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
						<Nav>
							<Nav.Link href='#cart'>
								<i className='fas fa-shopping-cart me-2'></i>Cart
							</Nav.Link>
							<Nav.Link href='#login'>
								<i className='fas fa-user me-2'></i>
								Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
