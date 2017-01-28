mainApp.controller('LoginCtrl',['$rootScope','$scope','$state','Utils',function($rootScope, $scope,$state,Utils) {
	$scope.loginDetails={email:'',password:''}	;
	$scope.changeColorForText='';
	$scope.changeTextForPassword='';
	
							$scope.login=function(){
								if($scope.loginDetails.email==='admin@gm.co' && $scope.loginDetails.password==='admin'){
									//Auth.setUser($scope.loginDetails)
									window.sessionStorage.setItem('userDetails',JSON.stringify($scope.loginDetails));
									$state.go('dashboard');
								}
							};
							
							
							$scope.changeColor= function(required,invalid,type) {
								if(type=='email'){
							$scope.changeColorForText=Utils.changeColor(required,invalid);}
								if(type=='pass'){
									$scope.changeTextForPassword=Utils.changeColor(required,invalid);}
								
						    }
							
							
						} ]);