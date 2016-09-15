'use strict';

app.controller("bookCtrl", function ($scope, guideFactory) {
  $scope.title="World Wide Guides";
    $scope.books = [];

    $scope.getMyGuides = () => {
     guideFactory.getGuides()
    .then( (response) => {
        $scope.books = response;
      });
    }
});