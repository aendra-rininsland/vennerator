'use strict';

/**
 * @ngdoc function
 * @name venneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the venneratorApp
 */
angular.module('venneratorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
