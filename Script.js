const qtyInputs = document.querySelectorAll(".qty");
const totalDisplay = document.getElementById("total");

qtyInputs.forEach(input => {
  input.addEventListener("input", updateTotal);
});

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".pizza").forEach(pizza => {
    const price = Number(pizza.getAttribute("data-price"));
    const qty = Number(pizza.querySelector(".qty").value);
    total += price * qty;
  });
  totalDisplay.textContent = total;
}

function placeOrder() {
  const total = totalDisplay.textContent;
  if (Number(total) === 0) {
    alert("Please select at least one pizza to order!");
  } else {
    alert(`Your order has been placed 🥰!\nTotal amount: ₹${total}`);
    window.location.href = "recipt.html";

  }

}