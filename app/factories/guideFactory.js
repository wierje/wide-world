"use strict";

app.factory("guideFactory", ($q, $http) => {

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