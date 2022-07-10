//imports


//consts and lets 


//functions 

function moduleTitle (string) {
    const header = document.createElement("div");
        header.classList.add("content-title");
            const contentTitle = document.createElement("h2");
                contentTitle.classList.add("header");
                    contentTitle.innerText = `${string}`;
                        header.appendChild(contentTitle);
                            content.appendChild(header);
};

function displayContact () {

    const content = document.querySelector(".content");
    //contactContainer contains all appended elements
    const contactContainer = document.createElement("div");
       contactContainer.classList.add("contactContainer");
            content.appendChild(contactContainer);

        // top half of contact page
        const contactInfo = document.createElement("div")
            contactInfo.classList.add("contactInfo");
                contactContainer.appendChild(contactInfo);
        //form section
        const form = document.createElement("form");
            contactInfo.appendChild(form);

        //labels   
        const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "name");
                nameLabel.innerText = "Full Name";
                form.appendChild(nameLabel);

        const nameInput = document.createElement("input")
            nameInput.setAttribute("type", "text");
            nameInput.setAttribute("id", "name")
            //nameInput.setAttribute("required");
            nameLabel.appendChild(nameInput);


        const numberLabel = document.createElement("label");
            numberLabel.setAttribute("for", "number");
                numberLabel.innerText = "Number";
                form.appendChild(numberLabel);
            
        const numberInput = document.createElement("input")
            numberInput.setAttribute("type", "tel");
            numberInput.setAttribute("id", "number")
            //numberinput.setAttribute("required");
            numberLabel.appendChild(numberInput)

        const emailLabel = document.createElement("label");
            emailLabel.setAttribute("for", "email");
            emailLabel.innerText = "Email";
            form.appendChild(emailLabel);
            
        const emailInput = document.createElement("input")
            emailInput.setAttribute("type", "tel");
            emailInput.setAttribute("id", "number")
            //emailLabel.setAttribute("required");
            emailLabel.appendChild(emailInput);

        const textLabel = document.createElement("p")
            textLabel.setAttribute("id", "textLabel");
                textLabel.innerText = "Message"
                form.appendChild(textLabel);

        const textArea = document.createElement("textarea");
            textArea.setAttribute("id", "messageBox");
            textArea.setAttribute("name", "message");
            form.appendChild(textArea);
        
        const btnDiv = document.createElement("button")
                btnDiv.classList.add("buttonDiv")
                form.appendChild(btnDiv);

        const button = document.createElement("button")
            button.setAttribute("type", "submit");
            button.innerText = "Send"
            btnDiv.appendChild(button);
    // form inputs ends!

    //Contact Info Begins! 

    const contactCopy = document.createElement("div")
        contactCopy.classList.add("icon");
        contactCopy.classList.add("contactCopy");
        contactInfo.appendChild(contactCopy);

        const copyTitle = document.createElement("h3");
            copyTitle.innerText = "INFO"
            contactCopy.appendChild(copyTitle);
        
        const openingHours = document.createElement("div");
            openingHours.classList.add("icon")
            openingHours.classList.add("openingHours")
            contactCopy.appendChild(openingHours);

        const openText = document.createElement("p")
            openText.innerText = "6:00am till 12:00pm"
            openingHours.appendChild(openText);
        
        
        const phoneNumber = document.createElement("div");
            phoneNumber.classList.add("icon")
            phoneNumber.classList.add("phoneNumber")
            contactCopy.appendChild(phoneNumber);

        const phoneText = document.createElement("p")
            phoneText.innerText = "0123456789"
            phoneNumber.appendChild(phoneText);

        const emailDiv = document.createElement("div");
            emailDiv.classList.add("icon")
            emailDiv.classList.add("emailDiv")
            contactCopy.appendChild(emailDiv);

        const emailText = document.createElement("p")
            emailText.innerText = "Drive@fake.com"
            emailDiv.appendChild(emailText);

        const addressDiv = document.createElement("div");
            addressDiv.classList.add("icon")
            addressDiv.classList.add("address")
            contactCopy.appendChild(addressDiv);

        const addressText = document.createElement("p")
            addressText.innerText = "748 SW 4th Ave Miami, Florida"
            addressDiv.appendChild(addressText);
        //contact info

    
    //contains Google maps in IFrames. 
    const location = document.createElement("div");
        location.classList.add("location");
            contactContainer.appendChild(location);

        const map = document.createElement("iframe");
            map.setAttribute("id", "map");
            map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1194921957813!2d-80.20295488463374!3d25.76661641468496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68fa8788d01%3A0x32f3d7e9aec8c2fa!2s748%20SW%204th%20Ave%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2suk!4v1657477787280!5m2!1sen!2suk")
            location.appendChild(map)

};

export {displayContact};