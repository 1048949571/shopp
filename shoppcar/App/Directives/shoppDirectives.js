app.directive("shopp", function () {
    return {
        restrict: "EA",
        templateUrl: "./App/Views/template/_shopp.html",
        scope: {
            objs: "=users",
            index:"@index"
        },
        controller:"shoppItemControllers"
    }
});