fetch("menu.json")
  .then((response) => response.json())
  .then((data) => {
    const pizzaDiv = document.querySelector(".pizzaDiv")! as HTMLDivElement;
    let pizzaMenuHTML: string = ``;

    data.pizza.forEach((pizza, index) => {
      pizzaMenuHTML += `
        <div id=foodMenu>
        <div>
          <p><b>${pizza.name}</b></p>
          <p><i>${pizza.description}</i></p>
          <p>${pizza.price} PLN</p>
          </div>
        <div id="addToBasket" class="addToBasket">
          <button onclick="addToBasket('${pizza.name}', ${pizza.price}, ${index})"><b>Dodaj do koszyka</b></button>
        </div>
        </div>
        
      `;
    });

    pizzaDiv.innerHTML = pizzaMenuHTML;
    return data;
  })
  .then((data) => {
    const saladDiv = document.querySelector(`.saladDiv`)! as HTMLDivElement;
    let saladMenuHTML: string = ``;

    data.salad.forEach((salad, index) => {
      saladMenuHTML += `
        <div id=foodMenu>
        <div>
          <p><b>${salad.name}</b></p>
          <p><i>${salad.description}</i></p>
          <p>${salad.price} PLN</p>
          </div>
          <div><button onclick="addToBasket('${salad.name}', ${salad.price}, ${index})"><b>Dodaj do koszyka</b></button></div>
        </div>
        `;
    });

    saladDiv.innerHTML = saladMenuHTML;
    return data;
  })
  .then((data) => {
    const sauceDiv = document.querySelector(`.sauceDiv`)! as HTMLDivElement;
    let sauceMenuHTML: string = ``;

    data.sauce.forEach((sauce, index) => {
      sauceMenuHTML += `
        <div id=foodMenu>
        <div>
          <p><b>${sauce.name}</b></p>
          <p>${sauce.price} PLN</p>
          </div>
          <div><button onclick="addToBasket('${sauce.name}', ${sauce.price}, ${index})"><b>Dodaj do koszyka</b></button></div>
        </div>
        `;
    });

    sauceDiv.innerHTML = sauceMenuHTML;
    return data;
  })
  .then((data) => {
    const drinkDiv = document.querySelector(`.drinkDiv`)! as HTMLDivElement;
    let drinkMenuHTML: string = ``;

    data.drink.forEach((drink, index) => {
      drinkMenuHTML += `
        <div id=foodMenu>
        <div>
          <p><b>${drink.name}</b></p>
          <p>${drink.price} PLN</p>
          </div>
          <div><button onclick="addToBasket('${drink.name}', ${drink.price}, ${index})"><b>Dodaj do koszyka</b></button></div>
        </div>
        `;
    });

    drinkDiv.innerHTML = drinkMenuHTML;
    return data;
  })
  .catch((error) => {
    console.error(error);
  });
