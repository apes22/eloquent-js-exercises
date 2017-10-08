/*
	Imagine you have written a story and used single quotation marks throughout the mark pieces 
	of dialogue. ow you want to replace all of the dialogue quotes with double quotes,
	while keeping the single quotes used in contractions like aren't.
	Think of a pattern that distinguishes these two kinds of quote usage and craft a call
	to the replace method that does the proper replacement.
*/

//want to create a pattern finds single quotation marks that aren't right between two 
//letters. There has to be a space either before or after the single quotation

var text = "Hello world. She was like 'Oh hey!' said Darin. 'Aren't you going anywhere tonight?' ";
var text2 = "'I'm the cook,' he said, 'it's my job.'";
console.log(text2);
var pattern = /(^|\W)'|'(\W|$)/g;
var newText = text2.replace(pattern,'$1"$2');
console.log(newText);