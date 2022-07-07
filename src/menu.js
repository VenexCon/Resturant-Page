// Menu Operator

import {menuItems} from "./config"

let menuItems = menuItems;


const moduleTitle = function () {
    header = document.createElement("div");
        header.classList.add("content-title");
            contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText("Menu");
    return header

};

const gridCreater = function () {
    contentGrid = document.createElement("div");
        contentGrid.classList.add("content-grid");
    return contentGrid;
}


const newItemCard = function (itemTitle,hr,itemSum, ingrediants, cost) {

    card = document.createElement("div");
        card.classList.add("item")

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
    
    cardSum = document.createElement("p");
        cardSum.setAttribute("cost");
            cardSum.innerText = `${cost}` 
    
    
    

};

menuItems.forEach(item => {

});


// on Menu click
// loop through array
// The new card item created
// Destructure object from array.
// Assign object props to .textContent(${itemTitle}) etc
// Append divs to content
// publish menu to page
// destroy menu items when other tabs clicked. 
