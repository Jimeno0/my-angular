angular.module('app')
.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('amber')
    .warnPalette('pink');
});