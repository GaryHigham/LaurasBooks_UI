'use strict';

/**
 * @ngdoc function
 * @name laurasBooksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laurasBooksApp
 */
angular.module('laurasBooksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
