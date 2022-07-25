// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const total = price * quantity; 
  const subTotal = product.querySelector('.subtotal span');
  return subTotal.innerHTML = total;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let sum = 0;
  for (let i = 0; i < products.length; i++){
    sum += updateSubtotal(products[i]);
  }


  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sum;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const targetRemove = target.parentNode.parentNode;
  const parentOfTarget = targetRemove.parentNode;
  parentOfTarget.removeChild(targetRemove);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const name = document.querySelector('.create-product').firstElementChild.firstElementChild;
  const price = document.querySelector('.create-product td input[type = number]').value;
  console.log(name, price);
  const newProduct = document.createElement('tr');
  newProduct.innerHTML = 
  `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  const table = document.querySelector("tbody");
  table.appendChild(newProduct);
  //really can't figure this one out :( 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Remove Product 
  const removeButton = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButton.length; i++){
    removeButton[i].addEventListener('click', removeProduct);
  }
  //Create Product
  const createProductButton = document.querySelector('#create');
  createProductButton.addEventListener('click', createProduct); 
});