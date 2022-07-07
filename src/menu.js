// Menu Operator

import {menuItems} from "./config"

let menuItems = menuItems;

const destructure =() => {

}

const newItemCard = function () {

    card = document.createElement("div");

    cardTitle = document.createElement("h3")
        cardTitle.setAttribute("id", "item-title"); 
            cardTitle.innerText = `${itemTitle}`;
    
    cardHR = document.createElement("hr");
        cardHR.classList.add("hr");

    cardSum = document.createElement("p");
        cardSum.setAttribute("id", "item-sum");
            cardSum.innerText = `${itemSum}`;

    cardIngrediants = document.createElement("p");
        cardIngrediants.setAttribute("id", "ingrediants");
            cardIngrediants.innerText = `${ingrediants}`

}


// on Menu click
// loop through array
// The new card item created
// Destructure object from array.
// Assign object props to .textContent(${itemTitle}) etc
// Append divs to content
// publish menu to page
// destroy menu items when other tabs clicked. 
