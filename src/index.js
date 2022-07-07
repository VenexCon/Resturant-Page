//Imports
import "./style.scss";
import {menuItems} from "./config.js";
import {createItem} from "./menu.js"


const about = document.getElementById("about");
    about.addEventListener("click", console.log("about"));


const menu = document.getElementById("menu");
    menu.addEventListener("click", console.log("menu"));


const contact = document.getElementById("contact");
    contact.addEventListener("click", console.log("contact"));


const merch = document.getElementById("merch");
    merch.addEventListener("click", console.log("merch"));

createItem();