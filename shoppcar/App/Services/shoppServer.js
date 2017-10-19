app.factory("shoppServer", ['ajaxServer', function (ajaxServer) {
    var shoppServer = {
        getFold: function () {
            return ajaxServer.ajax("get", "http://localhost:8080/?data");
        }
    };
    return shoppServer;
}]);