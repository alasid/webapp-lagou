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