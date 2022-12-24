import React, { useContext, useEffect, useState } from "react";

//Importo el contexto
import { Context } from "../store/appContext.js";

//importo los estilos

import "../../styles/todos.css";


const TodoList = ()=>{
    
    //destructuro el Context
    const {store, actions} = useContext(Context);

    //creo mis hooks
	const [task, setTask] = useState({
		label: "",
		done: false
	});

    // creo mis funciones
    const handleChange = (e) => {
		setTask({
			[e.target.name]: e.target.value,
			done: false
		})

	}

	const saveTask = (e)=>{
		
		if(e.key === "Enter"){
			if(task.label.trim()!==""){
				actions.saveTodos(task);
				setTask({
					label: "",
					done: false})
			}else{
				console.log("La tarea no puede estar vacia")	
			}
		}
	}

	

 
    
    return(
        <>
			<h1 className="text-center todo">todos</h1>

			<div className="container  ">
				<div className="row  justify-content-center ">
					<div className="col-12 col-sm-10 col-md-8 col-lg-6  border border-bottom-0 px-5 py-2 contenedor d-flex">
						<input
							onKeyDown={saveTask}
							onChange={handleChange}
							className="w-100 shadow-none"
							type="text"
							placeholder="What needs to be done?"
							value={task.label} 
							name = "label"/>
						<button onClick={actions.deleteUserApi} className="btn btn-danger ms-3 button">Delete</button>	
					</div>
				</div>
				<div className="row justify-content-center ">
					<div className="col-12 col-sm-10 col-md-8 col-lg-6 border p-0 contenedor">
						<ul className="ps-0">
							{store.todos < 1
								? <div className="ps-5 border-bottom py-2">
									No tasks, add a task
								</div>
								
								: store.todos.map((item, index) => {
									
									return (
										<div key={index} onClick={()=>actions.deleteTaskApi(index)} className="container border-bottom padre">
											<div className="tarea">
												<li className="lista" >{item.label}</li>
											</div>
											<div className="icono" >
												<i className="fas fa-times"></i>
											</div>
										</div>
									);
								})}
						</ul>
						<div className="registro">

						{`${store.todos.length} item left`}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};





export default TodoList;
