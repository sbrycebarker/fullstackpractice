angular.module('myApp').controller('mainCtrl', function( $scope, mainService) {

  $scope.getData = function() {
    service.getdata().then(function(results){
      $scope.data = results
    })
  }

  $scope.list = [];
  $scope.text = 'hello';
  $scope.submit = function() {
    if ($scope.text) {
      $scope.list.push(this.text);
      $scope.text = '';
  }
}

})
