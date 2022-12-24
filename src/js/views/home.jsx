import React, {useState, useEffect, useContext } from "react";

//componentes
import Character from "../component/Character.jsx";

//context
import { Context } from "../store/appContext.js";

export const Home = () => {

	//Destructuro context
	const {store, action} = useContext(Context);

	// //creo mis constantes
	// const urlApi = 'https://rickandmortyapi.com/api/character'

	// //creo mis hooks
	// const [characters, setCharacters] = useState([])

	// //creo la funcion del fetch
	// const getCharacters = async () => {

	// 	try {
	// 		let response = await fetch(urlApi);
	// 		if (response.ok) {
	// 			let data = await response.json();
	// 			console.log(data)
	// 			setCharacters(data.results);
	// 		} else {
	// 			console.log("Epa bro no funciono revisa!")
	// 		}

	// 	} catch (error) {
	// 		console.log(`Explote manin con el error: ${error}`);
	// 	}
	// }

	// useEffect(() => {
	// 	getCharacters();
	// }, [])

	return(
		<>
			<div className="container">
				<div className="row">
					{
						store.characters.map((character, index)=>{
							return(
								<Character key={`character-${character.id} `} {...character}/>
							);
						})
					}
				</div>
				<div className="col-12 col-md-6">
					<button onClick={()=>{localStorage.removeItem('characters')}} type="button" className="btn btn-primary">Borrar Local Storage</button>
				</div>
			</div>
		</>
	);

	;}
	



