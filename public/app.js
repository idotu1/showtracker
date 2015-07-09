angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$locationProvider','$routeProvider' function($locationProvider) {
        $locationProvider.html5Mode(true);


    },]);//function is also in the array