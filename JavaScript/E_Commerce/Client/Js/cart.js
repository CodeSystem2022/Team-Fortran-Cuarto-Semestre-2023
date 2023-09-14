//CONTEDENORES PADRE 
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
//const cart = [];
const cartBtn = document.getElementById("cart-btn");
<<<<<<< HEAD
const cartCounter = document.getElementById("cart-counter");
=======

>>>>>>> 6dff6dc (Agregamos semana 01-02-03 de JavaScript)
const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    
    //modal Header 
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose)

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title"
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //MODAL BODY   
<<<<<<< HEAD
    if(cart.length > 0) {
=======
>>>>>>> 6dff6dc (Agregamos semana 01-02-03 de JavaScript)
    cart.forEach((product)=> {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body"
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
        <div class="quantity">
            <span class="quantity-btn-decrese">-</span>
            <span class="quantity-input">${product.quanty}</span>
            <span class="quantity-btn-increse">+</span>
        </div>
            <div class="price">${product.price * product.quanty} $</div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);

        const decrese =modalBody.querySelector(".quantity-btn-decrese");
        decrese.addEventListener("click", ()=> {
            if(product.quanty !== 1){
              product.quanty--;
              displayCart();   
            }
        });

        const increse =modalBody.querySelector(".quantity-btn-increse");
        increse.addEventListener("click", () => {
            product.quanty++;
            displayCart();
        });

        //delete
        const deleteProduct =modalBody.querySelector(".delete-product");

        deleteProduct.addEventListener("click", ()=> {
            deleteCartProduct(product.id);
        })
    });

    //modal fotter
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `
    <div class="total-price">Total : ${total}</div>
<<<<<<< HEAD
    <button class="btn-primary" id="checkout-btn"> go to checkout</button>
    <div id="button-checkout"></div>
    `;
    modalContainer.append(modalFooter);
    //mercado pago
    const mercadopago = newMercadoPago("public_key",{
        locale: "es-AR",
    });
    const checkoutBtn = document.querySelector("#checkout-btn");
    } else {
        const modalText = document.createElement("h2");
        modalText.className = "model-body";
        modalText.innerText = "your cart is empty"
        modalContainer.append(modalText);
}
};

cartBtn.addEventListener("click" , function() {
    checkoutButton.remove();
    const orderData = {
      quantity: 1,
      description: "compra de ecommerce",
      price: total,
    };
  });
  
 fetch("htpp://localhost:8080/create_preference" ,{
    method: "POST" ,
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify(orderData),
 })
  .then(function (response) {
    return response.json();
})
.then(function (preference) {
    createCheckoutButton(preference.id);

})
.catch(function () {
    alert("Unexpected error");
});

function createCheckoutButton(preferenceId) {
    // Initialize checkout
  const bricksBuilder = mercadopago.bricks();

  const renderComponent = async (bricksBuilder) => {
     //if (window.checkoutButton) checkoutButton.unmount();

 await bricksBuilder.create(
    "wallet",
    "button-checkout", //class/id where the payment button will be displayed
    {
        initialization:  {
            preferenceId: preferenceId,
        },
        callbacks:
        {
            onError: (error) => console.error(error),
            onReady: () => {},
        },    }
 );
  };
  window.checkoutButton = renderComponent(bricksBuilder);
   } 
else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.textContent = "Your cart is empty";
    modalContainer.appendChild(modalText);
    }
  
  
  
  
=======

    `;
    modalContainer.append(modalFooter);
};

cartBtn.addEventListener("click", displayCart);
>>>>>>> 6dff6dc (Agregamos semana 01-02-03 de JavaScript)

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element)=> element.id === id);
    //console.log(foundId);
    cart.splice(foundId, 1);
    displayCart();
<<<<<<< HEAD
};

const displayCartCounter=()=> {
    const cartLength = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
    if(cartLength > 0){
        cartCounter.style= "block";
        cartCounter.innerText= cartLength;
    }else(
        cartCounter.style.display="none"
    );
    }
=======
};
>>>>>>> 6dff6dc (Agregamos semana 01-02-03 de JavaScript)
