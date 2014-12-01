var tbtAppServices = angular.module('tbtAppServices', ['ngResource']);

tbtAppServices.service('Submit', function () {

 this.check = function (id, input, questions) {
  var val = false
  angular.forEach(questions, function (item, key) {
   if(input == item.Answer && id == item.sqid )
   {
    val = true;
   }
  });
  return val;
 }

 this.isWin = function (val) {

  var vals = [7, 56, 448, 73, 146, 292, 273, 84];
  var win = false;
  angular.forEach(vals, function (item, key) {
   if(item == val)
   {
    win = true
   }
  });
  return win;
 }
});