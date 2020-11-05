
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

        mItem.appendChild(checkbox);

        menu.appendChild(mItem);
    };
  
};

var orderButton = document.querySelector('button');

// In JavaScript you can either trigger an event directly on an object
orderButton.onclick = getInfo;

function buttonClicked(){
    console.log("Button Clicked");
};

function getInfo(){
    let customerName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let houseNr = document.getElementById("house").value;
    let payment = document.getElementById("payment").value;

    //Hittar vilken radio button för gender som är vald
    let gender = "";
    let radio = document.getElementsByName('gender');    
    console.log(radio);
        for(i = 0; i < radio.length; i++) { 
            if(radio[i].checked){
                gender = radio[i].id; 
            };     
        };

    
    console.log(customerName +" "+ email +" "+ street +" "+ houseNr +" "+ payment +" "+ gender);
}

