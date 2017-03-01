/*!
Accessible ARIA Button and Link copied from the AccDC TSG Accessible Widget Archive
https://github.com/accdc/tsg
*/

$A.bind(window, 'load', function(){

	// Set the A tag ARIA Button

	var standardA = new $A.Toggle('a1',
					{

					// Disable toggling
					noToggle: true,

					// Declare a callback to run every time the triggering element is activated
					callback: function(){
						// 'this' is the triggering element
						alert('Open the Settings dialog');
					}
					});

	// Set the SPAN tag ARIA Link

	var spanLnk = new $A.Toggle('span1',
					{
					noToggle: true,
					callback: function(){
						var href = $A.getAttr(this, 'data-href');
						alert('Open Search on ' + href);
					}
					});
});