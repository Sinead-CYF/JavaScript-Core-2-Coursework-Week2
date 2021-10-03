function todoList(todos) {
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  content.appendChild(ul);

  for (let i = 0; i < todos.length; i++){
    const liEl = document.createElement("li");
    liEl.innerText = todos[i].todo;
    ul.appendChild(liEl);
  }

  liEl.addEventListener()
}

// alterty.addEventListener("click", function (str) {
//   alert("Hello World!")
//  })

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);

/*
We want to render a list of todos on the page. DONE 

When we click on an item 
we want a line-through style to be added to it to show that the todo has 
been completed. 

If we decide we haven't actually finished the todo yet, 
then we should be able to click it again to remove the line-through styling.

## Exercise

* You should use an `<ul>` for the list and `<li>` tags for the contents.
* Each todo should have an event listener for when they are clicked.
* The event listener should add the line-through style to the todo.
* The event listener should also remove the line-through style conditionally 
  by checking if the style is already applied.
* All of your HTML should go inside the `<div>` with the id **"content"**.

*/