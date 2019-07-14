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
      let node = document.createElement("LI");
      let a = document.createElement("A");
      let user = document.createElement("P");

      let textNode = document.createTextNode(myJson[i].name);
      node.appendChild(a);
      a.appendChild(textNode);

      document.getElementById("list-users").appendChild(node);
      document.getElementById("list-users").appendChild(user);
    }
  });

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (i = 0; i < myJson.length; i++) {
      let node = document.createElement("LI");
      let a = document.createElement("A");
      let user = document.createElement("P");

      let textNode = document.createTextNode(myJson[i].title);
      node.appendChild(a);
      a.appendChild(textNode);

      document.getElementById("list-posts").appendChild(node);
      document.getElementById("list-posts").appendChild(user);
    }
  });

//Está feio pra caramba o código, irei fazer uns commits refatorando.

//searchbox

function myFunctionUsers() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list-users");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function myFunctionPosts() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInputPosts");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list-posts");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// menu;

// function myMenu() {
//   var x = document.getElementById("menuTop");
//   if (x.className === "menu") {
//     x.className += "responsive";
//   } else {
//     x.className = "menu";
//   }
// }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
