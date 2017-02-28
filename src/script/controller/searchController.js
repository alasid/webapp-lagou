'use strict';
angular.module('app').controller('searchController',['$http','$scope',function($http,$scope) {
    $scope.name = '';
    $scope.search = function() {
        $http.get('data/positionList.json?job='+$scope.name).then(function(res) {
            $scope.positionList = res.data;
        });
    };
    $scope.search();
}])