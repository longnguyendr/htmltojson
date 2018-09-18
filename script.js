(function() {
	function toJSONString( form ) {
		var obj = {};
		var contents = form.querySelectorAll( "input,input[name='Gender']:checked, select, textarea" );
		for( var i = 0; i < contents.length; ++i ) {
			var content = contents[i];
			var name = content.name;
			var value = content.value;
			if( name=="Gender" && value=="Mr" || value== "Mrs") {
				obj[name] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();