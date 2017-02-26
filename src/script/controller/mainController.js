'use strict';
angular.module('app')
    .controller('mainController',['$scope',function($scope) {
        $scope.list1 = [{
            id: '1232',
            name: '销售',
            imgSrc: 'image/company-3.jpg',
            companyName: '千度',
            city: '上海',
            industry: '互联网',
            time: '2016-05-01 11:03'
        },{
            id: '1212',
            name: 'web前端',
            imgSrc: 'image/aqy.jpg',
            companyName: '阿里',
            city: '广州',
            industry: '互联网',
            time: '2016-05-01 12:03'
        }
        ];
    }]);