var tbtAppControllers = angular.module('tbtAppControllers', []);


tbtAppControllers.controller('tbtCtrl', ['$scope', '$location', 'Submit', 'Questions', 'Media',
  function ($scope, $location, Submit, Questions, Media)
  {
   
    $scope.questions = Questions.query();
    $scope.round = 1;
    $scope.score = 0;
    $scope.vals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    var success = new Audio('data/success.mp3');
    var fail = new Audio('data/fail.mp3');
   
    $scope.video = function (e) {
     var videoElements = angular.element(e.srcElement);
     videoElements[0].pause();
    }
    
    $scope.scores = new Array();
    $scope.sqid;

    $scope.showid = function (id, val) {
     $scope.sqid = '#' + id;   
     if (Submit.IsCellEmpty($scope.sqid))
     {
      $scope.val = val;
      
      angular.forEach($scope.questions, function (item, key) {
       if ($scope.sqid == item.sqid) {
        
        if (item.display)
        {
         console.log(item.url);
         angular.element('#media').html(item.url);
        }
        else
        {
         angular.element('#media').hide();
        }
       }
      });
      angular.element('#myModal').modal('toggle');
     }

    };

    $scope.submit = function () {

     $scope.ans = angular.element('#ans').val();
     console.log($scope.ans);
     angular.element('#myModal').modal('toggle');

     $scope.scores;

     $scope.result = Submit.check($scope.sqid, $scope.ans, $scope.questions);
     
     if ($scope.result) {
      var score = 0;
      $scope.scores.push({ sqid: $scope.sqid, val: $scope.val });

      angular.forEach($scope.scores, function (item, key) {
       score += Number(item.val);
      });

      $scope.score = score;

      angular.element($scope.sqid).text("X");
      success.play();
     }
     else {
      angular.element($scope.sqid).text("O");
      fail.play();
     }

     if (Submit.isWin($scope.score)) {
      alert("סוף סיבוב");
      var i = 1;
      angular.forEach($scope.vals, function (item, key) {
       angular.element('#' + item).text(item);
      });
      $scope.score = 0;
      $scope.scores = new Array();
      $scope.round++;
      if ($scope.round > 3) {
       alert("המשחק הסתיים");
       $location.path('/tbt');
       $scope.round = 1;
      }
     }
     
     


    }



  }]);

  