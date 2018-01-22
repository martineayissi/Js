var myApp = angular.module('myApp', ['chart.js']);

myApp.controller('countryController', ['$scope', '$http',  function($scope, $http) {
  $http.get("JSON/country.json").then(function(response) {
    $scope.data = { country : [], cdn : [], p2p : [], total : [], percentage : [] };
    angular.forEach(response.data, function (value, key) {
      $scope.data.country.push(value.country);
      $scope.data.cdn.push(value.cdn);
      $scope.data.p2p.push(value.p2p);
      $scope.data.total.push(value.total);
      $scope.data.percentage.push(value.percentage);
    })
    $scope.labels = $scope.data.country;
    $scope.series = ['cdn', 'p2p', 'total', 'percentage'];
    $scope.data = [ $scope.data.cdn, $scope.data.p2p, $scope.data.total, $scope.data.percentage ];
  });
}])
