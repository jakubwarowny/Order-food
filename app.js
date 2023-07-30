fetch("menu.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var pizzaDiv = document.querySelector(".pizzaDiv");
    var pizzaMenuHTML = "";
    data.pizza.forEach(function (pizza, index) {
        pizzaMenuHTML += "\n        <div id=foodMenu>\n        <div>\n          <p><b>".concat(pizza.name, "</b></p>\n          <p><i>").concat(pizza.description, "</i></p>\n          <p>").concat(pizza.price, " PLN</p>\n          </div>\n        <div id=\"addToBasket\" class=\"addToBasket\">\n          <button onclick=\"addToBasket('").concat(pizza.name, "', ").concat(pizza.price, ", ").concat(index, ")\"><b>Dodaj do koszyka</b></button>\n        </div>\n        </div>\n        \n      ");
    });
    pizzaDiv.innerHTML = pizzaMenuHTML;
    return data;
})
    .then(function (data) {
    var saladDiv = document.querySelector(".saladDiv");
    var saladMenuHTML = "";
    data.salad.forEach(function (salad, index) {
        saladMenuHTML += "\n        <div id=foodMenu>\n        <div>\n          <p><b>".concat(salad.name, "</b></p>\n          <p><i>").concat(salad.description, "</i></p>\n          <p>").concat(salad.price, " PLN</p>\n          </div>\n          <div><button onclick=\"addToBasket('").concat(salad.name, "', ").concat(salad.price, ", ").concat(index, ")\"><b>Dodaj do koszyka</b></button></div>\n        </div>\n        ");
    });
    saladDiv.innerHTML = saladMenuHTML;
    return data;
})
    .then(function (data) {
    var sauceDiv = document.querySelector(".sauceDiv");
    var sauceMenuHTML = "";
    data.sauce.forEach(function (sauce, index) {
        sauceMenuHTML += "\n        <div id=foodMenu>\n        <div>\n          <p><b>".concat(sauce.name, "</b></p>\n          <p>").concat(sauce.price, " PLN</p>\n          </div>\n          <div><button onclick=\"addToBasket('").concat(sauce.name, "', ").concat(sauce.price, ", ").concat(index, ")\"><b>Dodaj do koszyka</b></button></div>\n        </div>\n        ");
    });
    sauceDiv.innerHTML = sauceMenuHTML;
    return data;
})
    .then(function (data) {
    var drinkDiv = document.querySelector(".drinkDiv");
    var drinkMenuHTML = "";
    data.drink.forEach(function (drink, index) {
        drinkMenuHTML += "\n        <div id=foodMenu>\n        <div>\n          <p><b>".concat(drink.name, "</b></p>\n          <p>").concat(drink.price, " PLN</p>\n          </div>\n          <div><button onclick=\"addToBasket('").concat(drink.name, "', ").concat(drink.price, ", ").concat(index, ")\"><b>Dodaj do koszyka</b></button></div>\n        </div>\n        ");
    });
    drinkDiv.innerHTML = drinkMenuHTML;
    return data;
})
    .catch(function (error) {
    console.error(error);
});
