function addToCart(item, price) {
    var cart = document.getElementById("cart");
    var listItem = document.createElement("li");
    listItem.innerText = item + " - $" + price.toFixed(2);
    cart.appendChild(listItem);
}
function cartfunction(){
    fetch(index.php)
    .then(response => response.text())
    .then(data =>{
        
    });
}