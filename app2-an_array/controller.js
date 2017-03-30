angular.module('AppTwo')
  .controller('AppTwoCtrl',['$scope','AppTwoService',function($scope,AppTwoService){

    $scope.test = 'test';
    $scope.myDataName = [];
    $scope.myDataEmail = [];
    $scope.myDataPhone = [];

    for (var i = 0; i < AppTwoService.myData.length; i++) {
      $scope.myDataName.push(AppTwoService.myData[i].name);
      $scope.myDataEmail.push(AppTwoService.myData[i].email);
      $scope.myDataPhone.push(AppTwoService.myData[i].phone);
    }
    console.log(AppTwoService.myData);

  }])
