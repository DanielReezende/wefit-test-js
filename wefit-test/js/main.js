const menu = document.getElementsByClassName("btn-group-vertical")[0];
const header = document.getElementsByClassName("jumbotron")[0];
const list = document.getElementsByClassName("list-group")[0];

function handleStyleMenu() {
  menu.classList.remove("btn-group-vertical");
  menu.classList.add("btn-group-horizontal");
}

function handleStyleHeader() {
  let linkHeader;

  header.classList.add("bg-secondary");
  header.classList.add("text-right");
  header.classList.add("text-white");

  header.childNodes.forEach(child => {
    if (child.className === "btn btn-primary btn-lg") {
      linkHeader = child;
      return;
    }
  })

  linkHeader.classList.remove("btn-primary");
  linkHeader.classList.add("btn-success");
}

function handleAddItemsList() {
  list.firstElementChild.classList.remove("active");

  const items = ["Quarto item", "Quinto item"]

  items.forEach(element => {
    let item = document.createElement("li");

    if (element === "Quarto item") item.classList.add("active");

    item.classList.add("list-group-item");

    item.textContent = element;

    list.appendChild(item);
  });
}

function handleOrderingCards() {
  const cardContainer = document.getElementsByClassName("row")[2];
  const cards = cardContainer.querySelectorAll('.col-lg-3');

  const order = [3, 0, 2, 1];

  function searchButtonInCardAnimals(card) {
    const h5 = card.querySelector('.card-title');
    if (h5 && h5.textContent === 'Animais') {

      const link = card.querySelector('a');
      if (link) {
        link.classList.remove("btn-primary");
        link.classList.add("btn-success");
      }
    }
  }

  cards.forEach(card => {
    cardContainer.removeChild(card);

    searchButtonInCardAnimals(card);

    order.forEach(index => {
      cardContainer.appendChild(cards[index]);
    })
  });
}

handleStyleMenu()

handleStyleHeader()

handleOrderingCards()

handleAddItemsList()


