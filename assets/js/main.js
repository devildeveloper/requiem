angular.module('requiem',['ngSails'])
		.config(['$sailsProvider', function ($sailsProvider) {
		    $sailsProvider.url = 'http://localhost:1337';
		}])
		.controller('loginController',loginController)
		.controller('userController',userController);
function loginController($scope,$sails){

};
function userController($scope,$sails){
	
};
$(document).on('ready',init);
function init(){
	$('.ui.accordion')
  		.accordion();
  	$('.popup')
  		.popup({
  			inline:true
  		})  		
}