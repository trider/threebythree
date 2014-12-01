var tbtAppControllers = angular.module('tbtAppControllers', []);



tbtAppControllers.controller('tbtCtrl', ['$scope', '$location', 'Submit',
  function ($scope, $location, Submit)
  {
    

   $scope.rows =
    {
     "row1": [{ "id": "1", "sqid": "#1", "val": "1" }, { "id": "2", "sqid": "#2", "val": "2" }, { "id": "3", "sqid": "#3", "val": "4" }],
     "row2": [{ "id": "4", "sqid": "#4", "val": "8" }, { "id": "5", "sqid": "#5", "val": "16" }, { "id": "6", "sqid": "#6", "val": "32" }],
     "row3": [{ "id": "7", "sqid": "#7", "val": "64" }, { "id": "8", "sqid": "#8", "val": "128" }, { "id": "9", "sqid": "#9", "val": "256" }]
    };

   //$scope.rows =
   // {
   //  "row1": [1,2,3],
   //  "row2": [4,5,6],
   //  "row3": [7,8,9]
   // };

   $scope.score = 0;
   $scope.questions =
    [
     {
      "sqid": "#1", "Question": "1?",
      "Answers": ["1", "2", "3"],
      "Answer": "1"
     },
     {
      "sqid": "#2", "Question": "2?",
      "Answers": ["1", "2", "3"],
      "Answer": "2"
     },
     {
      "sqid": "#3", "Question": "3?",
      "Answers": ["1", "2", "3"],
      "Answer": "3"
     },
     {
      "sqid": "#4", "Question": "4?",
      "Answers": ["1", "2", "3"],
      "Answer": "3"
     },
     {
      "sqid": "#5", "Question": "5?",
      "Answers": ["1", "2", "3"],
      "Answer": "2"
     },
     {
      "sqid": "#6", "Question": "6?",
      "Answers": ["1", "2", "3"],
      "Answer": "1"
     },
     {
      "sqid": "#7", "Question": "7?",
      "Answers": ["1", "2", "3"],
      "Answer": "2"
     },
     {
      "sqid": "#8", "Question": "8?",
      "Answers": ["1", "2", "3"],
      "Answer": "1"
     },
     {
      "sqid": "#9", "Question": "9?",
      "Answers": ["1", "2", "3"],
      "Answer": "3"
     }
    
    ];
   //$scope.ans = $scope.questions[0].Answer;
   $scope.scores = new Array();
   $scope.sqid;
   $scope.showid = function (id, val) {
    angular.element('#myModal').modal('toggle');
    $scope.sqid = '#'+ id;
    $scope.val = val;
   };

   $scope.submit = function () {
    
    var success = new Audio('data/success.mp3');
    var fail = new Audio('data/fail.mp3');
    $scope.ans = angular.element('#ans').val();
    console.log($scope.ans);
    angular.element('#myModal').modal('toggle');

    $scope.scores;

    $scope.result = Submit.check($scope.sqid, $scope.ans, $scope.questions);
    if ($scope.result)
    {
     var score = 0;
     $scope.scores.push({ sqid: $scope.sqid, val: $scope.val });
     //console.log($scope.scores);

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
  
    if (Submit.isWin($scope.score))
    {
     alert("win");
     var i = 1;
     angular.forEach($scope.scores, function (item, key) {
      angular.element(item.sqid).text(i++);
     });
     $scope.score = 0;
     $scope.scores = new Array();
    }
    
   }

  




  }]);

  