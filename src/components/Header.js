import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    let activeStyle = {
        color: '#999',
        background: '#eee',
        borderRadius: '6px',
    }
    return (
        <header className='header'>
            <Navbar expand='lg' className='border'>
                <Container>
                    <Navbar.Brand>Hasan</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav className='ml-auto'>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className='nav-link' to='/'>Home</NavLink>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className='nav-link' to='/projects'>Projects</NavLink>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className='nav-link' to='/services'>Services</NavLink>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className='nav-link' to='/about'>About</NavLink>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className='nav-link' to='/contact'>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header