mainApp.controller('SignUpCtrl',['$rootScope','$scope','$state','Utils',function($rootScope, $scope,$state,Utils) {
							$scope.signUpDetails = {firstName:'',lastName:'',email : '',password : '',rePassword: ''};
							$scope.errorMessage = '';
							$scope.message='';
							$scope.changeColorForText='';
							$scope.changeTextForFirstName='';
							$scope.changeTextForPassword='';
							$scope.getFontColor=function(){
							
							};
							$scope.registration=function(){
								if($scope.signUpDetails.password!==$scope.signUpDetails.rePassword){
								$scope.errorMessage ='Please enter same password!'	
							}
								window.sessionStorage.setItem('userDetails',JSON.stringify($scope.signUpDetails));
								$state.go('dashboard');
								
							};
							
							$scope.changeColor= function(required,invalid,type) {
								if(type=='email'){
							$scope.changeColorForText=Utils.changeColor(required,invalid);}
								if(type=='fname'){
									$scope.changeTextForFirstName=Utils.changeColor(required,invalid);}
								if(type=='pass'){
									$scope.changeTextForPassword=Utils.changeColor(required,invalid);}
								
						    }
						} ]);