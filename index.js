//                                ***************CLASS WORK***************
//FUNCTIONS
//function greet(StudentName){  //Parameter
//    console.log("Hello "+ StudentName);
//}
//greet("Manal");//argument
//function employee(fileNo){
//    return("Working on File No: " + fileNo);
//}
//let data = employee(7);
//console.log(data);  //for the need of output we must store data in the variable
//function add(num1,num2){
//    return num1 + num2;
//}
//let output= add(5,7);
//console.log(output);
//Class 8
//const date= new Date();
//console.log(date.getDate());
//const months =['january',"february","march","april"];
//console.log(months[date.getMonth()]);
//console.log(date.getFullYear());
//date.setDate(15);
//console.log(date);
//const doomesday=new Date();
//doomesday.setDate(15);
//doomesday.setMonth(10);
//doomesday.setFullYear(2025);
//doomesday.setHours(0);
//doomesday.setMinutes(0);
//const date = new Date();
//let diff= doomesday.getTime() - date.getTime();
//console.log((diff / (1000 * 60 * 60 * 24 * 365.25 )).toFixed(1));
//Recusrsion
//function WriteData(data, times){
//    document.write(data);
//    if(times>0){
//        WriteData(data, times-1);
//    }
//}
//WriteData("Hello", 5);
// factorial(recursion)
//function factorial(num){
//    if(num>1){
//        return num * factorial(num - 1);
//    }
//    return 1;
//}
//console.log(factorial(
    
//                               **********ASSIGNMENT2************

//QUESTION NO 2: Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
//let array = [5,1,16,19,10];
//function searchArray(array , value){
//    if(array.length == 0 ){
//        return console.log("False");
//    }
//    if(array[0] == value){
//        return console.log("true");
//    }
//    return searchArray(array.slice(1), value)
//}
//searchArray(array , 10);


//QUESTION NO 1: Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it
//function adder(num1){
//    return function(num2){
//        console.log(num1 + num2);
//    }
//}
//const innerFunction = adder(5);
//innerFunction(10);


//QUESTION 3: Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.
//function addpara(text){
//    let para = document.createElement("p");
//    para.textContent = text;
//    document.body.appendChild(para);
//}
//addpara("LOVE MYSELF");


//QUESTION NO 4: Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
//function newfruit(text){
//    let item = document.createElement("ul");
//    item.textContent = text;
//    document.body.appendChild(item);
//}
// newfruit("guava");

//Question no : 5 Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.


// function changeBackgroundColor(element, bgcolor, color ) {
//     element.style.backgroundColor = bgcolor;
//     element.style.color = color
// }
// var myElement = document.getElementById("myId");
// changeBackgroundColor(myElement, "blue" , "red");


//QUESTION NO: 6   Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
// function createobject (key , obj){
//     localStorage.setItem(key , JSON.stringify(obj))
// }
    
//     newobj = {
//         EidDress1 : "eastern",
//         EidDress2 : "Western",
//     }
    
// createobject("newobj" , newobj)

//QUESTION NO 7: Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

// function object (key ){
//     newObj2 = localStorage.getItem(key);
//     return JSON.parse(newObj2);
// }
// newObj1 ={
//     EidDress1 : "eastern",
//     EidDress2 : "western",
// }
//     newObj1 = object ("newObj1");
//    console.log(newObj1);

//QUESTION 8: Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object

// function saveObjectToLocalStorage(obj) {
//     for (var key in obj) {
//         var value = obj[key];
//         localStorage.setItem(key, value);
//     }
//     var newObject = {};
//     for (var i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key);
//         newObject[key] = value;
//     }
//     return newObject;
// }
// var myObject = { name: "Manal", age: 21 };
// var storedObject = saveObjectToLocalStorage(myObject);
// console.log(storedObject);
