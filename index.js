//test file 
//this is testing file 
//new line added
//new comment added
//new commit
//new commit 
//github commit in specific formate
//$title : bug fix in github integratoin $description : we have optimize the functionality and bug fixed and improvment $label: bug fixed 
//console.log("push event called", payload.commits[0].message);

// First, split by $title :
const [, titleAndRest] = payload.commits[0].message.split("$title :");
const [title, descAndLabel] = titleAndRest.split("$description :");
const [description, label] = descAndLabel.split("$label:");

console.log(title.trim());
console.log(description.trim());
console.log(label.trim()); 
//new commit      
//label founds   