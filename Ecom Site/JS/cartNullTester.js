console.log("JS CONNECTED");

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray){
    output += "<li>"
    +cartArray[i].name
    +" : <input class='count-item' type='number' data-name='"+cartArray[i].name+"' value='"+cartArray[i].count+"' >"
    +" for $"
    +cartArray[i].total
    +"<button class='delete-item' data-name='"+cartArray[i].name+"'>-1</button>"
    +"<button class='remove-all'data-name='"+cartArray[i].name+"'>Remove All</button>"
    "</li>"
  }
  $("#show-cart").html(output);
  $("#item-count").html( shoppingCart.countCart() );
  $("#total-cart").html( shoppingCart.totalCart() );
  console.log(shoppingCart.countCart());
  console.log(shoppingCart.cart);
}

$(".add-to-cart").click(function(event){
  event.preventDefault();
  var name = $(this).attr("data-name");
  var price = Number ($(this).attr("data-price"));

  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
  shoppingCart.saveCart();
});

$("#clear-cart").click(function(event){
  shoppingCart.clearCart ();
  displayCart ();
  shoppingCart.saveCart ();
});

$("#show-cart").on("click",".delete-item", function(event){
  var name = $(this).attr("data-name");
  shoppingCart.removeItemFromCart(name);
  displayCart();
});

$("#show-cart").on("click",".remove-all", function(event){
  var name = $(this).attr("data-name");
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});

$("#show-cart").on("change", ".count-item", function(event){
  var name = $(this).attr('data-name');
  var count = Number ($(this).val());
  if (count == 0){
  }
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

var shoppingCart = {};
shoppingCart.cart = [];
shoppingCart.Item = function (name, price, count){
  this.name = name
  this.price = price
  this.count = count
};

shoppingCart.addItemToCart = function(name, price, count) {
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      this.cart[i].count += count;
      return;
    }
  }
  var item = new this.Item(name, price, count);
  this.cart.push(item);
  this.saveCart();
};

shoppingCart.setCountForItem = function(name, count){
  for (var i in this.cart) {
    if(this.cart[i].name === name){
      this.cart[i].count = count;
      if (this.cart[i].count == 0 ){
        this.cart.splice(i,1);
      }
      break;
    }
  }
  this.saveCart();
};
shoppingCart.removeItemFromCart = function (name){
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      if (this.cart[i].count > 1){
        this.cart[i].count -= 1;
        break;
      }
      this.cart.splice(i,1);
      break;
    }
  }
  this.saveCart();
};
shoppingCart.removeItemFromCartAll = function (name) { // Removes all item name
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      this.cart.splice(i, 1);
      break;
    }
  }
  this.saveCart();
};
shoppingCart.clearCart = function(){
  this.cart = [];
  this.saveCart();
};

shoppingCart.countCart = function() {
  var totalCount = 1;
  for(var i in this.cart) {
    totalCount += this.cart[i].count;
  }
  return totalCount;
};

shoppingCart.totalCart = function() {
  var totalCost = 0;
  for (var i in this.cart) {
    totalCost += this.cart[i].price * this.cart[i].count;
  }
  return totalCost.toFixed(2);
};


shoppingCart.listCart = function() {// array of Items
  var cartCopy = [];
  for (var i in this.cart){
    var item = this.cart[i];
    var itemCopy = {};
    for (var p in item) {
      itemCopy[p] = item[p];
    }
    itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy;
};

shoppingCart.saveCart = function(){
  localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
};

shoppingCart.loadCart = function() {
  this.cart = JSON.parse (localStorage.getItem("shoppingCart"));
};


shoppingCart.loadCart();
displayCart();
