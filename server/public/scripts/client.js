console.log('JS');

let myApp = angular.module( 'myApp', [] );

myApp.controller( 'FoodController', function(){
    let vm = this;
    vm.someFoods = [];

    vm.addSomeFood = function(){
        console.log('in addSomeFood', vm.foodIn);
        console.log('my random foods of the day', vm.someFoods);
        
        vm.someFoods.push( vm.foodIn);
        vm.foodIn = '';        
    }// end someFoods
});//end controller
