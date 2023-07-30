var basketBtn = document.querySelector(".basketBtn");
var addToBasket = function (foodName, price, index) {
    var divBasket = document.querySelector("#basketDiv");
    var data = {
        food: foodName,
        cost: price,
        index: index,
    };
    var savedData = localStorage.getItem("basketItems");
    var basketItems = [];
    if (savedData) {
        basketItems = JSON.parse(savedData);
    }
    basketItems.push(data);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    basketBtn.style.color = "rgb(215 33 75 / 61%)";
    divBasket.style.border = "3px solid rgb(215 33 75 / 61%)";
    setTimeout(function () {
        basketBtn.style.color = "";
        divBasket.style.border = "3px solid #0f0f125c";
    }, 400);
    showBasketItems();
};
var showBasketItems = function () {
    var basketDiv = document.querySelector(".basketDiv");
    var totalPaymentDiv = document.querySelector(".totalPaymentDiv");
    var savedData = localStorage.getItem("basketItems");
    var showBasketHTML = "";
    var totalPayment = 0;
    if (savedData) {
        var basketItems = JSON.parse(savedData);
        basketItems.forEach(function (item, index) {
            showBasketHTML += "\n        <div id=\"basketOrderInfo\">\n          <div>\n            <p>".concat(item.food, "</p>\n            <p>").concat(item.cost, " PLN</p>\n          </div>\n          <div>\n            <div id=\"btnDiv\">\n              <button onclick=\"removeItemFromBasket('").concat(item.food, "')\"><b>Usu\u0144</b></button>\n            </div>\n          </div>\n        </div>\n      ");
            totalPayment += item.cost;
        });
    }
    basketDiv.innerHTML = showBasketHTML;
    if (showBasketHTML !== "") {
        totalPaymentDiv.innerHTML = "\n    <p>Do zap\u0142aty: ".concat(totalPayment.toFixed(2), " PLN</p>\n    <button onclick=\"changeForOrderDetails()\"><b>Zam\u00F3w</b></button>\n    ");
    }
    else {
        totalPaymentDiv.innerHTML = "";
    }
};
showBasketItems();
var removeItemFromBasket = function (food) {
    var savedData = localStorage.getItem("basketItems");
    if (savedData) {
        var basketItems = JSON.parse(savedData);
        var index = basketItems.findIndex(function (item) { return item.food === food; });
        if (index !== -1) {
            basketItems.splice(index, 1);
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            showBasketItems();
        }
    }
};
var changeForOrderDetails = function () {
    var orderDetails = document.querySelector(".orderDetails");
    orderDetails.style.display = "flex";
};
var btnCompleteOrder = document.querySelector(".btnCompleteOrder");
btnCompleteOrder.addEventListener("click", function () {
    var orderDetails = document.querySelector(".orderDetails");
    var nameInput = orderDetails.querySelector("input:nth-of-type(1)");
    var surnameInput = orderDetails.querySelector("input:nth-of-type(2)");
    var addressInput = orderDetails.querySelector("input:nth-of-type(3)");
    var phoneInput = orderDetails.querySelector("input:nth-of-type(4)");
    if (nameInput.value &&
        surnameInput.value &&
        addressInput.value &&
        phoneInput.value !== "") {
        alert("Zam\u00F3wienie zosta\u0142o z\u0142o\u017Cone.");
        location.reload();
        localStorage.clear();
    }
    else {
        alert("Podaj dane do zam\u00F3wienia");
    }
});
