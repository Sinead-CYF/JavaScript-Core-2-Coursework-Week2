function readingList(books) {
  const content = document.querySelector("#content");
  const header = document.createElement("h1");
  header.innerHTML = "Book list";
  content.appendChild(header);
  const ul = document.createElement("ul");
  content.appendChild(ul);

  for (let i = 0; i < books.length; i++) {
    let liEl = document.createElement("li");
    ul.appendChild(liEl);
    let para = document.createElement("p");
    liEl.appendChild(para);
    para.innerHTML = `${books[i].title} - ${books[i].author}`;
    let images = document.createElement("img");
    images.src = books[i].cover;
    liEl.appendChild(images);

    if (books[i].alreadyRead === true) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover:
      "https://i.postimg.cc/RFnCcKN5/The-Design-of-Everyday-Things-Don-Norman.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover:
      "https://i.postimg.cc/4ykfwy9K/The-Most-Human-Human-Brian-Christian.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover:
      "https://i.postimg.cc/fycwPsc8/The-Pragmatic-Programmer-Andrew-Hunt.jpg",
  },
];

readingList(books);

/*
Render the list of books on the page. 
Each book should have a title, author and image 
and a background colour that is set dependent on 
whether we have read the book or not.

## Exercise

- Iterate through the list of books.
- For each book, create a `<p>` element with the 
  book title and author and append it to the page.
- Use a `<ul>` and `<li>` to display the books.
- Add an `<img>` to each book that links to a URL of the book cover.
- Change the style of the book depending on whether you have read it (green) or not (red).
- All of your HTML should go inside the `<div>` with the id **"content"**.

The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
