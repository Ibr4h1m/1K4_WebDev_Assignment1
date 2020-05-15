// Item number prices (can be viewed on the menu)
var i1 = 2.45
var i2 = 2.65
var i3 = 2.85
var i4 = 0.50
var i5 = 0.25
var isBasketEmpty = true;
var vc1 = false;
var vc2 = false;
var vc3 = false;
var vc4 = false;
var orderTotal = 0;
var dPurchased = localStorage.getItem("drinksHistory");
if (dPurchased == "NaN"){
    dPurchased = "0";
}
var drinksPurchased = parseInt(dPurchased);
var totalDrinks = 0;

function SaveOrder(){
    var item1 = document.getElementById("basket").innerText;
    localStorage.setItem('saveOrder', item1);
    console.log(localStorage);
    localStorage.setItem("price", orderTotal);
    var addDrinks = drinksPurchased + totalDrinks;
    localStorage.setItem("drinksHistory", addDrinks);
    console.log(addDrinks);
}


function retrieveOrder(){
    var storedValue = localStorage.getItem("saveOrder");
    var oTot = localStorage.getItem("price");
    var dTot = localStorage.getItem("drinkHistory");
    dTotConv = parseInt(dTot);
    drinksPurchased = drinksPurchased + dTotConv;
    console.log(drinksPurchased);
    var convertedoTot = parseFloat(oTot);
    orderTotal = orderTotal + convertedoTot;
    var basket = document.getElementById("basket");
    var addItem = document.createTextNode(storedValue);
    basket.appendChild(addItem);
    var linebreak = document.createElement('br');
    basket.appendChild(linebreak);
    isBasketEmpty = false;
    console.log(orderTotal);
}
function clearFav(){
    localStorage.clear();
    console.log("Localstorage cleared!");
    console.log(localStorage);
}


function AddToOrder(){
    var basket = document.getElementById("basket");
    var s = document.getElementById('size');
    if (s.value == 1) {
        var cupSize = "Small";
        var cupPrice = i1;
        vc1 = true;
    }
    else if(s.value == 2){
        var cupSize = "Medium";
        var cupPrice = i2;
        vc1 = true;
    }
    else if(s.value==3){
        var cupSize = "Large";
        var cupPrice = i3;
        vc1 = true;
    }
    var n = document.getElementById('name');
    if (n.value==1){
        var drinkName = "Latte";
        vc2 = true;
    }
    else if(n.value==2){
        var drinkName = "Capuccino";
        vc2 = true;
    }
    else if(n.value==3){
        var drinkName = "Espresso";
        vc2 = true;
    }
    else if(n.value==4){
        var drinkName = "Americano";
        vc2 = true;
    }
    else if(n.value==5){
        var drinkName = "Flat White";
        vc2 = true;
    } 
    var x = document.getElementById("extras");
    if (x.value == 1){
        var xtraItem = "Extra Cream";
        var xtraPrice = i4;
        vc3 = true;
    } else if(x.value==2){
        var xtraItem = "Syrup";
        var xtraPrice = i5;
        vc3 = true;
    } else if(x.value==3){
        var xtraItem = "";
        var xtraPrice = 0;
        vc3 = true;
    }
    var m = document.getElementById("milkType");
    if (m.value ==1){
        var milkType = "Whole Milk";
        vc4 = true;
    } else if(m.value==2){
        milkType = "Skimmed Milk";
        vc4 = true;
    } else if(m.value==3){
        milkType = "Semi-Skimmed Milk";
        vc4 = true;
    } else if(m.value==4){
        milkType = "Coconut Milk";
        vc4 = true;
    } else if(m.value == 5){
        milkType = "Soya Milk";
        vc4 = true;
    }
    
    
    if ((vc1 == true && vc2 == true && vc3 == true && vc4 == true)){
        var txtSize = document.createTextNode(cupSize + " ");
        basket.appendChild(txtSize);

        var txtName = document.createTextNode(drinkName + " ");
        basket.appendChild(txtName);

        var txtXtra = document.createTextNode(xtraItem + " ");
        basket.appendChild(txtXtra);

        var txtMilk = document.createTextNode(milkType + " " + "£");
        basket.appendChild(txtMilk);

        var totalPrice = cupPrice + xtraPrice;
        var txtPrice = document.createTextNode(totalPrice + " ");
        basket.appendChild(txtPrice);

        var linebreak = document.createElement('br');
        basket.appendChild(linebreak);
        orderTotal = orderTotal + totalPrice;
        console.log(orderTotal);
        isBasketEmpty = false;
        totalDrinks= totalDrinks + 1;
        console.log("Drinks in order: " + totalDrinks);
        vc1 = false;
        vc2 = false;
        vc3 = false;
        vc4 = false;
        
        }else{
            alert("Please select every option!")
        }
    
    
        
}

function PlaceOrder(){
    var tot = orderTotal.toFixed(2);
    if (isBasketEmpty==false){
        if (drinksPurchased >=10){
            if (totalDrinks >=2){
                tot = tot - 2.85;
                alert("You've reached 10 loyalty points. 1 drink has been discounted");
                if (confirm("Your total is: £" + tot + ", would you like to continue?") == true){
                    alert("Your order has been placed! Thank you");
                    var myNode = document.getElementById('basket');
                    var size = document.getElementById("size");
                    var name = document.getElementById("name");
                    var extras = document.getElementById("extras");
                    var addDrinks = drinksPurchased - 10;
                    localStorage.setItem("drinksHistory", addDrinks);
                    console.log(addDrinks);

                    myNode.innerHTML = '';
                    location.reload();

                } else{
                    alert("You've cancelled placing the order! Please continue");
                }                   
            }
            else{
                tot = tot - 2.45
                alert("You've reached 10 loyalty points. 1 drink has been discounted")
                if (confirm("Your total is: £" + tot + ", would you like to continue?") == true){
                    alert("Your order has been placed! Thank you");
                    var myNode = document.getElementById('basket');
                    var size = document.getElementById("size");
                    var name = document.getElementById("name");
                    var extras = document.getElementById("extras");
                    var addDrinks = drinksPurchased - 10;
                    localStorage.setItem("drinksHistory", addDrinks);
                    console.log(addDrinks);

                    myNode.innerHTML = '';
                    location.reload();

                } else{
                    alert("You've cancelled placing the order! Please continue");
                } 
            }
        }
        else{
            if (confirm("Your total is: £" + tot + ", would you like to continue?") == true){
                alert("Your order has been placed! Thank you");
                var myNode = document.getElementById('basket');
                var size = document.getElementById("size");
                var name = document.getElementById("name");
                var extras = document.getElementById("extras");
                var addDrinks = drinksPurchased + totalDrinks;
                localStorage.setItem("drinksHistory", addDrinks);
                console.log(addDrinks);

                myNode.innerHTML = '';
                location.reload();

            } else{
                alert("You've cancelled placing the order! Please continue");
            }   
        }
    }
    
    else{
        alert("Your basket is empty!")
    }
    
}


