// Question No 1

function splitrev(str,char)
{
	let words = str.split(" ");
	for(i=0;i<words.length;i++)
	{
       let a = words[i];
       if(a[0]== char)
       {
       	a=a.split("");
       	a=a.reverse();
       	a=a.join("");
       	words[i]=a;
       }
	}
	return words.join(" ");
};

// Passing Test Cases

console.log(splitrev("word searches are super fun","s"));
console.log(splitrev("first man to walk on the moon","m"));
console.log(splitrev("peter piper picked pickled peppers","p"));


// Question No 2

function checkequal(val)
{
	return val == arr[0];
}

function passing(arr)
{
	return arr.every(checkequal);

	function checkequal(val)

   {

	   return val == arr[0];
   }
}

// Passing Test Cases

console.log(passing(['@','@','@','@']));
console.log(passing(['%','@','@','@']));
console.log(passing(["SS", "SS", "SS", "SS"]));
console.log(passing(["&&", "&", "&&&", "&&&&"]));


// Question No 3

function unique(arr)
{
	return arr.filter((value,index) => arr.indexOf(value) ===  index);

};

console.log(unique([1,2,1,3,5,6,5]));
console.log(unique(["The", "big", "cat"]));
console.log(unique(["John", "Taylor", "John"]));



