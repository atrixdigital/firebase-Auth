app.controller('adminCtrl', function ($scope,$firebaseAuth) {
   
   

    $scope.auth = $firebaseAuth();
   $scope.authRun = function(){

	auth.signInWithEmailAndPassword($scope.email , $scope.password).then(function(firebaseUser){
		console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
		console.error("Authentication failed:", error);
});
}
});