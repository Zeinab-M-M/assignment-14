console.log("line 1");
setTimeout(() => {
console.log("line 2"); 
}, 2000);
// this command run asynchronously and it doesn't block the next command, then line 3 will be logged before line2.
console.log("line 3");
