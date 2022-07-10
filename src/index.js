//Imports
import "./style.scss";
import { menuItems } from "./config";
import {moduleTitle, gridCreater,loadMenu, displayMenu} from "./menu";

//consts and lets
const content = document.querySelectorAll(".content");

// These are enabled and disabled by the indiviudal tab creators. 
function menuTab () {
    const menuTab = document.getElementById("menu");
        menuTab.addEventListener("click", () => {
            clearContentDiv();
            displayMenu();
        })
};

function aboutTab () {
    const aboutTab = document.getElementById("about");
        aboutTab.addEventListener("click", () => {
        })
};

function contactTab () {
    const contactTab = document.getElementById("contact");
        contactTab.addEventListener("click", () => {
            console.log("contactTab");
        })
};

function merchTab () {
    const merchTab = document.getElementById("merch");
        merchTab.addEventListener("click", () => {
            console.log("merch Tab");
        })
};

window.onload = function () {
    menuTab();
    aboutTab();
    contactTab();
    merchTab();
}



// Functions
//Is called prior to all new content created.
function clearContentDiv () {
    const content = document.querySelector(".content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
};

