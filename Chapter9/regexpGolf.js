/*
For each of the following items, write a regular expression to test whether any of the given substrings 
occur in a string. The regular expression should match only strings containing one of the substrings 
described. Do not worry about word boundaries unless explicitly mentioned. WHen your expression works,
see whether you can make it smaller
*/

//1) car and cat 
var pattern1 = /^ca[rt]/; 
var test1 = ['car', 'cat', 'pacar'];
test1.forEach(function(string){
	console.log("Does " + string + " match " + pattern1 + "? " + pattern1.test(string));
});

//2) pop and prop
var pattern2 = /^pr?op/
var test2 = ['pop', 'prop', 'propp'];
test2.forEach(function(string){
	console.log("Does " + string + " match " + pattern2 + "? " + pattern2.test(string));
});

//3) ferret, ferry, and ferrari
var pattern3 = /ferr(et|y|ari)/;
var test3 =['ferret', 'ferry', 'ferrari', 'ferraris','ferrety'];
test3.forEach(function(string){
	console.log("Does " + string + " match " + pattern3 + "? " + pattern3.test(string));
});

//4) Any word ending in ious
var pattern4 = /(ious)$/; 
//Can also be /ious\b/
var test4 = ['ious', 'various', 'curiously', 'ous'];

test4.forEach(function(string){
	console.log("Does " + string + " match " + pattern4 + "? " + pattern4.test(string));
});

//5) A whitespace character followed by a dot, comman, colon, or semicolon
var pattern5 = /\s[.,:;]/;
var test5 = [' .', ' ,', 'a :a', ' ;;', ' * '];
test5.forEach(function(string){
	console.log("Does " + string + " match " + pattern5 + "? " + pattern5.test(string));
});

//6) A word longer than six letters
var pattern6 = /\w{7,}/;
var test6 = ['biggestest', 'biggest', '123456', 'small'];
test6.forEach(function(string){
	console.log("Does " + string + " match " + pattern6 + "? " + pattern6.test(string));
});

//7) A word without the letter e
var pattern7 = /\b[^\We]+\b/i
//another option would be to use /e/ and negate the test result so that anything
//that results in !(false) will be a word that doesn't have the letter e.
var test7 = ['hi', 'hola', 'holla', 'hello', 'ellie'];
test7.forEach(function(string){
	console.log("Does " + string + " match " + pattern7 + "? " + pattern7.test(string));
});




