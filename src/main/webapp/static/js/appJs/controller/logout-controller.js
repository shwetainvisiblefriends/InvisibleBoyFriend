mainApp.controller('LogoutCtrl',['$rootScope','$scope','$state','Auth',function($rootScope, $scope,$state,Auth) {
	/*$scope.loginDetails={email:'',password:''}	;
	
							$scope.login=function(){
								if($scope.loginDetails.email==='admin@gm.co' && $scope.loginDetails.password==='admin'){
									//Auth.setUser($scope.loginDetails)
									window.sessionStorage.setItem('userDetails',JSON.stringify($scope.loginDetails));
									$state.go('dashboard');
								}
							};*/
	                      window.sessionStorage.removeItem('userDetails');
	                     $state.go('home');
						} ]);