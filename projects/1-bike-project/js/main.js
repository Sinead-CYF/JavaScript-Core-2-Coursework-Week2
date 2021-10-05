const blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");
const jumbotron = document.getElementsByClassName("jumbotron")[0];
const donateBikeBtn = document.getElementById("donateBikeBtn");
const volunteerBtn = document.getElementById("volunteerBtn");

blueBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBikeBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBikeBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

greenBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBikeBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
  volunteerBtn.style.color = "white";
});

/*
Just below the buttons, there's a form called **Register with us**.

When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** 
  fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on 
the `Submit` button you will need to call `event.preventDefault()` 
to stop the browser from refreshing the page. 
To read more on how to do this: 
https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/

  const form = document.querySelector("form");
  const submitBtn = document.querySelector("form button");
  const email = document.querySelector("#exampleInputEmail1");
  const yourName = document.querySelector("#example-text-input");
  const description = document.querySelector("#exampleTextarea");

  submitBtn.addEventListener("click", () => {
    let validName = true;
    let validEmail = true;
    let validDescription = true;

    if (yourName.value.length === 0) {
      yourName.style.backgroundColor = "red";
      validName = false;
    } else {
      yourName.style.backgroundColor = "transparent";
    }

    if (email.value.length === 0 || !email.value.includes("@")) {
      email.style.backgroundColor = "red";
      validEmail = false;
    } else {
      email.style.backgroundColor = "transparent";
    }

    if (description.value.length === 0) {
      description.style.backgroundColor = "red";
      validDescription = false;
    } else {
      description.style.backgroundColor = "transparent";
    }

    if (validName && validEmail && validDescription) {
      alert("Thank you for filling out the form");
    }
  });

