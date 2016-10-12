(function(){
'use strict';
  angular.module('app')
    .controller('MyController', function($mdSidenav, $mdDialog, $mdToast, catsData){
      var self = this;
      self.cats = [];
      self.catClick = catClick;
      self.clear = clear;
      self.deleteCat = deleteCat;
      self.hideForm = true;
      self.save = save;
      self.select = select;
      self.selected = null;
      self.showPrerenderedDialog = showPrerenderedDialog;
      self.toggleSideNav = toggleSideNav;
      self.isEditing = false;
      self.setEditing = setEditing;
      

      catsData.getCats()
        .then(function(response){
        self.cats = response;
        self.selected = self.cats[0];
      })
        .catch(function(response){
        console.log("errror" + response);
      });

      function showToast(){
        $mdToast.show(
          $mdToast.simple()
          .textContent('You click the cat!')
          .position('bottom')
          .hideDelay(1000)
        );
      }

      function select (cat) {
        self.selected = cat;
        toggleSideNav();
      }

      function catClick (cat) {
        cat.count ++;
        showToast();
      }

      function setEditing(){
        self.isEditing = true;
      }

      function save (newCat) {

        if (newCat.count === null || !newCat.count) {
            newCat.count = 0;
        }


        if (self.isEditing) {
          self.selected.name = newCat.name;
          self.selected.src = newCat.src;
          self.selected.count = newCat.count;

        } else {
          newCat.id = asignCatId(self.cats);
          self.cats.push(newCat);
        }

        self.clear();
        self.isEditing = false;
        


        function asignCatId(catsArray){
          return asignCatIdAux(getSortedIds(catsArray), 0, 0);

            function asignCatIdAux (array, index, value){
              return index > array.length - 1 ? value
                : array[index] !== value ? 
                  asignCatIdAux (array, index +1, value) :
                  asignCatIdAux (array, index +1, value + 1);


            }

            function getSortedIds (arr) {
              return arr
                .map(function(arr){
                return arr.id;
                })
                .sort();
            }
        }

      }

      function clear () {
        self.newCat = {};
        $mdDialog.hide();
      }

      function toggleSideNav () {
        $mdSidenav('catsSideNav').toggle();
      }

      function showPrerenderedDialog (ev) {
        $mdDialog.show({
          // controller: DialogController,
          contentElement: '#myDialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        });
      }

      function deleteCat(id) {
        var i = self.cats
          .map(function(arr){
            return arr.id;
          })
          .indexOf(id);
        self.cats.splice(i,1);
      }

    });
})();