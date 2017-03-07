$A.bind(window, 'load', function(){
	var path = 'matrices/index.htm#';
	$A.query('div.roleIndex b', function(i, o){
		var n = $A.getText(o), a = $A.createEl('a',
						{
						href: path + n,
						target: 'matrices'
						});

		a.innerHTML = n;
		o.innerHTML = '';
		o.appendChild(a);
	});
});