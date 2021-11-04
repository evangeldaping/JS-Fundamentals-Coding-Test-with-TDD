// Description: Create a function that parses through a url and return an object, the url given will contain a query parameter ( if not familiar pls google) the query parameter will be the key to your object and the value of the query parameter will also be the value of your value. for example this query  http://jsfunds/api?name=josh , in your object name would be the key and josh would be the value so it is expected that your object derived from the sample query would be {name: "josh"}. In cases where the parameters does not exist, return an empty object.

// Input: const url = "http://localhost:1337/api?firstname=joshua&lastname=chu&age=21";

// Output :
// {
//     firstname: "joshua",
//     lastname: "chu",
//     age: "21"
// };

const url = "http://localhost:1337/api?firstname=joshua&lastname=chu&age=21";

export const urlParser = (url) => {
	// Code here
	return 0;
};

console.log(urlParser(url));
