import { useParams } from "react-router-dom";
import "./Chat.css"

const Chat = ({chat}) => {
    console.log(chat.messages)
    return (
        <div className="chat-items">
		  <h2>Сообщения</h2>
            {
                chat.messages.map((e,i)=>
                    <div className="message-item">
                        <h3>{e.author}</h3>
                        <h4>{e.text}</h4>
                        <p>{e.date}</p>
                    </div>
                )
            }
        </div>
    )
}
export default Chat