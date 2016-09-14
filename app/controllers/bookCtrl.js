'use strict';

app.controller("bookCtrl", function ($scope, $q, $http) {
  $scope.title="World Wide Guides";
    $scope.books = [];
  $scope.getGuides = function() {
    console.log("get the books!!!");
    return $q((resolve, reject) => {
      $http.get('../../data/guides.json')
      .success((bookObject) => {
        resolve (bookObject);
        $scope.books = bookObject.guides;
        console.log(bookObject.guides);
      })
      .error((error) => {
        reject(error);
      });
   });
  };
  // getGuides();
});