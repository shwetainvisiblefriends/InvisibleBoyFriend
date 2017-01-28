
<!DOCTYPE html>
<html>
    <head>

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="static/css/libcss/bootstrap-min.css">
  <link rel="stylesheet" href="static/css/appcss/app.css">
        
    </head>
<body>

<div ng-app="mainApp" ng-controller="IndexCtrl">
	<div class="container header b-b">
		<div class="top-navbar ">
			
			
			<div >
		
				<ul class=" nav navbar-nav">
					<li><a ui-sref="home" >Home</a></li>
					<li><a ui-sref="aboutUs">About us</a></li>
					
					<li><a ui-sref="termsAndConditions">Terms and Conditions</a></li>
					<li><a ui-sref="whyUs">Why us</a></li>
					<li><a ui-sref="fAQ">FAQ</a></li>
					<li><a ui-sref="contactUs">Contact us</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right" ng-if="value===null">
				
					<li><a ui-sref="signUp"> Signup</a></li>
					<li><a ui-sref="loginPage">Log In </a></li>
					<li><a ui-sref="selfiePage">Submit Selfie</a></li>
				</ul>
				
				
				
				<ul class="nav navbar-nav navbar-right" ng-if="value!=null">
				
					<li><a ui-sref="editBoyFriend"> Edit Boyfriend</a></li>
					<li><a ui-sref="account">Account </a></li>
					<li><a ui-sref="support">Support</a></li>
					<li><a href="" ng-click="logout()">Logout</a></li>
				</ul>
				
			</div>
		</div>
		</div>
		<!-- <div style="width: 798px; position: absolute; left: 0px; top: 69px;" class="s7" id="comp-iw6jwfks1" data-reactid=".0.$SITE_ROOT.$desktop_siteRoot.$SITE_HEADER.1.1.$comp-iw6jwg9u.0.$comp-iw6jwfks1">
		<p class="font_7" style="font-size:170px; line-height:1.25em; text-align:center;font-family:marzo-w00-regular,fantasy;"><span style="font-size:170px;" class="">
		<span style="font-family:Algerian"><span class="color_11">Squeeze</span></span>
		</span></p>
</div> -->
		<div ui-view style="margin-top:6%;"></div>
		</div>

    

    <script src="static/js/libJs/angular-min.js"></script>
    <script src="static/js/libJs/jquery.min.js"></script>
     <script src="static/js/libJs/bootstrap.min.js"></script>
      
      <script src="static/js/libJs/angular-ui-router.js"></script>
      <script src="static/js/app.js"></script>
       <script src="static/js/appJs/controller/login-controller.js"></script>
       <script src="static/js/appJs/controller/signUp-controller.js"></script>
       <script src="static/js/appJs/controller/uploadeSelfie-controller.js"></script>
       <script src="static/js/appJs/service/singlton-service.js"></script>
        <script src="static/js/appJs/Utils/app-utils.js"></script>
     



      
    </body>
    </html>