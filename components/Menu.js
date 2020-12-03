// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.*/
  function menuMaker (data){
    const menu = document.createElement("div");
    const listStart = document.createElement("ul");
    const listOne = document.createElement("li");
    const listTwo = document.createElement("li");
    const listThree = document.createElement("li");
    const listFour = document.createElement("li");
    const listFive = document.createElement("li");
    const listSix = document.createElement("li");

    menu.appendChild(listStart);
    listStart.appendChild(listOne);
    listStart.appendChild(listTwo);
    listStart.appendChild(listThree);
    listStart.appendChild(listFour);
    listStart.appendChild(listFive);
    listStart.appendChild(listSix);

    menu.classList.add("menu");

    listOne.textContent = data[0];
    listTwo.textContent = data[1];
    listThree.textContent = data[2];
    listFour.textContent = data[3];
    listFive.textContent = data[4];
    listSix.textContent = data[5];

    const button = document.querySelector(".menu-button");
    button.addEventListener("click", (event) => {
      menu.classList.toggle("menu--open");
    });
    return menu;
  }
const main = menuMaker(menuItems);
const head = document.querySelector(".header");
head.appendChild(main);
/*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
