//vars
const url = 'https://api.vschool.io/christopher/todo/';
const defaultIMG = 'https://dogtime.com/assets/uploads/2010/12/puppies-1280x720.jpg';
const addToDoForm = document['addToDoForm'];
// functions
function autoRefresh () {
	setTimeout('location.reload(true);', 200);
}

function getTodos () {
	axios
		.get(url)
		.then((response) => {
			const todos = response.data.reverse();
			listToDos(todos);
		})
		.catch((error) => {
			console.error(error);
		});
}

addToDoForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const title = addToDoForm.title.value;
	const description = addToDoForm.description.value;
	/////??????
	const imgUrl = addToDoForm.imgUrl;
	const newTodo = {
		title,
		completed: false,
		description,
		imgUrl: defaultIMG
	};

	axios.post(url, newTodo).catch((error) => console.log(error));
	//autoRefresh();
});

function listToDos (todos) {
	for (let i = 0; i < todos.length; i++) {
		// 1) create the elements
		const todoContainer = document.createElement('div');
		const title = document.createElement('h1');
		const description = document.createElement('p');
		const delButton = document.createElement('button');
		const img = document.createElement('img');
        const checkBox = document.createElement('input')
		// 2) edit elements
		if (todos[i].completed== true) {
            //text-decoration: line-through;
            checkBox.checked = true;
			title.classList.add('completed');
		}
		img.src = todos[i].imgUrl;
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", function(e){
            axios.put(url + todos[i]._id, {completed: checkBox.checked} )
            .then( response => console.log(response.data))
            .catch (error => console.log(error))
        })

		img.classList.add('picStyle');

		title.textContent = todos[i].title;

        description.textContent = todos[i].description;


		delButton.textContent = 'delete';

		// need to get into function
		delButton.addEventListener('click', function (event) {
			deleteTodos(url + todos[i]._id);
		});

        // 3) APPEND
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(description);

		todoContainer.appendChild(title);
		todoContainer.appendChild(delButton);
		todoContainer.appendChild(img);
		document.getElementById('todo-list').appendChild(todoContainer);
	}
}

function deleteTodos (url) {
	axios.delete(url);
}
// initiate
getTodos();
