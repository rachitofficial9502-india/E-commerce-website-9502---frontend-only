let dummyData = [
    first = {
        img : "./imgs/GtaVimg.jpeg",
        name : "GTA V",
        description : "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
        price : "$ 2,499"
    },
    second = {
        img : "./imgs/tekken10img.jpeg",
        name : "Tekken 10",
        description : "Tekken is a Japanese media franchise centered on a series of fighting games developed and published by Bandai Namco Entertainment (formerly Namco).",
        price : "$ 3,499"
    }
]

const productList = document.querySelector(".product-list")
dummyData.forEach(product => {
    const productCard = document.createElement("div")
    productCard.classList.add("product")
    productCard.innerHTML += `
    <img src="${product.img}" alt="${product.name}">
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <h3>${product.price}</h3>
    <button id="buynow-btn">Buy Now</button><button id="addtocart-btn">Add to Cart</button>
    `
    productList.appendChild(productCard)
});
