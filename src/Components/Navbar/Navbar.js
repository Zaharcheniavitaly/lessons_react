import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
	<nav className='nav' >
			<div className='item'>
				<NavLink to={'/'}>Home</NavLink>
			</div>
			<div className='item'>
				<NavLink to={'/profile'}>Profile</NavLink>
			</div>
			<div className='item'>
				<NavLink to={'/messages'}>Messages</NavLink>
			</div>
			<div className='item'>
				<Link>News</Link>
			</div>
			<div className='item'>
				<Link>Music</Link>
			</div>
			<div className='item'>
				<Link>Settings</Link>
		</div>
</nav>
  )
}
