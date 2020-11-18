
//CreateMenu(burgers);
//var orderButton = document.querySelector('button');
//orderButton.onclick = getInfo;


function CreateMenu(allBurgers) {
    console.log(allBurgers);
    let menu = document.getElementById("menu");

    for (let index = 0; index < allBurgers.length; index++) {

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
        itemImage.setAttribute("src", allBurgers[index].img);
        itemImage.setAttribute("width", "75%")
        mItem.appendChild(itemImage);

        //Skapar lista med info om burgaren
        let burgerInfo = document.createElement("ul");

        //Info om kalorier
        listItem = document.createElement("li");
        listValue = document.createTextNode(allBurgers[index].kCal + ' ' + 'kCal');
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
        let par = document.createElement("p");
        mItem.appendChild(par);
        let parText = document.createTextNode("Add to order ");
        par.appendChild(parText);

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", allBurgers[index].name)
        par.appendChild(checkbox);

        menu.appendChild(mItem);
    };

};

function getInfo(){
    let personalInformation = getPersonalInfo();

    //Skriver ut info på skärmen
    let mainSite = document.getElementById("main");
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
    let p_text = document.createTextNode("Name: " + personalInformation[0]);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Email
    par = document.createElement("p");
    p_text = document.createTextNode("Email: " + personalInformation[1]);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Payment
    par = document.createElement("p");
    p_text = document.createTextNode("Payment method: " + personalInformation[2]);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    //Gender
    par = document.createElement("p");
    p_text = document.createTextNode("Gender: " + personalInformation[3]);
    par.appendChild(p_text);
    customerInfo.appendChild(par);

    orderInfo.appendChild(customerInfo);

    //Find selected burgers
    let orderedBurgers = findBurgers();

    //Print selected burgers
    let orderSum = document.createElement("div");
    orderSum.setAttribute("id", "orderSummary");

    subTitle = document.createElement("h3");
    titleText = document.createTextNode("Order Summary");
    subTitle.appendChild(titleText);
    orderSum.appendChild(subTitle);

    orderInfo.appendChild(orderSum);

    let orderList = document.createElement("ul");
    orderSum.appendChild(orderList);

    for (i = 0; i < orderedBurgers.length; i++) {
        listItem = document.createElement("li");
        listValue = document.createTextNode(orderedBurgers[i]);
        listItem.appendChild(listValue);
        orderList.appendChild(listItem);
    }

};

function findBurgers(){
    // Find selected burgers
    let orderedBurgers = [];
    for (i = 0; i < burgers.length; i++) {
        if (document.getElementById(burgers[i].name).checked) {
            orderedBurgers.push(burgers[i].name)
        }
    };

    return orderedBurgers;
};

function getPersonalInfo(){

    let customerName; 
    let email;
    let payment;
    let gender = ""; 
    
    customerName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    payment = document.getElementById("payment").value;

    //Hittar vilken radio button för gender som är vald
    let radio = document.getElementsByName('gender');
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            gender = radio[i].id;
        };
    };
    if (gender == "notProvided") {
        gender = "Do not wish to provide"
    }
    if (gender == "nonBinary") {
        gender = "Non-Binary"
    }
    return [customerName, email, payment, gender]
};