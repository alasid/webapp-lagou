(function(angular) {
    angular.module('app').controller('positionController',['$q','$http','$state','$scope',function($q,$http,$state,$scope) {
        $scope.isLogin = false;
        function getPosition() {
            var def = $q.defer();
             $http.get('/data/position.json?id='+$state.params.id).then(function(res) {
                $scope.position = res.data;
                // console.log(res)
            }).error(function(err) {
                def.reject(err);
            });
            return def.promise;
        }
       
    
    }]);
})(angular);