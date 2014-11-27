var tbtAppControllers = angular.module('tbtAppControllers', []);



tbtAppControllers.controller('tbtCtrl', ['$scope', '$location', 'Submit',
  function ($scope, $location, Submit)
  {
    
   angular.element("#card").hide();
   $scope.answers = {
    "A": "ירושלים",
    "B": "תל אביב",
    "C": "חיפה"
   };
   $scope.answer = "A";
   $scope.scores = new Array();
   

   $scope.showid = function (sqid, val) {
    angular.element("#grid").hide();
    angular.element("#card").show();
    //$scope.Questions = "What is the capital of Israel?";
    $scope.Questions = "?מה היא עיר הבירה של ישראל";
    $scope.sqid = sqid;
    $scope.val = val;
   };

   $scope.submit = function () {
    
    var success = new Audio('data/success.mp3');
    var fail = new Audio('data/fail.mp3');
    
    $scope.scores;
    $scope.result = Submit.check($scope.ans, $scope.answer);
    if ($scope.result)
    {
     var score = 0;
     $scope.scores.push({ sqid: $scope.sqid, val: $scope.val });
     console.log($scope.scores);

     angular.forEach($scope.scores, function (item, key) {
      score += Number(item.val);
     });
     
     $scope.score = score;
     

     angular.element($scope.sqid).text("X");
     success.play();
    }
    else
    {
     angular.element($scope.sqid).text("O");
     fail.play();
    }
    
    angular.element("#grid").show();
    angular.element("#card").hide();
    if (Submit.isWin($scope.score))
    {
     alert("win");
     $location.path('/');
    }
    
   }

  




  }]);

  