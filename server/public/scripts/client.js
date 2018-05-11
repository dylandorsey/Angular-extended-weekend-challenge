const TimeTrackerApp = angular.module('TimeTrackerApp', ['ngRoute', 'ngMaterial'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('deep-orange');
});

TimeTrackerApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
    }).when('/entry', {
        templateUrl: 'views/entry.html',
        controller: 'EntryController as vm'
        }).when('/project', {
            templateUrl: 'views/project.html',
            controller: 'ProjectController as vm'
    }).otherwise({ redirectTo: '/' });
}]);
