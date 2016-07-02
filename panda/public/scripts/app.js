"use strict";

angular.module('panda', [ 'ui.router', 'ui.bootstrap', 'restangular'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to the default state
  $urlRouterProvider.otherwise("/comments");

  $stateProvider
    .state('comments', {
      url: "/comments",
      templateUrl: "comments.html",
      controller: 'mainCtrl'
  })
}]);