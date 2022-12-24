import React, { useContext, useEffect, useState } from "react";
 
//react-router-dom
 import { useNavigate, useParams } from "react-router";

//Context
 import { Context } from "../store/appContext.js";

const CharacterDetail = () => {

    const{store, action} = useContext(Context)

    //Guardo mi funcion useParams en una variable para obtener lo que se manda dinamicamente por la ruta
    let params = useParams();

    const {character_id} = params

    // const urlCharacter = `https://rickandmortyapi.com/api/character/${character_id}`

    let navigate = useNavigate();

    // //creo mis hooks

    const [character, setCharacter] = useState({})


    // //creo funciones del fetch
	const getCharacter = () => {

        let result = store.characters.find((item)=> character_id == item.id)
        setCharacter(result);

	// 	try {
	// 		let response = await fetch(urlCharacter);
	// 		if (response.ok) {
	// 			let data = await response.json();
	// 			console.log(data)
	// 			setCharacter(data);
	// 		} else {
	// 			console.log("Epa bro no funciono revisa!")
	// 		}

	// 	} catch (error) {
	// 		console.log(`Explote manin con el error: ${error}`);
	// 	}
	}

    // const {name, status, species, gender, image} = character
    
    

    useEffect(()=>{
        if(store.characters.length > 0){
            getCharacter();
        }
    },[store.characters])



    return (
        <div className="container"> 
            <div className="row justify-content-center">
                <div className="col-12 col-md-5">
                    <div className="card" >
                        <img src={character?.image} className="card-img-top imagen w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{character?.name}</h5>
                            <p className="card-text">{character?.species}</p>
                            <p className="card-text">{character?.status}</p>
                            <p className="card-text">{character?.gender}</p>
                            <button type="button" className="btn btn-primary w-100" onClick={() => navigate(-1)}>
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;