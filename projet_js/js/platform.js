myApp.controller('platformController', ['$scope', '$http',  function($scope, $http) {
  $http.get("JSON/platform.json").then(function(response) {
    $scope.data = { platform: [], cdn : [], p2p : [], total : [], upload : [], percentage : [], viewers : [], maxViewers : [], averageViewers : [], trafficPercentage : [], live : [] };
    angular.forEach(response.data, function(value, key) {
      $scope.data.platform.push(value.platform);
      $scope.data.cdn.push(value.cdn);
      $scope.data.p2p.push(value.p2p);
      $scope.data.total.push(value.total);
      $scope.data.upload.push(value.upload);
      $scope.data.percentage.push(value.percentage);
      $scope.data.viewers.push(value.viewers);
      $scope.data.maxViewers.push(value.maxViewers);
      $scope.data.averageViewers.push(value.averageViewers);
      $scope.data.trafficPercentage.push(value.trafficPercentage);
      $scope.data.live.push(value.live);
    })
    $scope.labels = $scope.data.platform;
    $scope.data = [ $scope.data.cdn, $scope.data.p2p, $scope.data.total, $scope.data.upload, $scope.data.percentage, $scope.data.viewers, $scope.data.maxViewers, $scope.data.averageViewers, $scope.data.trafficPercentage, $scope.data.live ];
  })
}]);
