angular.module('app').controller('companyController',['$http','$state','$scope',function($http,$state,$scope) {
    // console.log($state.params)
    $http.get('/data/'+$state.params.id+'.json').then(function(res) {
        $scope.company = res.data;
        // console.log($state.params)
        // console.log(res.data)
    })
}])