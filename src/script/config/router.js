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
            controller: 'positionController'
        }).state('company',{
            url: '/company/:id',
            templateUrl: 'view/company.html',
            controller: 'companyController'
        });
        $urlRouterProvider.otherwise('main');
    }])