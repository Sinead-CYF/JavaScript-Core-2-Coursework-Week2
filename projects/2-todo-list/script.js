/* ARRAY OF OBJECT TO-DOS */
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Feed cats", completed: false },
];

/* GRABBING INPUT FIELD  */
let list = document.getElementById("todo-list");

/* CREATE THE LIST */
function populateTodoList(todos) {
  list.innerHTML = ""; //CLEARING HARDCODED HTML
  todos.map(populateTodoItem); // ???
}

populateTodoList(todos);

/* CREATE A NEW ITEM */
function populateTodoItem(todo) {
  /*CREATE LIST ELEMENTS & INNER TEXT */
  let li = document.createElement("li"); //Create list Element
  li.classList = //Add class to list element
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerText = todo.task; //input text from passed object

  /* CREATE SPAN FOR ICONS FIRST ICON */
  let span = document.createElement("span"); //create span for icons
  span.classList = "badge bg-primary rounded-pill"; // add classes to span
  let i1 = document.createElement("i"); //create icon
  i1.classList = "fa fa-check"; // class for icon
  i1.setAttribute("aria-hidden", true); //thing

  /* 1ST ICON EVENT LISTENER  */
  i1.addEventListener("click", toggleCompleted); //icon click event

  /* SECOND ICON */
  let i2 = document.createElement("i"); //create icon
  i2.classList = "fa fa-trash"; //class for icon
  i2.setAttribute("aria-hidden", true); //thing

  /* 2ND ICON EVENT LISTENER */
  i2.addEventListener("click", deleteTodo);

  /*APPENDAGES */
  span.appendChild(i1); //append icon to span
  span.appendChild(i2); //append icon to span
  li.appendChild(span); //append span to list element
  list.appendChild(li); //append span to list  element
}


/* ADD NEW LIST ITEM  */
function addNewTodo(event) {
  event.preventDefault();
  let input = document.getElementById("todoInput"); //grab input field
  console.log(input.value);

  let taskText = input.value.trim(); //trimming input text
  if (taskText !== "") { //only if input is not empty
    let newToDo = {
      //create new object
      task: taskText,
      completed: false,
    };
    todos.push(newToDo); //push new object into array
    populateTodoList(todos); //call populate function
  }
  input.value = ""; //reset after last push
}

/* Retrieves selected todo */
function getTodo(clickedElement) {
  let task = clickedElement.parentElement.parentElement.innerText; 
  let todo = todos.find((todo) => todo.task === task);
  console.log(todo);
  return todo;
}

/*TOGGLE CHECK ICON  - ADD LINE THROUGH STYLE*/
function toggleCompleted(event) {
  event.preventDefault();
  console.log(event);
  let todo = getTodo(event.target);
  todo.completed = !todo.completed;
  populateTodoList(todos);
}

/* DELETE A LIST ITEM */
function deleteTodo(event) {
  event.preventDefault();
  let todo = getTodo(event.target);
  if (todo.completed) {
    todos = todos.filter((t) => t !== todo);
    populateTodoList(todos);
  }
}



// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   todos = todos.filter(t => !t.completed);
//   populateTodoList(todos);
// }
