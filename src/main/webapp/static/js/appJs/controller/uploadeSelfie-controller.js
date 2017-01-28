mainApp.controller('selfiCtrl',['$rootScope','$scope',function($rootScope, $scope) {
	//$scope.myImage='';
	var handleFileSelect = function(evt) {
		var file = evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function(evt) {
			$scope.$apply(function($scope) {
				$scope.myImage = evt.target.result;
				//FileUplodeService.uploadProfileImg(file);
			});
		};

		reader.readAsDataURL(file);

	};
	//$(element).filestyle(options);
	angular.element(document.querySelector('#uploadBtn')).on('change',handleFileSelect);
						} ]);