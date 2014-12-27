'use strict';

/**
 * @ngdoc function
 * @name laurasBooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laurasBooksApp
 */
angular.module('laurasBooksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
