let totalCost = 0

const plus = document.querySelectorAll('.plus')

const mainBody = document.querySelector('main')

let bill = document.createElement('div')


bill.innerHTML = `<div class='bill'>
            <h2>your Order</h2>
            </div> 
            <div class='items'>
            </div>

            <button id='submit'>Complete Order</button>`

let items = document.querySelector('.items')

plus.forEach(plusBtn => { 
    plusBtn.addEventListener('click', function() {

        const itemName = plusBtn.dataset.name
        const itemPrice = parseInt(plusBtn.dataset.price)

        totalCost += itemPrice;
        
        const item = document.createElement('div')
        item.innerHTML = `
                <div class='each-item'>
                    <h2>${itemName}</h2>
                    <p class='remove'>remove</p>
                </div>
                <div>$${itemPrice}</div>
                <div class='total-price'>
                    <h2>Total Price:</h2>
                    <div>$${totalCost}</div>
                </div>
            
            `

        items.innerHTML += item.innerHTML

        mainBody.appendChild(bill) 


    })
})