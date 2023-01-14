const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const product = event.target.closest('.product');

        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.image').getAttribute('src'),
            title: product.querySelector('.pizzaName').innerText,
            price: product.querySelector('.itemCounterRightHalf').innerText,
            counter: product.querySelector('[data-counter]').innerText,
        }
        localStorageUtil.putProducts(productInfo);
        let arr = localStorageUtil.getProducts();
        console.log(arr)

        const cartWrapperHTML = `<div class="cart-item" data-id=${arr[arr.length-1].id}>
                              <div class="cart-item_img">
                                <img src=${arr[arr.length-1].imgSrc} alt="" class="img">
                              </div>
                              <div class="cart-item_description">
                                <div class="cart-item_title">${arr[arr.length-1].title}</div>
                                <div class="cart-item_price">${arr[arr.length-1].price}</div>
                                <div class="cart-item_details">
                                  <div class="wrapper cart-counter-wrapper">
                                    <div class="itemCount" data-action="minus">-</div>
                                    <div class="itemCurrent" data-counter>${arr[arr.length-1].counter}</div>
                                    <div class="itemCount" data-action="plus">+</div>
                                  </div>
                                </div>
                              </div>
                            </div>`
        cartWrapper.insertAdjacentHTML('beforeend', cartWrapperHTML);
    }
})

