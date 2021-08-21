//default promo code
function promoInput() {
    document.getElementById('promo-input').removeAttribute('disabled')
}

//for default input
function defaultInput(initiateCost) {
    document.getElementById(initiateCost).innerText = 0 ;
    totalPrice();
    promoInput();
}


//for extra price
function extraPrice(id, price) {
    document.getElementById(id).innerText = price;
    totalPrice();
    promoInput();
}


// total calculation
function totalPrice() {
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const memoryCost = parseInt(memoryPrice);
    const storagePrice = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storagePrice);
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryPrice);
    const bestCost = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestCost);
    document.getElementById('total-cost').innerText = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('extra-total-cost').innerText = bestPrice + memoryCost + storageCost + deliveryCost;
}


// for 8 gb memory
document.getElementById('8gb-memory').addEventListener('click',function(){
    defaultInput('memory-cost');
})
//for 256gb storage
document.getElementById('256gb-ssd').addEventListener('click',function(){
    defaultInput('storage-cost');
})
//for free delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    defaultInput('delivery-cost');
})


//For extra cost
//for 16gb-memory
document.getElementById('16gb-memory').addEventListener("click", function () {
    extraPrice('memory-cost', 180);
})
//for 512gb storage
document.getElementById('512gb-ssd').addEventListener("click", function () {
    extraPrice('storage-cost', 100);
})
//for 1tb storage
document.getElementById('1tb-ssd').addEventListener("click", function () {
    extraPrice('storage-cost', 180);
})
//cost-delivery
document.getElementById('paid-delivery').addEventListener("click", function () {
    extraPrice('delivery-cost', 20);
})

//For promo code
document.getElementById('promo-apply-button').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value ;
    if (promoCode == 'stevekaku') {
        const extraTotal = parseFloat(document.getElementById('extra-total-cost').innerText);
        document.getElementById('extra-total-cost').innerText = extraTotal - (extraTotal * 0.2);
        promoInput.setAttribute('disabled', true);
    }
    else{
        alert("invalid promo code");
    }
    promoInput.value = '';
})