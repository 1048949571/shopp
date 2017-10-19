var app = angular.module("App", ["ui.router"]);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("shopp", {
            url:"/shopp",
            templateUrl: "App/Views/shopp.html",
            controller: "shoppController"
        });
    $urlRouterProvider.otherwise("/shopp")
});