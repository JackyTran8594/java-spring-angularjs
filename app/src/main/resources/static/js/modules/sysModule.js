

var sysModule = angular.module('sysModule', [
    'ui.router',
    'ui.bootstrap'
    , 'ui.bootstrap.tpls'
    , 'ui.bootstrap.modal'

]);

// angular.module('sysModule')
sysModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', '$resourceProvider',
function ($windowProvider, $stateProvider, $urlRouterProvider, $httpProvider, $resourceProvider) {
    var window = $windowProvider.$get('$window');
    //routing
    var hostname = window.location.hostname;
    var port = window.location.port;
    var rootUrl = 'http://' + hostname + ':' + port;
    $stateProvider.state('products',
    {
        url: '/admin/products',
        templateUrl: rootUrl + '/app/views/productViews/index.html',
        controller: 'productController'
    });

    $stateProvider.state('users',
    {
        url: '/admin/users',
        templateUrl: rootUrl + '/app/views/user/index.html',
        controller: 'userController'
    });

    $stateProvider.state('roles',
      {
          url: '/admin/roles',
          templateUrl: rootUrl + '/app/views/role/index.html',
          controller: 'roleController'
      });
    $stateProvider.state('groupRoles',
      {
          url: '/admin/groupRoles',
          templateUrl: rootUrl + '/app/views/groupRole/index.html',
          controller: 'groupRoleController'
      });
    $stateProvider.state('projects',
      {
          url: '/admin/projects',
          templateUrl: rootUrl + '/app/views/project/index.html',
          controller: 'projectController'
      });

    $stateProvider.state('news',
    {
        url: '/admin/news',
        templateUrl: rootUrl + '/app/views/news/index.html',
        controller: 'newController'
    });

    $stateProvider.state('menu',
  {
      url: '/admin/menu',
      templateUrl: rootUrl + '/app/views/menu/index.html',
      controller: 'menuController'
  });

    $stateProvider.state('typeProducts',
    {
        url: '/admin/typeProducts',
        templateUrl: rootUrl + '/app/views/typeProduct/index.html',
        controller: 'typeProductController'
    });

    $stateProvider.state('feedbacks',
    {
        url: '/admin/feedbacks',
        templateUrl: rootUrl + '/app/views/feedback/index.html',
        controller: 'feedbackController'
    });

}]);


sysModule.factory('sysSerive', [
   '$resource', '$http', '$window', '$cacheFactory', function ($resource, $http, $window, $cacheFactory) {


       var hostname = window.location.hostname;
       var port = window.location.port;
       var rootUrl = 'http://' + hostname + ':' + port;

       var result = {

       };

       result.buildUrl = function (module, action) {
           return rootUrl + '/app/views/' + module + '/' + action + '.html';
       }

       var cacheData = $cacheFactory('tempData');
       
       
       function inItData() {
           cacheData.put('typeProductList', function() {
               return $resource(rootUrl + '/api/TypeProduct/GetAll', {
                   query: {
                       method: 'GET',
                       isArray: true
                   }
               });
           });
       }

       inItData();

       result.cacheData = cacheData;
       console.log(cacheData);
       return result;

   }
]);


//sysModule.factory('sysInitService', [
//    '$resource', '$http', '$window', '$cacheFactory', function ($resource, $http, $window, $cacheFactory) {



//    }
//]);


sysModule.factory('sysServiceHelper', ['$http', '$window', function ($http, $window) {
    return function (input) {
        var output = input + getData.Today().toString();
        return output;
    };
}]);
