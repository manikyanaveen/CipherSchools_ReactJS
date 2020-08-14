// Question No 1

var realType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

// Passing Test Cases

console.log(realType(4));
console.log(realType("a"));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));


// Question No 2

function num(arr)
{
	let arr2 = [];
	for(i =0;i<arr.length;i++)
	{
		if(arr[i].match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))
		{
			arr2.push(arr[i]);

		}

	}
	return arr2;

};

// Passing  Test Cases

console.log(num(["1a", "a", "2b", "b"]));
console.log(num(["abc", "abc10"]));
console.log(num(["abc", "ab10c", "a10bc", "bcd"]));
console.log(num(["this is a test", "test1"]));
