'use strict';

// Declare app level module which depends on filters, and services
var tbtApp = angular.module('tbtApp', [ 'ngRoute', 'tbtAppControllers', 'tbtAppServices', 'tbtAppDirectives']);

tbtApp.config(['$routeProvider',
  function ($routeProvider)
  {
  	$routeProvider.
        when('/tbt', {
         templateUrl: 'partials/welcome.html',
         controller: 'tbtCtrl'
        }).
								otherwise({
										redirectTo: '/tbt'
								});


  } ]);
