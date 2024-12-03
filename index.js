const cards = document.querySelector('.cards');
const inp = document.querySelector('#inp')
const url = "https://fakestoreapi.com/products";

let products = [];
fetch(url)
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products); 
    })
    .catch(error => console.error('Error:', error));


function displayProducts(products){
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card')
        card.innerHTML = `<img src="${product.image}" alt="${product.title}">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                </div>
                <button class="butt" type="submit">View Details</button>
                `;
        cards.appendChild(card)
    });
}

inp.addEventListener('input',()=>{
    const field = inp.value.toLowerCase();
    console.log(products)
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(field)
    );
    console.log(filteredProducts);
    cards.innerHTML = ''
    displayProducts(filteredProducts);

})

