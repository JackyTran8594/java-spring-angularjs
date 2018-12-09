//main module
var app = angular.module('myApp', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal', 'ui.router', 'ngAnimate', 'ngResource'
    , 'ngServices', 'sysModule', 'LocalStorageModule', 'authenticationModule', 'clientModule', 'webcam'
]);

//main config
app.config(
    ['$windowProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
function ($windowProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

    var window = $windowProvider.$get('$window');

    //routing
    var hostname = window.location.hostname;
    var port = window.location.port;
    var rootUrl = 'http://' + hostname + ':' + port;

    //$urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: rootUrl + '/app/views/othersview/dashboard.html',
        controller: 'homeController',
        resolve: {
            isLogIn: function () {
                return true;
            }
        }
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: rootUrl + '/app/views/login/login.html',
        controller: 'logInController',
        resolve: {
            isLogIn: function () {
                return false;
            }
        }
    });
}
    ]);

app.run(function ($state, $timeout, $stateParams, authenticationService, localStorageService, $rootScope) {

    $rootScope.$state = $state;
    $rootScope.globals = authenticationService.fillAuthData();
    //console.log($rootScope.globals);
    $timeout(function () {
        $rootScope.isLogIn = true;
        $state.go('login');
    });

});

