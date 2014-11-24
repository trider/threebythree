var tbtAppControllers = angular.module('tbtAppControllers', []);



tbtAppControllers.controller('tbtCtrl', ['$scope', '$location', 'Submit',
  function ($scope, $location, Submit)
  {
    
   angular.element("#card").hide();
   $scope.answers = {
    "A": "Jerusalem",
    "B": "Tel Aviv",
    "C": "Haifa"
   };
   $scope.answer = "A";

   $scope.showid = function (sqid) {
    angular.element("#grid").hide();
    angular.element("#card").show();
    $scope.Questions = "What is the capital of Israel?";
    $scope.Questions = "?מה היא עיר הבירה של ישראל";

    $scope.sqid = sqid;
   };

   $scope.submit = function () {
    
    angular.element("#grid").show();
    angular.element("#card").hide();

    var success = new Audio('data/success.mp3');
    var fail = new Audio('data/fail.mp3');
   

    $scope.result = Submit.check($scope.ans, $scope.answer);
    if ($scope.result)
    {
     angular.element($scope.sqid).text("X");
     success.play();
    }
    else
    {
     angular.element($scope.sqid).text("O");
     fail.play();
    }
 
   }





  }]);

  