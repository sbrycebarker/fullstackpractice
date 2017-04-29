anglar.module('myApp').service('mainService', function($http) {

  this.getData = function() {
    return $http({
      method: 'GET',
      url: ""
    });
  }

})
