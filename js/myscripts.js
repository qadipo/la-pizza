// Business logic functions
function laPizza (size, crust, topping){
    this.chosenSize = size;
    this.chosenCrust = crust;
    this.chosenTopping = topping;
};

laPizza.prototype.getSizePrice = function(){
    sizePrice = 0;
    if(this.chosenSize == 'small'){
        sizePrice = 300;
    } else if(this.chosenSize == 'medium'){
        sizePrice = 700;
    } else if(this.chosenSize == 'large'){
        sizePrice = 100;
    }
    return sizePrice;
};

laPizza.prototype.getCrustPrize = function(){
    crustPrice = 0;
    if(this.chosenCrust == 'crispy'){
        crustPrice = 200;
    } else if(this.chosenCrust == 'stuffed'){
        crustPrice = 250;
    } else if(this.chosenCrust == 'glutten free'){
        crustPrice = 400;
    }
    return crustPrice;
};

laPizza.prototype.getToppingPrice = function(){
    toppingPrice = 0;

    vegetarianToppings = ['Pineapple','Mushrooms','Spinach','Chillies','Onion','Garlic'];
    meatToppings = ['Chicken','Tuna','Bacon'];

    topping = this.chosenTopping;
    //Factoring the vegetarian options
    for (i=0; i<topping.length; i++){
        if(vegetarianToppings.includes(topping[i])){
            if(this.chosenSize == 'small'){
                toppingPrice += 150;
            } else if (this.chosenSize == 'medium'){
                toppingPrice += 250;
            } else if (this.chosenSize == 'large'){
                toppingPrice += 350;
            }
        } else if (meatToppings.includes(topping[i])){
            if(this.chosenSize == 'small'){
                toppingPrice += 200;
            } else if (this.chosenSize == 'medium'){
                toppingPrice += 300;
            } else if (this.chosenSize == 'large'){
                toppingPrice += 400;
            }
        };
    };
    return toppingPrice;
};

// User Interface operations
var selectedSize = '';
var selectedCrust = '';

function getSelectedSize(){
    if(document.getElementById("small").checked){
        selectedSize = document.getElementById("small").value;
    } else if(document.getElementById("medium").checked){
        selectedSize = document.getElementById("medium").value;
    } else if(document.getElementById("large").checked){
        selectedSize = document.getElementById("large").value;
    }
    return selectedSize;
};

function getSelectedCrust(){
    if(document.getElementById("crispy").checked){
        selectedCrust = document.getElementById("crispy").value;
    } else if(document.getElementById("stuffed").checked){
        selectedCrust = document.getElementById("stuffed").value;
    } else if(document.getElementById("glutten free").checked){
        selectedCrust = document.getElementById("glutten free").value;
    }
    return selectedCrust;
};


$(document).ready(function(){
    $('#myForm').submit(function(e){
        e.preventDefault();
        var mySize = getSelectedSize();
        var myCrust = getSelectedCrust();
        var myToppings = $("#myToppings").val();
        var myNumber = $('.count').val();

        var newPizza = new Pizza(mySize,myCrust,myToppings);

        var price = newPizza.getSizePrice() + newPizza.getCrustPrize() + newPizza.getToppingPrice();

        var delivery = document.getElementById("delivery");

        var location = '';

        var deliveryCost = 0;

        if(delivery == true){
            alert("You will be charged KES 250 for the delivery");
            location = prompt("What is the Delivery Location? ");
            deliveryCost = 250;
            price = (price * myNumber) + deliveryCost;
            alert("Delivery will be made in " + location)
        } else {
            price = price * myNumber
        }



});

};