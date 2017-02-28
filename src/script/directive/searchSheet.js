'use strict';
angular.module('app').directive('appSearchSheet',[function() {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            list: '=',
            visible: '=',
            select: '&'
        },
        templateUrl: 'view/template/searchSheet.html'
    }
}])
