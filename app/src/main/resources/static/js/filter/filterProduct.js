sysModule.filter('filterProduct', function(param1, param2, array) {
    return function (param1, param2, array) {
        angular.forEach(array, function(value, key) {
            if (value.code === param1) {
                array.filter(param1);

            }
            if (value.id === param2) {
                array.filter(param2);
            }
        });
    };
});;

sysModulepp.filter('filterHeleper', function() {

});