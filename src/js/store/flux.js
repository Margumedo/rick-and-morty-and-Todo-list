const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: JSON.parse(localStorage.getItem('characters')) || [],
			urlRickAndMortyApi: 'https://rickandmortyapi.com/api',
			todos: [],
			name : 'maicol',
			urlTodoList : 'http://assets.breatheco.de/apis/fake/todos/user',
			
		},
		actions: {
			
			//creo la funcion del fetch
			getCharacters:  async () =>{
				
				let store = getStore();

				if(store.characters.length < 1){
					console.log("Me ejecuto desde el fetch")
					try {
						let response = await fetch(`${store.urlRickAndMortyApi}/character`) ;
						if (response.ok) {
							 let data = await response.json();
							console.log(data)
							setStore(
								{...store, 
								characters: data.results});
							//guardo characters en mi localStorage
							localStorage.setItem('characters', JSON.stringify(data.results));
						} else {
							console.log("Epa bro no funciono revisa!")
						}
	
					} catch (error) {
						console.log(`Explote manin con el error: ${error}`);
						}
				}
			},

			saveTodos : async (task)=>{
				
				let store = getStore();
				let actions = getActions();

				try {
					let response = await fetch(`${store.urlTodoList}/${store.name}`,{
						method: "PUT",
						headers: {
							"Content-Type" : "application/json"
						},
						body : JSON.stringify([...store.todos,task])
					})
					if(response.ok){
						let data = await response.json();
						
						actions.getTodos();	
						console.log(data);
					}else{
						console.log(response.status);
					}
				} catch (error) {
					console.log(`Explote manin con el siguiente error: ${error}`)
				}

			},

			getTodos : async ()=>{

				let store = getStore();
				let actions = getActions();
				

				try {
					let response = await fetch(`${store.urlTodoList}/${store.name}`)
					
					if(response.status === 404){
						let responseTodos = await fetch(`${store.urlTodoList}/${store.name}`,{
							method: "POST",
							headers:{
								  "Content-Type": "application/json",  
								},
							body: JSON.stringify([])
						})
		
						if(responseTodos.ok){
							console.log(`Se ha creado el usuario ${store.name}`)
							actions.getTodos();
						}
		
					}else{
						let data = await response.json();
						setStore({
							...store,
							todos:data
						})
						console.log("Epa bro, todo bien se han traido las tareas")
					}
				} catch (error) {
					console.log(`Epa manin explote con el siguiente error: ${error}`)
				}
			},

			deleteTaskApi : async (id)=>{

				let store = getStore();
				let actions = getActions();

				let newArray = store.todos.filter((task, index)=> id != index)
				console.log(newArray)
				if(newArray.length >= 1){
					try {
						let response = await fetch(`${store.urlTodoList}/${store.name}`, {
							method : "PUT",
							headers : {
								"Content-Type" : "application/json",
							},
							body : JSON.stringify(newArray)
						})
			
						if(response.ok){
							console.log("se borro la tarea")
							actions.getTodos();
						}
					} catch (error) {
						console.log(`Explote manin con el siguiente error: ${error}`)
					}
				}else{
					setStore({
						...store,
						todos:[]
					})
					
				}
			},

			deleteUserApi : async ()=>{

				let store = getStore();
				let actions = getActions();
				
				try {
					let response = await fetch(`${store.urlTodoList}/${store.name}`,{
						method : "DELETE"
					})
		
					if(response.ok){
						let data = await response.json();
						console.log(data)
						console.log("se borro el usuario")
						actions.getTodos();
					}else{
						console.log("No se borro el usuario")
					}
		
				} catch (error) {
					console.log(`Explote manin revisa el error: ${error}`)
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
