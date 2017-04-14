var app = angular.module('nApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
        controller : "indexCtrl"
    })
    .when("/blog", {
        templateUrl : "blog/index.htm",
        controller : "blogCtrl"
    })
    .when("/cont", {
        templateUrl : "contribute.htm",
        controller : "contCtrl"
    })
    .when("/help", {
        templateUrl : "help.htm",
        controller : "helpCtrl"
    });
});