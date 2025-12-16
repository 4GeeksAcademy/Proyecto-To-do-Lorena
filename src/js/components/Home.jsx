import React, { useState } from "react";

const Todo = ()=>{
	const [inputValue, setInputValue] = useState("");
	const [todos,setTodos] = useState([])
	 const handleOnChange = (e)=>{
		setInputValue(e.target.value)
	 }
	 const handleOnClick = ()=>{
		setTodos([...todos,inputValue])
		setInputValue("")
	 }
	 const handleDelete=(index)=>{
		const updateTodos = todos.filter((todos,i)=> i !== index)
		setTodos(updateTodos)
	 }
	return (
		<div className="container">
			<h2> To do </h2>
			<div className="container_input">
				<input type="text"  value={inputValue} onChange={handleOnChange}/>
				<button className=" btn-add" onClick={handleOnClick}>Add</button>
				</div>
				
				<ul>
					{
						todos.length > 0 ? todos.map((todo,index)=>{
							return(
							<li key={index}>{todo} <button className=" btn-delete" onClick={()=>{handleDelete(index)}}>Delete</button></li>
						)
						})
						:
						<p>Tasks</p>
					}
				</ul>
		</div>
	)

}
function Home(){
	return(
		<div className="Home">
			<Todo/>
		</div>
	);
}





















export default Home;