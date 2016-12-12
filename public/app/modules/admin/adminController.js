app.controller('adminCtrl', function ($scope,$firebaseArray) {
     const db  = firebase.database().ref();
 const users = db.child('users');
 const fireRef = db.child('fireData'); 
	$scope.fireData = $firebaseArray(fireRef);





   
   
});