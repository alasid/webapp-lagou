'use strict';
angular.module('app',['ui.router'])
        

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
angular.module('app').controller('companyController',['$scope',function($scope) {
    
}])
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
(function(angular) {
    angular.module('app').controller('positionController',['$scope',function($scope) {
       
    
    }]);
})(angular);

'use strict';
angular.module('app').directive('appCompanyInfo',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/companyInfo.html'
    }
}])

'use strict';
angular.module('app').directive('appCustomInfo',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/customInfo.html',
        scope: {
            data: '='
        }
    }
}]);
(function(angular) {
    'use strict';
    angular.module('app').directive('appFoot',[function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/foot.html'
        }
    }])
})(angular);
'use strict';
angular.module('app').directive('appHead',[function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/head.html'
        };
    }])

'use strict';
angular.module('app').directive('appHeadBar',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/headBar.html',
        scope: {
            text: '@'
        },
        link: function($scope) {
            $scope.back = function() {
                window.history.back();
            };
        }
    };
}])


'use strict';
angular.module('app').directive('appPositionClass',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionClass.html'
    }
}])


angular.module('app').directive('appPositionInfo',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionInfo.html'
    }
}]);

'use strict';
angular.module('app').directive('appPositionList',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '='
        }
    }
}]);
