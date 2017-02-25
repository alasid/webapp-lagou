'use strict';
angular.module('app')
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        $stateProvider.state('main',{
            url:'/main',
            templateUrl:'view/main.html',
            controller:'mainController'
        }).state('position',{
            url: '/position/:id',
            templateUrl: 'view/position.html',
            cotroller: 'positionController'
        });
        $urlRouterProvider.otherwise('main');
    }])