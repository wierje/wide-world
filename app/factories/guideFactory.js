"use strict";

app.factory("guideFactory", ($q, $http) => {
    // $scope.books = [];

  let getGuides = function() {
    console.log("get the books!!!");
    return $q((resolve, reject) => {
      $http.get('../../data/guides.json')
      .success((bookObject) => {
        resolve (bookObject.guides);
      })
      .error((error) => {
        reject(error);
      });
   });
  };

  return{getGuides}
});

























//     let books = [];
//     return $q((resolve, reject) => {
//       $http.get("../../data/guides.json")
//       .success((bookObject) => {
//         resolve (bookObject);
//         console.log("bookObject");
//       })
//       .error((error) => {
//       reject(error);
//     });
//   };
// return{getGuides};
// console.log(bookObject);
// });

// // /data/guides.json