'use strict';
angular.module('app').directive('appSearchSheet',[function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/searchSheet.html'
    }
}])
