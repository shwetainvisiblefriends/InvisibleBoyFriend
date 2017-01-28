'use strict';

var mainApp=angular.module('mainApp',['ui.router']);

mainApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'static/pages/home.html'
        })
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('aboutUs', {
        //     url: '/about',
        //     templateUrl: 'static/pages/aboutUs.html'
            
        // })
    
   
    // .state('fAQ.html', {
    //     url: '/fAQ.html',
    //     templateUrl: 'static/pages/fAQ.html.html'
        
    // })
    // .state('contactUs', {
    //     url: '/contactUs',
    //     templateUrl: 'static/pages/contactUs.html'
        
    // })
    
    .state('loginPage', {
        url: '/loginPage',
        templateUrl: 'static/pages/login.html'
        ,controller:'LoginCtrl'
        
    })
    
    
     .state('selfiePage', {
        url: '/selfiePage',
        templateUrl: 'static/pages/selfie.html'
        ,controller:'selfiCtrl'
        
    })
    
     .state('signUp', {
        url: '/signUp',
        templateUrl: 'static/pages/signUp.html'
        ,controller:'SignUpCtrl'
        
    })
    
    
    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'static/pages/dashboard.html'
         	//,controller:'DashBoardCtrl'
        
     }) 
    
    
     .state('dashboard.profile', {
             url: '/profile',
            templateUrl: 'static/pages/createProfile.html',
    //         	 controller:'ProfileCtrl'
            
        })
    
       
    ;
    
    
        
}]);


mainApp.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
    $rootScope.$on('$stateChangeStart', function (event) {
    	
console.log(window.sessionStorage.getItem('userDetails'));
$rootScope.value=window.sessionStorage.getItem('userDetails');
        /*if (!Auth.isLoggedIn()) {
            console.log('DENY');
            //event.preventDefault();
           // $location.path('/login');
            $state.go('dashboard');
        }
        else {
            console.log('ALLOW');
            //$location.path('/home');
        }*/
    });
}]);




mainApp.controller('IndexCtrl', ['$scope','$state', function($scope,$state) {
	$scope.logout=function(){
		window.sessionStorage.removeItem('userDetails');
        $state.go('home');
	};

}])

