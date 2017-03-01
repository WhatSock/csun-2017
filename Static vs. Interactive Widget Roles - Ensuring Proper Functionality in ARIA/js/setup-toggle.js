/*!
Accessible ARIA Toggle Button copied from the AccDC TSG Accessible Widget Archive
https://github.com/accdc/tsg
*/

$A.bind(window, 'load', function(){

	// Set the standard DIV tag ARIA Toggle Button

	var divBtn = new $A.Toggle('div1',
					{
					state: false,
					callback: function(state){
						if (state)
							$A.addClass(this, 'pressed');

						else
							$A.remClass(this, 'pressed');

						// Return true to accept the ARIA state change, or false to prevent
						return true;
					}
					});
});