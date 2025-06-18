let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {
  const modal = document.getElementById("cart-modal");
  const itemsList = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  itemsList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} – €${item.price.toFixed(2)}`;
    itemsList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total.toFixed(2);
  modal.style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

updateCartCount();
