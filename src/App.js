import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Notfoundpage from './Components/Pages/Notfoundpage';
import ChatsPage from './Components/Pages/Chats';



function App() {
	
	
		return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
						<Route path="/" element={<HomePage userName={'Преподаватель'}/> }/>
						<Route path="/messages" element={<ChatsPage /> }>
								<Route path=':chatId' element = {<ChatsPage/>}/>
						</Route>
						
						<Route path="/profile" element={<Profile /> }/>
						<Route path="*" element={<Notfoundpage /> }/>
				</Routes>
				
			</div>
			
		</div>
		)	
 }
 
 export default App;




 