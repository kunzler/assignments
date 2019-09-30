//vars
const url = 'https://api.vschool.io/christopher/todo/';
const defaultIMG = 'https://dogtime.com/assets/uploads/2010/12/puppies-1280x720.jpg';
const addToDoForm = document['addToDoForm'];
// functions
function autoRefresh () {
	setTimeout('location.reload(true);', 1000);
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
	const imgUrl = addToDoForm.imgUrl.url;
	const newTodo = {
		title,
		completed: false,
		description,
		imgUrl
	};

	axios.post(url, newTodo).catch((error) => console.log(error));
	autoRefresh();
});

function listToDos (todos) {
	for (let i = 0; i < todos.length; i++) {
		// 1) create the elements
		const todoContainer = document.createElement('div');
		const title = document.createElement('h1');
		const description = document.createElement('p');
		const delButton = document.createElement('button');
		const img = document.createElement('img');

		// 2) edit elements
		if (todos[i].completed) {
			//text-decoration: line-through;
			title.classList.add('completed');
		}
		img.classList.add('pic');

		title.textContent = todos[i].title;

		description.textContent = todos[i].description;

		img.src.imgUrl = todos[i].imgUrl;
        console.log(`img.src is: ${todos.src}, mkay`);
        
		delButton.textContent = 'delete';
		delButton.addEventListener('click', function (event) {
			event.preventDefault();
			deleteTodos(url + todos[i]._id);
			autoRefresh();
		});

		// 3) APPEND
		todoContainer.appendChild(description);
		todoContainer.appendChild(title);
		todoContainer.appendChild(delButton);
		todoContainer.appendChild(img);
		document.getElementById('todo-list').appendChild(todoContainer);
	}
}

function deleteTodos (id) {
	axios.delete(id);
}

getTodos();
