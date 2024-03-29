function makeid(l) {
  // write your code here
	let charlist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = ""
	for(let i=0; ,i < l; i++){
		result += charlist.charCodeAt(Math.floor(Math.random()*charlist.length))
	}

	return result;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
