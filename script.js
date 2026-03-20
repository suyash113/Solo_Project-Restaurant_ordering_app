let totalCost = 0

const plus = document.querySelectorAll('.plus')

const mainBody = document.querySelector('main')

let bill = document.createElement('div')
bill.classList.add("bill")

let totalItems = document.createElement('div')
totalItems.classList.add("total-items")

let totalPrice = document.createElement("div")
totalPrice.classList.add("total-price")

const subBtn = document.createElement('button')
subBtn.id = "submit"

plus.forEach(plusBtn => { 
    plusBtn.addEventListener('click', function() {

        const itemName = plusBtn.dataset.name
        const itemPrice = parseInt(plusBtn.dataset.price)

        totalCost += itemPrice;
        
        const item = document.createElement('div')
        item.classList.add("each-item")
        item.innerHTML = `
                        <h2>${itemName}</h2>
                        <p class='remove' data-price='${itemPrice}'>remove</p>
            `

        let eachItemPrice = document.createElement("div")
        eachItemPrice.textContent = `$${itemPrice}`

        bill.innerHTML = `
                <h2>your Order</h2>
                `
        
        let items = document.createElement('div')
        items.classList.add("items")

        item.addEventListener("click", function(e) {
            if(e.target.classList.contains("remove")){   
                const itemRemove = e.target.closest('.items')

                const price = parseInt(e.target.dataset.price)

                totalCost -= price
                
                if(totalCost >= 22) {
                    totalPrice.innerHTML = `
                    <h2>Total Price:</h2>
                        <div>10% Discount added $${totalCost*9/10}</div>`
                } else {
                    totalPrice.innerHTML = `
                    <h2>Total Price:</h2>
                        <div>$${totalCost}</div>`
                }

                if (itemRemove) {
                    itemRemove.remove()
                }
            }
            
        })

        if(totalCost >= 22) {
            totalPrice.innerHTML = `
            <h2>Total Price:</h2>
                <div>10% Discount added $${totalCost*9/10}</div>`
        } else {
            totalPrice.innerHTML = `
            <h2>Total Price:</h2>
                <div>$${totalCost}</div>`
        }

        mainBody.appendChild(bill)

        items.appendChild(item)


        items.appendChild(eachItemPrice)

        subBtn.textContent = `Complete Order`

        totalItems.appendChild(items)

        mainBody.appendChild(totalItems)

        mainBody.appendChild(totalPrice)

        mainBody.appendChild(subBtn)

    })
})

subBtn.addEventListener("click", function() {
    const modal = document.createElement("div")
    modal.classList.add("modal")
    modal.innerHTML = `<h2>Enter card details</h2>
        <div class='input'>
            <input type='text' class='details' id='name' placeholder='Enter your name'>
            <input type='text' class='details' id='number' placeholder='Enter card number'>
            <input type='text' class='details' id='cvv' placeholder='Enter CVV'>
        </div>

        <button id='pay-btn'>Pay</button>
    `
    mainBody.appendChild(modal)
    document.getElementById("pay-btn").addEventListener("click", function() {
        if (document.getElementById("name").value && document.getElementById("number").value && document.getElementById("cvv").value) {
        
        modal.style.display = 'none'

        bill.remove()
        totalItems.remove()
        totalPrice.remove()
        subBtn.remove()

        const message = document.createElement('div')
        message.classList.add("message")
        message.innerHTML = `<h3>Thanks, James! Your order is on its way!</h3>
                <p>Rate Your Order</p>

                <div class='rating'>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
        `

        mainBody.appendChild(message)
    }
    })

})