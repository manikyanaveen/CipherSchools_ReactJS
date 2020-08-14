
//Question NO 1

function sec(min)
{
	if(isNaN(min))
	{
		return min + ' is not a number';
	}
	else
	{
	return min*60;
	}
};

//Passing Test Cases

console.log(sec(2));
console.log(sec('a'));

//Question No 2

function division(a,b)
{
	if(a<b)
	{
		return 'A should be greater than b';
	}
	else
	{
		if(a%b == 0)
		{
		    return true;
		}
		else
		{
			return false;
		}
	}
};

// Passing Test Cases

console.log(division(4,2));
console.log(division(4,3));
console.log(division(4,5));
