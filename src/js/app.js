var app = angular.module('tgroller', [
    'ngRoute',
    'ngResource',
    'tgroller.tables.m40ksurvival'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/40ksurvival', {
                templateUrl: 'tables/40ksurvival/40ksurvival.html',
                controller: 'controller_40ksurvival'
            }).
            otherwise({
                redirectTo: '/40ksurvival'
            });
    }]);