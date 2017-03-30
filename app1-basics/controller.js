angular.module('AppOne')
.controller('AppController',['$scope' ,'AppService',function($scope,AppService){

  $scope.test = 'test';

  $scope.arr = AppService.arr;

  $scope.api = function(){
    var promise2 = AppService.getapi();
    console.log('controller promise back :)');
    promise2.then(function(result){
      $scope.smurfname = [];
      $scope.smurfimg = [];
      for(var i=0;i<result.data.length;i++){
        $scope.smurfname.push(result.data[i].name);
        $scope.smurfimg.push(result.data[i].img);
      }
        console.log(result.data);
        console.log('controller promise work');
    });
  }

  $scope.api();

}])
