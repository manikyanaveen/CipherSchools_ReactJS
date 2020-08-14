// Question No 1

function findchar(word,char)
{
	var c = 0;
	for (i = 0;i<word.length;i++)
	{
		if(word.charAt(i) == char)
		{
			c++
		}
	}
	return c;
};

//Passing Test Cases

console.log(findchar('naveen','e'));
console.log(findchar('Naveen','e'));
console.log(findchar('naveen','b'));

// Question No 2

function addupto(val)
{
	if(val<0)
	{
		return 'Number should be Positive';
	}
	else
	{
		var a = (val*(val+1))/2;
		return a;
	}
};

// Passing Test cases 

console.log(addupto(4));
console.log(addupto(-1));

// Question No 3 

function removevow(str)
{
	
	str = str.replace(/a/g,'1');
	str = str.replace(/e/g,'2');
	str = str.replace(/i/g,'3');
	str = str.replace(/o/g,'4');
	str = str.replace(/u/g,'5');
	return str;
	
};

// Passing Test Cases

console.log(removevow('naveen'));
console.log(removevow('aaaeeeiioouuuiii'));