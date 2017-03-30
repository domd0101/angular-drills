angular.module('AppOne')
  .service('AppService',['$http',function($http){
    this.arr =
    [
      {name: 'z'},
      {name: 'a'},
      {name: 'b'},
      {name: 'c'},
      {name: 'd'}
    ];

    this.getapi = function(){
      console.log('service work');
      var promise = $http.get('http://smurfs.devmounta.in/smurfs/?format=json');
      return promise.then(function(response){
        if(response.status === 200){
          return response
          console.log('service ');
            }
      })}


  }])
