let totalCost = 0

const plus = document.querySelectorAll('.plus')

const mainBody = document.querySelector('main')

let bill = document.createElement('div')
bill.classList.add("bill")

let totalItems = document.createElement('div')

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
                        <p class='remove'>remove</p>
            `

        let eachItemPrice = document.createElement("div")
        eachItemPrice.textContent = `$${itemPrice}`

        bill.innerHTML = `
                <h2>your Order</h2>
                `
        
        let items = document.createElement('div')
        items.classList.add("items")

       

        totalPrice.innerHTML = `
            <h2>Total Price:</h2>
                        <div>$${totalCost}</div>`

        mainBody.appendChild(bill)

        items.appendChild(item)


        items.appendChild(eachItemPrice)


        console.log(items.innerHTML)


        subBtn.textContent = `Complete Order`

        totalItems.appendChild(items)

        mainBody.appendChild(totalItems)

        mainBody.appendChild(totalPrice)

        mainBody.appendChild(subBtn)

    })
})