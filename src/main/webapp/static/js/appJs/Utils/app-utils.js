mainApp.factory('Utils', function(){
var user;

return{
	changeColor: function(required,invalid) {
		if(required===true){
			
           return 'error';
		}
		if(invalid===true){
			
			return 'warning';
		}
		else{
			
			return 'success'
		}
    }
  }
})