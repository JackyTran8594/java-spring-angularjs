/// <reference path="myDirectives.js" />
//app.directive('ckeditor', function () {
//    return {
//        require: '?ngModel',
//        restrict: 'A',
//        scope: true,
//        link: function (scope, elm, attr, model) {
//            var ck = CKEDITOR.replace(elm[0]);

//            if (!ngModel) return;

//            ck.on('instanceReady', function () {
//                ck.setData(ngModel.$viewValue);
//            });

//            function updateModel() {
//                scope.$apply(function () {
//                    if (ck.getData.length()) {
//                        ngModel.$setViewValue(ck.getData());

//                    }
//                });
//            }

//            ck.on('change', updateModel);
//            ck.on('key', updateModel);
//            ck.on('dataReady', updateModel);
//            ck.on('paste', updateModel);
//            ck.on('selectionChange', updateModel);

//            ngModel.$render = function (value) {
//                ck.setData(ngModel.$modelValue);
//            }
//        }
//    }
//});

app.directive('ngFiles', [
    '$parse', function ($parse) {
        return {
            //restrict: 'A',
            link: function (scope, element, attrs) {
                var onChange = $parse(attrs.ngFiles);
                element.on('change', function(event) {
                    onChange(scope, { $files: event.target.files });
                });
            }
        }
    }
]);