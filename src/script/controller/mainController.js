'use strict';
angular.module('app')
    .controller('mainController',['$http','$scope',function($http,$scope) {
        $http.get('/data/positionList.json').then(function(res) {
            $scope.list1 = res.data;
            // console.log(res)
        })
        // $scope.list1 = [{
        //     id: '1232',
        //     job: '销售',
        //     imageUrl: 'image/company-3.jpg',
        //     companyName: '千度',
        //     city: '上海',
        //     industry: '互联网',
        //     time: '2016-05-01 11:03'
        // }];
    }]);