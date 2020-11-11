
CreateMenu(burgers);

function CreateMenu(allBurgers){
    let menu = document.getElementById("menu");

    for (let index = 0; index < allBurgers.length; index ++){

        //Skapar en div för burgaren med klassen "burger"
        let mItem = document.createElement("div");
        mItem.setAttribute('class', `burger`);

        //Lägger till Burgarens namn som titel
        let itemTitle = document.createElement("h3");
        let titleText = document.createTextNode(allBurgers[index].name);
        itemTitle.appendChild(titleText);
        mItem.appendChild(itemTitle);

        //Lägger till Burgarens bild 
        let itemImage = document.createElement("img");
        itemImage.setAttribute("src",allBurgers[index].img);
        itemImage.setAttribute("width", "75%")
        mItem.appendChild(itemImage);

        //Skapar lista med info om burgaren
        let burgerInfo = document.createElement("ul");

        //Info om kalorier
        listItem = document.createElement("li");
        listValue = document.createTextNode(allBurgers[index].kCal +' '+ 'kCal');
        listItem.appendChild(listValue);
        burgerInfo.appendChild(listItem);
        
        //Info om Gluten
        if (allBurgers[index].gluten) {
            listItem = document.createElement("li");
            listValue = document.createTextNode("Contains Gluten");
            listItem.appendChild(listValue);
            burgerInfo.appendChild(listItem);
        };
        
        //Info om laktos
        if (allBurgers[index].lactose) {
            listItem = document.createElement("li");
            listValue = document.createTextNode("Contains Lactose");
            listItem.appendChild(listValue);
            burgerInfo.appendChild(listItem);
        };

        mItem.appendChild(burgerInfo);

        //Lägger till en checkbox
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "burgerBox")

        mItem.appendChild(checkbox);

        menu.appendChild(mItem);
    };
  
};

var orderButton = document.querySelector('button');

// In JavaScript you can either trigger an event directly on an object
orderButton.onclick = getInfo;

function getInfo(){
    let customerName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let houseNr = document.getElementById("house").value;
    let payment = document.getElementById("payment").value;

    //Hittar vilken radio button för gender som är vald
    let gender = "";
    let radio = document.getElementsByName('gender');    
        for(i = 0; i < radio.length; i++) { 
            if(radio[i].checked){
                gender = radio[i].id; 
            };     
        };

    if (gender == "notProvided"){
        gender = "Do not wish to provide"
    }
    if (gender == "nonBinary"){
        gender = "Non-Binary"
    }


    //Skriver ut info på skärmen
    let mainSite = document.querySelector("main");
    let orderInfo = document.createElement("section");
    orderInfo.setAttribute('id', "orderConfirmation");
    mainSite.appendChild(orderInfo);
    
    let title = document.createElement("h2");
    let titleText = document.createTextNode("Your order has been placed!");
    title.appendChild(titleText);
    orderInfo.appendChild(title);

    let customerInfo = document.createElement("div");
    customerInfo.setAttribute("id", "CustomerInfo");

    let subTitle = document.createElement("h3");
    titleText = document.createTextNode("Customer details");
    subTitle.appendChild(titleText);
    customerInfo.appendChild(subTitle);

    //Name 
    let par = document.createElement("p");
    let p_text = document.createTextNode("Name: " + customerName);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Email
    par = document.createElement("p");
    p_text = document.createTextNode("Email: " + email);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Address
    par = document.createElement("p");
    p_text = document.createTextNode("Delivery address: " + street + " " + houseNr);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Payment
    par = document.createElement("p");
    p_text = document.createTextNode("Payment method: " + payment);
    par.appendChild(p_text);
    customerInfo.appendChild(par);
    
    //Gender
    par = document.createElement("p");
    p_text = document.createTextNode("Gender: " + gender);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    orderInfo.appendChild(customerInfo);

    let allBurgers = document.getElementsByClassName("burger");
    for(i = 0; i < allBurgers.length; i++) { 
        let burger = allBurgers[i];
        console.dir(burger.children.burgerBox)
  
    };
}

