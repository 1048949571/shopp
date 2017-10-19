app.controller("shoppItemControllers",function($scope){
    $scope.del=function(index){
        $scope.$emit("del",index);
    }
    $scope.ck=function(index){
        $scope.$emit("check",index)
        console.log(index)
    }
    $scope.itemCount = function (index,flag) {
        if (flag == "+") {
            $scope.objs[index].num += 1;
        } else {
            if ($scope.objs[index].num <= 1) return;
            $scope.objs[index].num -= 1;
        }
        $scope.$emit("checkChange");
    }
});