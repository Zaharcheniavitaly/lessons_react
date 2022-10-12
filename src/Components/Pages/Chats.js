import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Chat from "../Dialogs/Message/Chat";
import "./Chats.css";

const chatsPlaceholder = [
    {   
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
        recipient:"Марина",
        messages:[]
    },
]

const ChatsPage = () =>{

    const [chats, setChats] = useState([])
    const {chatId} = useParams()




    return (
			<div className="dialogs">
				<div>
						<h2>Список чатов</h2>
						<div className="chat-item">
						


						<div className="chat-list">
						{chats.map((e,id) =>
							<div className="name-delete" 
									key={id}>
		
									<button onClick={() =>{
										setChats((p) => p.filter((el) =>el !== p[id]))								 
									}} className="chat-delete">❌</button>
									
									<Link className="mess-name"
									to={`${id}`}>
									{e.recipient}
									</Link>							
			
							</div>)}
					  </div>


						
						<button className="add-button" 
						onClick={()=>{
								setChats(p => [...p, chatsPlaceholder[0]])
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