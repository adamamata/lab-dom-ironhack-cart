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
  const name = document.querySelector('.create-product input[type = text]').innerHTML;
  const price = document.querySelector('.create-product input[type = number]').value;
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
  const createProductButton = document.querySelector('.create-product');
  createProductButton.addEventListener('click', createProduct); 
});