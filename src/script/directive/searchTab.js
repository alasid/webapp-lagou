'use strict';
angular.module('app').directive('appSearchTab',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/searchTab.html'
    }
}])
