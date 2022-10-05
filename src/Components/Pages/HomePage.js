import React from 'react';
import  './HomePage.css'

export default function HomePage(props) {
  return (
	<div className='homepage'>
			<h1>Добро пожаловать, {props.userName}</h1> 
	</div>
  )
}
