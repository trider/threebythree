var tbtAppServices = angular.module('tbtAppServices', ['ngResource']);

tbtAppServices.factory('Questions', ['$resource', function ($resource) {

 return $resource('data/questions.json', {}, {
  query: { method: 'GET', params: { id: 'question' }, isArray: true }
 });

}]);

tbtAppServices.service('Media', function () {

 this.showMedia = function (questions, id) {
  angular.forEach(questions, function (item, key) {
   if (id == item.sqid) {
    return item.display;
   }
  });
 }

});


tbtAppServices.service('Submit', function () {

 this.IsCellEmpty = function (sqid) {
  var val = true;
  var txt = angular.element(sqid).text();
  if(txt == "X" || txt =="O")
  {
   val = false;
  }
  return val;

 }


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
   if (item == val) {
    win = true;
   }
  });
  return win;
 }
});