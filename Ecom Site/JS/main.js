// Opening and Closing Cart and Menu

function openSideMenu(){
  document.getElementById('side-menu').style.width = '250px';
};

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
};

function openCart(){
  document.getElementById('list-cart').style.width = '300px';
  if (shoppingCart.countCart() === 0){
    document.getElementById('list-cart').style.width = 0;
    window.alert("Cart is empty");
  }
};

function closeCart(){
  document.getElementById('list-cart').style.width = '0';
};

// Opening and Closing Cart and Menu

// Change Image on click

function changeFrontImg(){
  document.getElementById('mainImg').style = 'display: inline-block; background: url('+document.getElementById('front-view').src+') no-repeat center center; -webkit-background-size: 100% 100%; -moz-background-size: 100% 100%; -o-background-size: 100% 100%; background-size: 100% 100%; width: 100%;  height: 0; padding-top: 100%;';
  document.getElementById('front-view').style = "border: 1px solid grey;";
  document.getElementById('back-view').style = "border: none;";
}

function changeBackImg(){
  document.getElementById('mainImg').style = 'display: inline-block; background: url('+document.getElementById('back-view').src+') no-repeat center center; -webkit-background-size: 100% 100%; -moz-background-size: 100% 100%; -o-background-size: 100% 100%; background-size: 100% 100%; width: 100%; height: 0; padding-top: 100%;';
  document.getElementById('back-view').style = "border: 1px solid grey;";
  document.getElementById('front-view').style = "border: none;";
}

// Change Image on click
