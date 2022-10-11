import React from "react";
//import Chats from "./Chats";
import { useParams} from "react-router-dom";
import { useState } from "react"
import "./Message.css"
import { useDispatch, useSelector } from "react-redux";
import { messageSelector } from "../../reduxProject/reducers/messageReducer/messageSelector";

const Message = () => {

const [text, setText] = useState('');
const {id} = useParams();
const messages = useSelector(messageSelector);
const dispatch = useDispatch();

const handleAdd = ()=> {
	const obj = {
		id: Number(id),
		text: text
	}
	dispatch( {type: 'add', payload: obj} )
}

	return (
        <div className="chat-items">
		 		 <h2>Сообщения</h2>

		  		<input value={text} onChange={(e) => setText(e.target.value)} />
				<button onClick={handleAdd}>Добавить сообщение</button>

            { messages.map((mess)=>	{	
						return (			 
                    <div className="message-item" key={mess.id}>           
                        <h4>{mess.text}</h4>
								<button onClick={() => dispatch({type: 'delete', payload: mess.id})}>X</button>
							</div>
								)
						})}
        </div>
    )
}
export default Message;

