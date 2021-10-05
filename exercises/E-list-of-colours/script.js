function listOfColours(colours) {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "List of Colours";
  content.appendChild(heading);
  let selectList = document.createElement("select");
  content.appendChild(selectList);
  const para = document.createElement("p");
  content.appendChild(para);


  for (let i = 0; i < colours.length; i++) {
    let optionEl = document.createElement("option");
    selectList.appendChild(optionEl);
    optionEl.innerText = colours[i];
    optionEl.setAttribute("value", colours[i]);
  }

  selectList.addEventListener("click", (event) => {
    para.textContent = "You have selected: " + event.target.value;
    para.style.color = event.target.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
colours.unshift("Choose a colour");

listOfColours(colours);

/*

# List of colours

The function **listOfColours** takes an array of colour strings:

We want to render a dropdown list of colours on the page. DONE. 

When a colour is selected, 
the selection will appear on screen e.g. 'You have selected: blue'.
The text informing the user of their selection will also change colour 
to match the selected colour e.g. 
'You have selected: blue' will display all in blue. 
'You have selected: green' will be green etc.

## Exercise

* Create a `<select>` element.
* Create a `<p>` element.
* Iterate through the array of colours.
* Each element in the array should add a `<option>` to the `<select>`, 
  where the `<option>` is the element in the array.
* Each `<option>` should have a 'click' event listener to update the contents and colour 
  of the `<p>` with the selected colour.
* All of your HTML should go inside the `<div>` with the id **"content"**.

*/
