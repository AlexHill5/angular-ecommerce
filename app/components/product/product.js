angular.module('ecommerce').component('product', {
  templateUrl: 'app/components/product/product.html',
  bindings:{
    product: "<",
    canAddProduct: "<"
  },
  controllerAs: 'pd', 
  controller: function(cartSrvc){
    this.addItem = function(){
      console.log(this.product)
      cartSrvc.addItem(this.product)
    }
  }
})