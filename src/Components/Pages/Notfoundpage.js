import { Link } from "react-router-dom"



export default function Notfoundpage() {
  return (
	 <div className="notfoundpage">
		<h1>404 Вы не туда попали. Go <Link to="/">home</Link></h1>
	 </div>
  )
}
