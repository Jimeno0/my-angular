'use strict';

angular.module('app')
  .controller('MyController', function(){
    var self = this;
    self.cats = [];
    self.selected = null;
    self.hideForm = true;
    self.cats = [
      { id: 1,
        name: 'Coco',
        src: '/images/coco.jpg',
        count: 0},
      { id: 2,
        name: 'Sombra',
        src: '/images/sombra.jpg',
        count: 0},
      { id: 3,
        name: 'Frodo',
        src: '/images/frodo.jpg',
        count: 0},
      { id: 4,
        name: 'Scar',
        src: '/images/scar.jpg',
        count: 0},
      { id: 5,
        name: 'Felix',
        src: '/images/felix.jpg',
        count: 0}
    ];

    self.selected = self.cats[0];

    self.select = function (cat) {
      self.selected = cat;
    };

    self.catClick = function (cat) {
      cat.count ++;
    };

    self.save = function(newCat) {

      if (newCat.count === null || !newCat.count) {
        newCat.count = 0;
        self.cats.push(newCat);
      }
      else  {
        self.cats.push(newCat); 
      }
      self.clear();
    };

    self.clear = function () {
      self.newCat = {};
    };

    self.toggleForm = function(){
      self.hideForm = self.hideForm === false ?
      true : false;
    };

  });