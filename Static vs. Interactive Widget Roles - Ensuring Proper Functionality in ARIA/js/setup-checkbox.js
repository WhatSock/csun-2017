/*!
Accessible ARIA Checkbox copied from the AccDC TSG Accessible Widget Archive
https://github.com/accdc/tsg
*/

$A.bind(window, 'load', function(){

	// Set the DIV tag ARIA Checkbox

	var divBtn = new $A.Toggle('div1c',
					{
					state: false,
					callback: function(state){
						if (state)
							$A.addClass(this, 'checked');

						else
							$A.remClass(this, 'checked');

						// Return true to accept the ARIA state change, or false to prevent
						return true;
					}
					});
});