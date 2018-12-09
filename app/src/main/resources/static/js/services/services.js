
var ngServices = angular.module('ngServices', ['ngResource']);

//configService

ngServices.factory('configService', ['$resource', '$http', '$window',
 function ($resource, $http, $window) {
     var hostname = window.location.hostname;
     var port = window.location.port;
     var rootUrl = 'http://' + hostname + ':' + port;
     var rootUrlApi = 'http://localhost:8594';
    
     var result = {
         urlWeb: rootUrl,
         urlApiService: rootUrlApi
     }

     var label = {
         titleCreate: "Thêm mới",
         lblMessage: "Thông báo",

         btnCancel: "Thoát",
         btnSave: "Lưu",
         btnDelete: "Xóa",


         btnDetail: "Chi tiết",
         btnEdit: "Chỉnh sửa",


         //Shared
         titleDelete: "Xóa thông tin",
         infoDelete: "Bạn có chắc muốn xóa không????"
     }

     var formatDateToClient = function (input) {
         var dateObject = new Date(parseInt(input.substring(6, (input.length - 2))));
         return dateObject;
     }

     var pageDefault = {
         currentPage: 1,
         pageSize: 5,
         itemPerPage: 10,
         totalPages: 0,
         totalItems: 0,
         orderBy :''
     }

     var fileUpload = function(file, type) {
         var formData = new FormData();
         formData.append('file', file);
         $http({
             method: 'POST',
             url: 'api/HelperApi/UploadFile/' + type,
             data: formData,
             headers: {
                 'Content-Type':undefined
             },
             transformRequest: angular.identity
         }).then(function(response) {
             console.log(response);
         }, function(error) {
             console.log(error);
         });
     }

     result.label = label;
     result.formatDateToClient = formatDateToClient;
     result.fileUpload = fileUpload;
     result.pageDefault = pageDefault;
     return result;

 }]);
