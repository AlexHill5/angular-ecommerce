angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  // Setup Addition Routing Here.
  $stateProvider.state('products', {
    url:'/products',
    templateUrl:'app/views/components/components.html',
    controller:'componentsCtrl'
  })
  .state('cart', {
    url:'/cart',
    templateUrl:'app/views/components/Cart.html'
  })
    .state('home', {
    url:'/',
    templateUrl:'app/views/components/home.html'
  })
  
  $urlRouterProvider.otherwise('/');
});
