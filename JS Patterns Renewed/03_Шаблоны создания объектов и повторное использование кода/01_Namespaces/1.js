var myNameSp = {};

    myNameSp = {
		import: function (name, method ) {
			myNameSp[name] = method; 
			}
	};

	function myMethod() {
		alert("Hello world")
	};

	myNameSp.import("myMethod", myMethod);

	myNameSp.myMethod();