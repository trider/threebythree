var tbtAppServices = angular.module('tbtAppServices', ['ngResource']);

tbtAppServices.service('Submit', function () {

 this.check = function (input, answer) {
  var val = false
  if (input == answer)
  {
   val =  true;
  }
  return val;
 }

});