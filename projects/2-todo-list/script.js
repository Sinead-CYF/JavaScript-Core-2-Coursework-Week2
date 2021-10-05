function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let icon1 = document.getElementsByClassName("fa fa-check");
  let icon2 = document.getElementsByClassName("fa fa-trash");
  const icon1Els = document.getElementsByClassName()

  for (let i = 0; i < todos.length; i++) {
    const liEl = document.createElement("li");
    list.appendChild(liEl);
    liEl.innerHTML =
      todos[i].task +
      (
        <span class="badge bg-primary rounded-pill">
          <i class="fa fa-check" aria-hidden="true"></i>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      );
  }

  icon1.addEventListener("click", (thing) => {
      if (liEl.style.textDecoration === "line-through") {
        liEl.style.removeProperty("text-decoration");
      } else {
        liEl.style.textDecoration = "line-through";
      }
  });

  icon2.addEventListener("click", (thing) => {
    list.removeChild(li);
  });
}

/*
The first `<i>` tag needs an event listener 
that applies a line-through text-decoration 
styling to the text of the todo. It should 
remove the styling if it is clicked again.

The second `<i>` tag needs an event listener 
that deletes the parent `<li>` element from the `<ul>`.

*/

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field
// and add it as a new todo to the bottom of the todo list.
// These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
