angular.module('app')
  .config(function($mdIconProvider){
    $mdIconProvider.icon('menu','assets/icons/menu.svg');
    $mdIconProvider.icon('delete','assets/icons/delete.svg');
    $mdIconProvider.icon('add','assets/icons/add.svg');
    $mdIconProvider.icon('linkedin','assets/icons/linkedin.svg');
    $mdIconProvider.icon('twitter','assets/icons/twitter.svg');
    $mdIconProvider.icon('github','assets/icons/github.svg');
    $mdIconProvider.icon('edit','assets/icons/edit.svg');
  });