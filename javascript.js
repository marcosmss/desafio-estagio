let menuUsers = document.getElementById("menu-users");
let menuPosts = document.getElementById("menu-posts");
let divUsers = document.getElementById("div-users");
let divPosts = document.getElementById("div-posts");
let i;

menuUsers.addEventListener("click", function() {
  divUsers.style.display = "block";
  divPosts.style.display = "none";
  menuUsers.classList.add("selected");
  menuPosts.classList.remove("selected");
});

menuPosts.addEventListener("click", function() {
  divUsers.style.display = "none";
  divPosts.style.display = "block";
  menuPosts.classList.add("selected");
  menuUsers.classList.remove("selected");
});

fetch("https://jsonplaceholder.typicode.com/users/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (i = 0; i < myJson.length; i++) {
      let node = document.createElement("H3");
      let p = document.createElement("P");
      let pp = document.createElement("P");
      let textNode = document.createTextNode(`Name: ${myJson[i].name}`);
      let pNode = document.createTextNode(`Username: ${myJson[i].username}`);
      let pEmail = document.createTextNode(`Email: ${myJson[i].email}`);
      node.appendChild(textNode);
      p.appendChild(pNode);
      pp.appendChild(pEmail);
      document.getElementById("list-users").appendChild(node);
      document.getElementById("list-users").appendChild(p);
      document.getElementById("list-users").appendChild(pp);
    }
  });

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (i = 0; i < myJson.length; i++) {
      let node = document.createElement("H3");
      let p = document.createElement("P");
      let textNode = document.createTextNode(`Title: ${myJson[i].title}`);
      let pNode = document.createTextNode(`Body: ${myJson[i].body}`);
      node.appendChild(textNode);
      p.appendChild(pNode);
      document.getElementById("list-posts").appendChild(node);
      document.getElementById("list-posts").appendChild(p);
    }
  });

//Está feio pra caramba o código, irei fazer uns commits refatorando.
