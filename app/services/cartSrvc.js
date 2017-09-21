angular.module('ecommerce').service('cartSrvc', function(){
  // Creating a cart.  In a real app we would store this either
  // in the app storage, or send it to the backend and save it
  // on our server.
  let cart = [{
amt: 1,
product : {
name:'Shoes',
imageUrl:'https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Boat_Shoes._V530666624_.jpg',
description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
price:25
}}];

  // Basic add a new line item when we add an item, with amt 1.
  this.addItem = function(newItem){
    cart.push(Object.assign({}, {amt:1,product:newItem}));
  }

  // return the card object
  this.getCart = function(){
    return cart;
  }

  // return the total value of the cart.  This way we can write it once
  // and use it anywhere we need to. 
  this.getTotal = function(){
    return cart.reduce((total, item)=>{
      return total+item.product.price*item.amt
    },0);
  }

})
