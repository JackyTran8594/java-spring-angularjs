var authenticationModule = angular.module('authenticationModule', [
    'ui.bootstrap',
    'ui.router', 'LocalStorageModule', 'ngServices'
]);

authenticationModule.config(
    ['$windowProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($windowProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        //routing

        var hostname = window.location.hostname;
        var port = window.location.port;
        var rootUrl = 'http://' + hostname + ':' + port;

        $urlRouterProvider.otherwise('/loginApp');
       
    }]);