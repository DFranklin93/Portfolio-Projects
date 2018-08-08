
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray){
    output += "<li><div class='leftBlock'><button onclick='gettingImg()'>Testing</button></div>"
    +"<div class='middleBlock'><h6>"
    +cartArray[i].name
    +"</h6>"
    +"<br>Size:"
    +cartArray[i].size
    +"<br> QTY: <input class='count-item' type='number' data-name='"+cartArray[i].name+"' value='"+cartArray[i].count+"' size='"+cartArray[i].size+"'>"
    +"<br>$"
    +cartArray[i].total
    +"</div>"
    +"<div class='rightBlock'><button class='remove-all'data-name='"+cartArray[i].name+"'>&times;</button></div></li>"
  }
  $("#show-cart").html(output);
  $("#item-count").html( shoppingCart.countCart() );
  if (shoppingCart.countCart() === 0){
    $("#total-cart").html( "Cart is empty");
  }else{
    $("#total-cart").html( "Subtotal: $" + shoppingCart.totalCart() );
  }
  console.log(shoppingCart.countCart());
  console.log(shoppingCart.cart);
}
// // // // // // // // // // //

function itemDetails (){
  var name = $("#consoleTest").attr("data-name");
  var sku = $("#consoleTest").attr("data-sku");
  var price = $("#consoleTest").attr("data-price");
  $("#item-sku").html(sku);
  $("#item-price").html(price);
}

// $("#product").on("click",".consoleTest", function(event){
//   var name = $(this).attr("data-name");
//   var sku = $(this).attr("data-sku");
//   var price = $(this).attr("data-price");
//   console.log("consoleTest");
//
//
// })

// // // // // // // // // // //
$(".add-to-cart").click(function(event){
  event.preventDefault();
  var name = $("#consoleTest").attr("data-name");
  var price = Number ($("#consoleTest").attr("data-price")) .toFixed(2);
  var count = Number ($("#item-amount").val());
  var size = document.getElementById("item-size").value;
  if (size !== ""){
    shoppingCart.addItemToCart(name, price, size, count);
    displayCart();
    shoppingCart.saveCart();
  }else{
    window.alert("Must Select Size");
  }
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
  var name = $(this).attr("data-name");
  var count = Number ($(this).val());
  var size = $(this).attr("size");
  shoppingCart.setCountForItem(name, size, count);
  displayCart();
  console.log(size);
});

function countPicker() {
  var name = $("#consoleTest").attr("data-name");
  var count = Number ($("#item-amount").val());
  var size = document.getElementById("item-size").value;
  shoppingCart.setCountForItem(name, size, count);
}

function gettingImg(){
  var img = document.getElementById("mainImg").style.background;
  console.log(img);
}

// $("#quantity-count").on("change", ".count-item", function(event){
//   var name = $(this).attr('data-name');
//   var count = Number ($(this).val());
//   shoppingCart.setCountForItem(name, count);
//   displayCart();
// })
// ***********************************************************

var shoppingCart = {};
shoppingCart.cart = [];
shoppingCart.Item = function (name, price, size, count){
  this.count = count
  this.name = name
  this.price = price
  this.size = document.getElementById("item-size").value

};
shoppingCart.addItemToCart = function(name, price, size, count) {
  var cartCopy = [];
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      if (this.cart[i].size === size){
        this.cart[i].count += count;
        return;
      }
    }
  }
  var item = new shoppingCart.Item(name, price, size, count);
  shoppingCart.cart.push(item);
  this.saveCart();
};

function itemSizing(){
  var size = document.getElementById("item-size").value;
}

shoppingCart.setCountForItem = function(name, size, count){
  for (var i in this.cart) {
    if(this.cart[i].name === name){
      if(this.cart[i].size === size){
        this.cart[i].count = count;
        if (this.cart[i].count == 0 ){
          this.cart.splice(i,1);
        }
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
  var totalCount = 0;
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


// var cart = [];
// var Item = function(name, price, count) {
//   this.name = name
//   this.price = price
//   this.count = count
// };
//
// function addItemToCart(name, price, count) {
//   for (var i in cart) {
//     if (cart[i].name === name) {
//       cart[i].count += count;
//       return;
//     }
//   }
//   var item = new Item(name, price, count);
//   cart.push(item);
//   saveCart();
// }
//
// function removeItemFromCart (name){
//   for (var i in cart) {
//     if (cart[i].name === name) {
//       if (cart[i].count > 1){
//         cart[i].count -= 1;
//         break;
//       }
//       cart.splice(i,1);
//       break;
//     }
//   }
//   saveCart();
// }
//
// // function removeItemFromCartMany(name, count) { //Removes one item
// //   for (var i in cart) {
// //     if (cart[i].name === name) {
// //       cart[i].count -= count;
// //       if (cart[i].count <= 0) {
// //         cart.splice(i, 1);
// //       }
// //       break;
// //     }
// //   }
// //   saveCart();
// // }
//
// function removeItemFromCartAll(name) { // Removes all item name
//   for (var i in cart) {
//     if (cart[i].name === name) {
//       cart.splice(i, 1);
//       break;
//     }
//   }
//   saveCart();
// }
//
// function clearCart(){
//   cart = [];
//   saveCart();
// }
//
// function countCart() {
//   var totalCount = 0;
//   for(var i in cart) {
//     totalCount += cart[i].count;
//   }
//   return totalCount;
// }
//
// function totalCart() {
//   var totalCost = 0;
//   for (var i in cart) {
//     totalCost += cart[i].price * cart[i].count;
//   }
//   return totalCost.toFixed(2);
// }
//
//
// function listCart() {// array of Items
//   var cartCopy = [];
//   for (var i in cart){
//     var item = cart[i];
//     var itemCopy = {};
//     for (var p in item) {
//       itemCopy[p] = item[p];
//     }
//     itemCopy.total = (item.price * item.count).toFixed(2);
//     cartCopy.push(itemCopy);
//   }
//   return cartCopy;
// }
//
// function saveCart(){
//   localStorage.setItem('shoppingCart', JSON.stringify(cart));
// }
//
// function loadCart() {
//   cart = JSON.parse (localStorage.getItem("shoppingCart"));
// }

shoppingCart.loadCart();
displayCart();
itemDetails();

// var array = listCart();
// console.log(array);
