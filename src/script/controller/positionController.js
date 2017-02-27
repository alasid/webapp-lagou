(function(angular) {
    angular.module('app').controller('positionController',['$q','$http','$state','$scope',function($q,$http,$state,$scope) {
        $scope.isLogin = false;
    //     function getPosition() {
    //         var def = $q.defer();
    //          $http.get('/data/position.json?id='+$state.params.id).then(function(res) {
    //             $scope.position = res.data;
    //             def.resolve(res)
    //             // console.log(res)
    //         }).error(function(err) {
    //             def.reject(err);
    //         });
    //         return def.promise;
    //     }
       
    //    getPosition().then(function(obj) {
    //        console.log(obj)
    //    })

        function getCompany(id) {
            $http.get('data/'+id+'.json').then(function(res) {
                $scope.company = res.data;
                // console.log(res.data)
            })
        }
  
        var def = $q.defer();
        $http.get('/data/'+$state.params.id+'.json').then(function(res) {
            
            $scope.position = res.data;
            // console.log(res.data)
            def.resolve(res.data);
            return def.promise;
            
            // console.log(res)
        }).then(function(obj) {
            // console.log(obj.companyId);
            getCompany(obj.companyId);
            
        })

        
           
       
       
       
    
    }]);
})(angular);