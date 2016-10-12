(function(){
'use strict';

  angular.module('app')
    .factory('catsData',catsData);

  function catsData ($http){
    return {
      getCats: getCats
    };

    function getCats (){
      return $http.get('assets/data/cats.json')
              .then(getCatsComplete)
              .catch(getCatsFail);

      function getCatsComplete (response) {
        return response.data;
      }

      function getCatsFail (error) {
        return 'error to get the cats data' + error;
      }
    }
  }
})();