import React from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Message from "./Message";
import "./Chats.css";
import { useSelector } from "react-redux";
import { chatsSelector } from "../../reduxProject/reducers/chatReducer/chatsSelector";



const Chats = (props) =>{

	const chats = useSelector(chatsSelector);

	let {id} = useParams();

	return (
		<div>
			{chats.map((chat) =>{
				return (
					<Link key={chat.id} to={`/message/${chat.id}`}>
					{chat.name}
					</Link>
				)
			})}		
		</div>
	)
   
}

export default Chats;