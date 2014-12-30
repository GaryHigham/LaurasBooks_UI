'use strict';

/**
 * @ngdoc overview
 * @name laurasBooksApp
 * @description
 * # laurasBooksApp
 *
 * Main module of the application.
 */
angular
  .module('laurasBooksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.markdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .when('/marketing', {
        templateUrl: 'views/marketing.html',
        controller: 'MarketingCtrl'
      })
      .when('/blogs', {
        templateUrl: 'views/blogindex.html',
        controller: 'BlogCtrl'
      })
      .when('/blogs/:blogid', {
        templateUrl: 'views/blog.html',
        controller: 'BlogEntryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
