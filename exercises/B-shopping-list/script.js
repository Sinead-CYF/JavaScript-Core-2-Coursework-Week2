function shoppingList(arr) {
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  content.appendChild(ul);

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = arr[i];
    ul.appendChild(liEl);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

/* 

Create unordered list. 
attach unordered list to content, 
for each element create an list item inside unordered list. 
make sure the text is a value from the array. 

### Shopping List

The function **shoppingList** takes an array of strings:

```js
let shopping = ["Shampoo", "Conditioner", "Toothpaste"];
```

Create a list of shopping items on the page.

## Exercise

* You should use an unordered list: `<ul>`.
* Each item from the array should be in a `<li>` tag.
* All of your HTML should go inside the `<div>` with the id **"content"**.

*/
