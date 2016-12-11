
app.controller('homeCtrl', function ($scope,$rootScope,$firebaseAuth) {

 $scope.auth = $firebaseAuth();


// Works if the user exists in our Firebase Authentication User list. 

$scope.signIn = function(){
	 $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.pass).then(function(firebaseUser){
      // my logic after signing up
      $scope.result = "login Succesful!: UID = "+firebaseUser.uid;
      $scope.resultColor = 'green';
      //more logic...
	 }).catch(function(error){
        console.log("authentication Error",error);
        $scope.result = "authentication Error"+ error + "/n creating a new user..";
        $scope.resultColor = 'red';
        //more error handling 
    

	 });
}

    $scope.signUp = function(){
    	$scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.pass).then(
    		function(firebaseUser){
            // logic after sign up 
            $scope.result = "user signed up with following email" + firebaseUser.email;
               $scope.resultColor = 'green';

    	}).catch(function(error){
    		// error handling
    		$scope.result = "email already exist";
    		 $scope.resultColor = 'red';
    	});


}

  
  
   
});
