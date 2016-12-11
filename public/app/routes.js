


app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'app/modules/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/admin', {
    templateUrl: 'app/modules/admin/admin.html',
    controller: 'adminCtrl'
  })
  .otherwise({ redirectTo: '/home' })
  
}])