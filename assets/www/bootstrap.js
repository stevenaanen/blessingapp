var bootstrap = function(){
	var privateProperties = {
		
	};

	return {
		init: function(app){
			//The bootstrap is what runs if the user goes to the root of your web application, you can use the bootstrap to send them to whichever module you want.
			$.mobile.changePage("app/views/menu/menu.html", {
				data: 'Send message to bootstrap from the sample page'
			});
			
		}
	};
	
}();