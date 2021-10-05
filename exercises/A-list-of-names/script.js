

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let i = 0; i < arrayOfPeople.length; i++) {
    var h1E1 = document.createElement("h1");
    h1E1.innerHTML = arrayOfPeople[i].name;
    content.appendChild(h1E1);
    var h2E1 = document.createElement("h2");
    h2E1.innerHTML = arrayOfPeople[i].job;
    content.appendChild(h2E1);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


/*## Exercise

For each object in the array:

- Add a `<h1>` tag to the html containing the name of the person.
- Add a `<h2>` tag to the html containing the job of the person.
- All of your HTML should go inside the `<div>` with the id **"content"**:

```html
<div id="content">
  <h1>{Name Here}</h1>
  <h2>{Job Here}</h2>
  .....
</div> */
