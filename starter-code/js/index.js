// window.onload = function() {

var calculatePriceButton = document.getElementById("calc-prices-button");
var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");
//   var itemPrice = document.getElementById("price");
//  price.style.fontWeight = "bold";

calculatePriceButton.onclick = getTotalPrice;
// createItemButton.onclick = createNewItem;

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;

  function deleteItem(e) {}
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

// Create a click event for the Calculate Prices button
// This event will execute a function that:
// Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM
function getTotalPrice() {
  let price = document.getElementsByClassName("price");
  let QTY = document.getElementsByClassName("QTY");
  // get price from DOM
  console.log(price[0].innerText.split("$")[1]);

  // get qty from DOM
  console.log(QTY);
  // multiply them together
  // update DOM
  // add all totals together
  // update total price

  function createQuantityInput() {}

  function createDeleteButton() {}

  function createQuantityNode() {}

  function createItemNode(dataType, itemData) {}

  function createNewItemRow(itemName, itemUnitPrice) {}

  function createNewItem() {}
}
// };
