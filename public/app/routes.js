


app.config(['$routeProvider','$stateProvider', function ($routeProvider,$stateProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'app/modules/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/admin', {
    templateUrl: 'app/modules/admin/admin.html',
    controller: 'adminCtrl'
  })
  .otherwise({ redirectTo: '/home' });



// State Setup - ui Router
$stateProvider.state('adminControl', {
  templateUrl: 'app/modules/admin/admin.html',
  controller:'adminCtrl'
})
  
}]);