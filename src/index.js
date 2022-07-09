//Imports
import "./style.scss";
import { menuItems } from "./config";
import {moduleTitle, gridCreater, newItemCard, loadMenu} from "./menu";

//consts and lets
const content = document.querySelectorAll(".content");

const aboutTab = document.getElementById("about");
    aboutTab.addEventListener("click", console.log("about"));


const menuTab = document.getElementById("menu");
    menuTab.addEventListener("click", console.log("menu"));


const contactTab = document.getElementById("contact");
    contactTab.addEventListener("click", console.log("contact"));


const merchTab = document.getElementById("merch");
    merchTab.addEventListener("click", console.log("merch"));

// Functions

const clearContentDiv =  (content) => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
};

const menuTitle = moduleTitle("Menu");
const createGrid = gridCreater();
const menuLoad = loadMenu(menuItems);
