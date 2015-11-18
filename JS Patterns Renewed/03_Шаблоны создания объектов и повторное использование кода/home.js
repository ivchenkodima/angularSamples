function makeCounter() {
  var currentCount = 1;
  return function() {
  	return currentCount++;
  };
}
var counter = makeCounter(); 
alert( counter() ); //1
alert( counter() ); //2
alert( counter() ); //3
var counter2 = makeCounter();
alert( counter2() ); //1
------------------------------
say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
  alert( name + ", " + phrase );
}
-------------------------------
Каков будет результат выполнения этого кода?

var value = 0;
	(function f() {
	  if (1) 
	  	value = true;
	   else 
	   	var value = false;
	  alert( value );
	})();
  alert(value);

-------------------------------
(function test() {
  alert(window);
  var window = 5;
  alert( window );
})();