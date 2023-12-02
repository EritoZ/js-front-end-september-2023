function solve() {
   const productsBuyButtons = Array.from(document.getElementsByClassName('add-product'));

   const checkoutArea = document.querySelector('textarea');
   const checkoutButton = document.getElementsByClassName('checkout')[0];

   const takenProducts = [];
   let totalPrice = 0;

   for (const button of productsBuyButtons) {
      button.addEventListener('click', buyProduct);
   }

   checkoutButton.addEventListener('click', checkoutProducts);

   function buyProduct(e) {
      const product = e.target.parentNode.parentNode;
      const productName = product.getElementsByClassName('product-title')[0];
      const productNameString = productName.textContent;

      const productPrice = product.lastElementChild;

      totalPrice += Number(productPrice.textContent);

      if (!takenProducts.includes(productNameString)) {
         takenProducts.push(productNameString);
      }

      checkoutArea.textContent += `Added ${productNameString} for ${productPrice.textContent} to the cart.\n`;
   }

   function checkoutProducts(e) {
      for (const button of productsBuyButtons) {
         button.disabled = true;
      }
      e.target.disabled = true;

      checkoutArea.textContent += `You bought ${takenProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
}