const basketBtn = document.querySelector(".basketBtn") as HTMLParagraphElement;

interface BasketItem {
  food: string;
  cost: number;
  index: number;
}

const addToBasket = (foodName: string, price: number, index: number) => {
  const divBasket = document.querySelector(`#basketDiv`)! as HTMLDivElement;
  const data: BasketItem = {
    food: foodName,
    cost: price,
    index: index,
  };

  const savedData = localStorage.getItem("basketItems");
  let basketItems: BasketItem[] = [];

  if (savedData) {
    basketItems = JSON.parse(savedData);
  }

  basketItems.push(data);

  localStorage.setItem("basketItems", JSON.stringify(basketItems));

  basketBtn.style.color = "rgb(215 33 75 / 61%)";
  divBasket.style.border = "3px solid rgb(215 33 75 / 61%)";
  setTimeout(() => {
    basketBtn.style.color = "";
    divBasket.style.border = `3px solid #0f0f125c`;
  }, 400);

  showBasketItems();
};

const showBasketItems = () => {
  const basketDiv = document.querySelector(".basketDiv")! as HTMLDivElement;
  const totalPaymentDiv = document.querySelector(
    `.totalPaymentDiv`
  )! as HTMLDivElement;
  const savedData = localStorage.getItem("basketItems");
  let showBasketHTML: string = "";
  let totalPayment: number = 0;

  if (savedData) {
    const basketItems: BasketItem[] = JSON.parse(savedData);

    basketItems.forEach((item, index) => {
      showBasketHTML += `
        <div id="basketOrderInfo">
          <div>
            <p>${item.food}</p>
            <p>${item.cost} PLN</p>
          </div>
          <div>
            <div id="btnDiv">
              <button onclick="removeItemFromBasket('${item.food}')"><b>Usuń</b></button>
            </div>
          </div>
        </div>
      `;
      totalPayment += item.cost;
    });
  }

  basketDiv.innerHTML = showBasketHTML;

  if (showBasketHTML !== "") {
    totalPaymentDiv.innerHTML = `
    <p>Do zapłaty: ${totalPayment.toFixed(2)} PLN</p>
    <button onclick="changeForOrderDetails()"><b>Zamów</b></button>
    `;
  } else {
    totalPaymentDiv.innerHTML = "";
  }
};

showBasketItems();

const removeItemFromBasket = (food: string) => {
  const savedData = localStorage.getItem("basketItems");

  if (savedData) {
    let basketItems: BasketItem[] = JSON.parse(savedData);
    const index = basketItems.findIndex((item) => item.food === food);

    if (index !== -1) {
      basketItems.splice(index, 1);
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
      showBasketItems();
    }
  }
};

const changeForOrderDetails = () => {
  const orderDetails = document.querySelector(
    `.orderDetails`
  )! as HTMLDivElement;
  orderDetails.style.display = "flex";
};

const btnCompleteOrder = document.querySelector(
  `.btnCompleteOrder`
)! as HTMLButtonElement;

btnCompleteOrder.addEventListener(`click`, () => {
  const orderDetails = document.querySelector(
    ".orderDetails"
  )! as HTMLDivElement;
  const nameInput = orderDetails.querySelector(
    "input:nth-of-type(1)"
  )! as HTMLInputElement;
  const surnameInput = orderDetails.querySelector(
    "input:nth-of-type(2)"
  )! as HTMLInputElement;
  const addressInput = orderDetails.querySelector(
    "input:nth-of-type(3)"
  )! as HTMLInputElement;
  const phoneInput = orderDetails.querySelector(
    "input:nth-of-type(4)"
  )! as HTMLInputElement;

  if (
    nameInput.value &&
    surnameInput.value &&
    addressInput.value &&
    phoneInput.value !== ""
  ) {
    alert(`Zamówienie zostało złożone.`);
    location.reload();
    localStorage.clear();
  } else {
    alert(`Podaj dane do zamówienia`);
  }
});
