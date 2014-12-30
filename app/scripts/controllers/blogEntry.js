'use strict';

/**
 * @ngdoc function
 * @name laurasBooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laurasBooksApp
 */
angular.module('laurasBooksApp')
  .controller('BlogEntryCtrl', function ($scope, $routeParams, $http) {
    $http.get('https://vast-harbor-6518.herokuapp.com/blogentries/' + $routeParams.blogid + '?format=json').
     success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
        $scope.data = data;
     }).
     error(function(data, status, headers, config) {
      console.log('Error',data, status, headers, config);
      // log error
     });  
  });