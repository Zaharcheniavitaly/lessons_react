import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Chat from "../Dialogs/Message/Chat";
import "./Chats.css";

// const chatsPlaceholder = [
//     {   
//       id: 1,
// 		recipient:"Виталий",
//       messages:[
//             {
//                 author:'Андрей',
//                 text:'Привет',
//                 date: new Date().toLocaleTimeString()
//             },
//             {
//                 author:'Виктория',
//                 text:'И тебе привет',
//                 date: new Date().toLocaleTimeString()
//             },
//         ]
//     },
//     {   
// 		id: 2,
// 		recipient:"Марина",
//       messages:[]
//     },
// ]

const ChatsPage = () =>{

    const [chats, setChats] = useState([
		
			{   
			  id: 1,
			  recipient:"Виталий",
			  messages:[
					  {
							author:'Андрей',
							text:'Привет',
							date: new Date().toLocaleTimeString()
					  },
					  {
							author:'Виктория',
							text:'И тебе привет',
							date: new Date().toLocaleTimeString()
					  },
				 ]
			},
			{   
			  id: 2,
			  recipient:"Марина",
			  messages:[
				{
					author:'Ирина',
					text:'Всех приветствую',
					date: new Date().toLocaleTimeString()
			  },
			  {
					author:'Светлана',
					text:'И тебе привет',
					date: new Date().toLocaleTimeString()
			  },
			  ]
			},
	  
	 ])
    const {chatId} = useParams()

	

    return (
			<div className="dialogs">
				<div>
						<h2>Список чатов</h2>
						<div className="chat-item">

						<div className="chat-list">
						{
							chats.map((e,i) =>{
								return (
									<div className="name-delete" 
											key={i}>
											
											<Link className="mess-name"
											to={`${i}`}>
											{e.recipient}
											</Link>		
											<button onClick={() =>{
												setChats((p) => p.filter((el) =>el !== p[i]))								 
											}} className="chat-delete">❌</button>					
					
									</div>
							)})
						}
					  </div>
						
						<button className="add-button" 
						onClick={()=>{
								setChats(p => [...p, {recipient: `${chats.length+1}`}])
						}}>
						Добавить чат
						</button>
						
					</div>
				</div>
				{
					chatId && chats[chatId] ? <Chat chat={chats[chatId]}/> : <h2>Выберите чат</h2>
				}


				
			</div>
       
    )
}



// const ChatList = ({chats, setChats}) =>{
    
//     return( )
// }

export default ChatsPage

// setChatList((p) => p.filter(el => el !== p[index]))

// <button onClick={() =>{
// 	setChats((p) => p.filter((el) =>el !== p[id]))

	 
// }} className="chat-delete">❌</button>