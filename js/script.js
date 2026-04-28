document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".card");
  const totalDisplay = document.querySelector(".total");

  // Calcul du total
  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".card").forEach(product => {
      const price = parseFloat(
        product.querySelector(".unit-price").textContent
          .replace("$", "")
          .trim()
      );

      const quantity = parseInt(
        product.querySelector(".quantity").textContent
      );

      total += price * quantity;
    });

    totalDisplay.textContent = total + " $";
  }

  // Gestion de chaque produit
  products.forEach(product => {
    const plusBtn = product.querySelector(".fa-plus-circle");
    const minusBtn = product.querySelector(".fa-minus-circle");
    const quantity = product.querySelector(".quantity");
    const deleteBtn = product.querySelector(".fa-trash-alt");
    const likeBtn = product.querySelector(".fa-heart");

    // ➕ Ajouter quantité
    plusBtn.addEventListener("click", () => {
      quantity.textContent = parseInt(quantity.textContent) + 1;
      updateTotal();
    });

    // ➖ Réduire quantité
    minusBtn.addEventListener("click", () => {
      let value = parseInt(quantity.textContent);

      if (value > 0) {
        quantity.textContent = value - 1;
        updateTotal();
      }
    });

    // 🗑 Supprimer produit + retirer son prix du total
    deleteBtn.addEventListener("click", () => {
      product.remove();
      updateTotal();
    });

    // ❤️ Like / Unlike
    likeBtn.addEventListener("click", () => {
      if (likeBtn.style.color === "red") {
        likeBtn.style.color = "black";
      } else {
        likeBtn.style.color = "red";
      }
    });
  });

  // Initialisation
  updateTotal();
});