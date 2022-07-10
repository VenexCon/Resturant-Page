//About us Operator

//imports!

//consts

const abouttitle= "About";
const aboutContext =`Is an out-run inspired diner, which aims to provide a retro dining experience for 
                    all those lost souls, just riding the nights highway`;
const aboutAtmosphere = `WE provide a chill mood, good food and arcade style games open for all guests to use.`;
const aboutFood = `We serve burgers, hotdogs, steaks, breakfast food, coffee and snacks to all those
just looking to get a break from the world.`;

const aboutTitleTwo = `WHO ARE YOU?`;
const lastStatement = `Chuck on that vintage clothing and come down to`;
const resturantName = `DRIVE`;

//functions!

function moduleTitle (string) {
    const header = document.createElement("div");
        header.classList.add("content-title");
            const contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText = `${string}`;
                        header.appendChild(contentTitle);
                            content.appendChild(header);
};



