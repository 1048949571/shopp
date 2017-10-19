app.controller("shoppController", ['$scope', 'shoppServer',"$stateParams" ,function ($scope,shoppServer,$stateParams) {
    $scope.flag = false;
    shoppServer.getFold().then(function (result) {
        $scope.objs=result;
        console.log(result);
        sums()
    });
    $scope.$on("del",function(even,index){
        $scope.objs.splice(index,1)
        sums()
    })
    $scope.$on("checkChange", function (event) {
        sums();
    });

    $scope.$on("check", function (even, index) {
        console.log(index)
        var count = 0;
        $scope.objs[index].state = !$scope.objs[index].state;
        for (var i = 0; i < $scope.objs.length; i++) {
            if ($scope.objs[i].state) {
                count++
            }
        }
        if (count == $scope.objs.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        sums();
    });

    $scope.All = function () {
        $scope.flag = !$scope.flag;

        for (var i = 0; i < $scope.objs.length; i++) {
            if ($scope.flag) {
                $scope.objs[i].state = true;
            } else {
                $scope.objs[i].state = false;
            }

        }
        sums();
    }

    function sums() {
        $scope.sum = 0;
        $scope.num = 0;
        $scope.objs.forEach(function (item, index) {
            if (item.state) {
                $scope.sum += item.num * item.price;
                $scope.num += item.num;
            }
        });

    }

}]);