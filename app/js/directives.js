'use strict';

/* Directives */
var tbtAppDirectives = angular.module('tbtAppDirectives', []);

tbtAppDirectives.directive('molAbout', [function() {
   return {
						transclude: true,
      templateUrl: 'partials/about.html'
    };
  }]);

tbtAppDirectives.directive('myDetails', function ()
  {

  	return {
  		transclude: true,
  		templateUrl: 'partials/pages/offroad/day1.html'
  	};
  })
