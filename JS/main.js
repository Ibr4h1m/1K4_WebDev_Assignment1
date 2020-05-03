// Item number prices (can be viewed on the menu)
var i1 = 2.45
var i2 = 2.65
var i3 = 2.85
var i4 = 0.50
var i5 = 0.25
var isBasketEmpty = true;
var vc1 = true;
var vc2 = true;
var vc3 = true;
var orderTotal = 0;

function AddToOrder(){
    var basket = document.getElementById("basket");
    var size = document.getElementById("size").value;
    if (size == 1){
        var cupSize = "Small";
        var cupPrice = i1;
        vc1 = true;
    } else if(size == 2){
        var cupSize = "Medium";
        var cupPrice = i2;
        vc1 = true;
    } else if(size==3){
        var cupSize = "Large";
        var cupPrice = i3;
        vc1 = true;
    } else{
        console.log("Please enter a valid size number!");
        vc1 = false;
    }
    var name = document.getElementById("name").value;
    if (name==6){
        var drinkName = "Latte";
        vc2 = true;
    }else if(name==7){
        var drinkName = "Capuccino";
        vc2 = true;
    }else if(name==8){
        var drinkName = "Espresso";
        vc2 = true;
    } else if(name==9){
        var drinkName = "Americano";
        vc2 = true;
    } else if(name==10){
        var drinkName = "Flat White";
        vc2 = true;
    } else{
        console.log("Please enter a valid drink name number!")
        vc2 = false;
    }
    var extras = document.getElementById("extras").value;
    if (extras == 4){
        var xtraItem = "Extra Cream";
        var xtraPrice = i4;
        vc3 = true;
    } else if(extras==5){
        var xtraItem = "Syrup";
        var xtraPrice = i5;
        vc3 = true;
    } else if(extras==0){
        var xtraPrice = 0;
        var xtraItem = "";
        vc3 = true;
    }else{
        console.log("Please enter a valid number for extras!")
        vc3 = false;
    }
    if ((vc1 == true && vc2 == true && vc3 == true)){
        var txtSize = document.createTextNode(cupSize + " ");
        basket.appendChild(txtSize);

        var txtName = document.createTextNode(drinkName + " ");
        basket.appendChild(txtName);

        var txtXtra = document.createTextNode(xtraItem + " " + "£");
        basket.appendChild(txtXtra);

        var totalPrice = cupPrice + xtraPrice;
        var txtPrice = document.createTextNode(totalPrice + " ");
        basket.appendChild(txtPrice);

        var linebreak = document.createElement('br');
        basket.appendChild(linebreak);
        orderTotal = orderTotal + totalPrice;
        console.log(orderTotal);
        isBasketEmpty = false;
    }else{
        
    }
    
    //var total = document.createTextNode(orderTotal);
    //basket.appendChild(total);
}

function PlaceOrder(){
    if (isBasketEmpty==false){
        if (confirm("Your total is: £" + orderTotal + " Continue?") == true){
            alert("Your order has been placed! Thank you");
            var myNode = document.getElementById('basket');
            var size = document.getElementById("size");
            var name = document.getElementById("name");
            var extras = document.getElementById("extras");

            myNode.innerHTML = '';

        } else{
            alert("You've cancelled placing the order! Please continue");
        }   
    } else{
        alert("Your basket is empty!");
    }
    
    
}


