angular.module('myApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/')
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./public/views/main.html"
    })
})
