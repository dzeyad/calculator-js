// const fruits = ['apple', 'orange', 'pears'];

// fruits[3] = 'grapes';

// to insert an item in the array
// fruits.push('mango');
// to insert an item in the beginning of the array
// fruits.unshift('mano');

// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());

// const Person  = {
//     firstname: 'john',
//     lastname: 'doe',
//     age: 30,
//     address:
//     {
//         street: 'ka-67 shahjadpur',
//         city: 'gulshan'
//     }
// }

// Person.email ='jogn@aiub.com' ;
// console.log(Person.firstname);
// const{ firstname , lastname}= Person;
// const{ firstname , lastname, address:{city}}= Person;
// console.log(city);
// console.log(Person);

// const todos =
// [
//     {
//         id: '1',
//         name: 'depart',
//         iscomple: true
//     },
//     {
//         id: '2',
//         name: 'mydepart',
//         iscomple: true
//     },
//     {
//         id: '3',
//         name: 'hod',
//         iscomple: false
//     }
// ];

// for(let todo of todos)
// {
//     console.log(todo.name);
// }

// FOR EACH, MAP, FILTER
// todos.forEach(function(todo)
// {
//     console.log(todo.name);

// });

// RETURN SPECIFICED ARRAY INDEX
// const todoTxt = todos.map(function(todo)
// {
//     return todo.name;
// });
// console.log(todoTxt);

// const todocompleted = todos.filter(function(todo)
// {
//     return todo.iscomple === true;
// });
// console.log(todocompleted);

// const todocompleted = todos.filter(function(todo)
// {
//     return todo.iscomple === true;
// }).map(function(todo)
// {
//     return todo.name;
// })
// console.log(todocompleted);
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullyear();
// }
// Person.prototype.getFullname = function () {
//     return `${this.firstName} ${this.lastName}`;
// }
// CLASS
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear()
//     {
//         return this.dob.getFullYear();
//     }
//     getFullname()
//     {
//         return `${this.firstName} ${this.lastName}`;    }
// }
// // INTANTIATE OBJECT
// const person1 = new Person('john', 'Doe', '4-3-1990');
// const person2 = new Person('john', 'Doe', '4-3-1990');

// console.log(person1);
// console.log(person2.getFullname());
// console.log(window);
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e)=>
// {
//     e.preventDefault();
//     console.log(e.target.className);

// });
// function myFunction() {
//     var y = document.getElementById("txt1").value;
//     var z = document.getElementById("txt2").value;
//     var operation = document.("opera").value;
//     if()
//     document.getElementById("demo").innerHTML = total;
//   }
// function c(val)
// {
// document.getElementById("d").value=val;
// }
// function v(val)
// {
// document.getElementById("d").value+=val;
// }
// function e() 
// { 
// try 
// { 
//   c(eval(document.getElementById("d").value)) 
// } 
// catch(e) 
// {
//   c('Error') 
// } 
// }  
/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

// (function() {
//     "use strict";

//     var el = function(element) {
//       if (element.charAt(0) === "#") {
//         return document.querySelector(element);
//       }

//       return document.querySelectorAll(element);
//     };

//     // Variables
//     var viewer = el("#viewer"), // Calculator screen where result is displayed
//       equals = el("#equals"), // Equal button
//       nums = el(".num"), // List of numbers
//       ops = el(".ops"), // List of operators
//       theNum = "", // Current number
//       oldNum = "", // First number
//       resultNum, // Result
//       operator; // Batman

//     // When: Number is clicked. Get the current number selected
//     var setNum = function() {
//       if (resultNum) { // If a result was displayed, reset number
//         theNum = this.getAttribute("data-num");
//         resultNum = "";
//       } else { // Otherwise, add digit to previous number (this is a string!)
//         theNum += this.getAttribute("data-num");
//       }

//       viewer.innerHTML = theNum; // Display current number

//     };

//     // When: Operator is clicked. Pass number to oldNum and save operator
//     var moveNum = function() {
//       oldNum = theNum;
//       theNum = "";
//       operator = this.getAttribute("data-ops");

//       equals.setAttribute("data-result", ""); // Reset result in attr
//     };

//     // When: Equals is clicked. Calculate result
//     var displayNum = function() {

//       // Convert string input to numbers
//       oldNum = parseFloat(oldNum);
//       theNum = parseFloat(theNum);

//       // Perform operation
//       switch (operator) {
//         case "plus":
//           resultNum = oldNum + theNum;
//           break;

//         case "minus":
//           resultNum = oldNum - theNum;
//           break;

//         case "times":
//           resultNum = oldNum * theNum;
//           break;

//         case "divided by":
//           resultNum = oldNum / theNum;
//           break;

//           // If equal is pressed without an operator, keep number and continue
//         default:
//           resultNum = theNum;
//       }

//       // If NaN or Infinity returned
//       if (!isFinite(resultNum)) {
//         if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
//           resultNum = "You broke it!";
//         } else { // If result is infinity, set off by dividing by zero
//           resultNum = "Look at what you've done";
//           el('#calculator').classList.add("broken"); // Break calculator
//           el('#reset').classList.add("show"); // And show reset button
//         }
//       }

//       // Display result, finally!
//       viewer.innerHTML = resultNum;
//       equals.setAttribute("data-result", resultNum);

//       // Now reset oldNum & keep result
//       oldNum = 0;
//       theNum = resultNum;

//     };

//     // When: Clear button is pressed. Clear everything
//     var clearAll = function() {
//       oldNum = "";
//       theNum = "";
//       viewer.innerHTML = "0";
//       equals.setAttribute("data-result", resultNum);
//     };

//     /* The click events */

//     // Add click event to numbers
//     for (var i = 0, l = nums.length; i < l; i++) {
//       nums[i].onclick = setNum;
//     }

//     // Add click event to operators
//     for (var i = 0, l = ops.length; i < l; i++) {
//       ops[i].onclick = moveNum;
//     }

//     // Add click event to equal sign
//     equals.onclick = displayNum;

//     // Add click event to clear button
//     el("#clear").onclick = clearAll;

//     // Add click event to reset button
//     el("#reset").onclick = function() {
//       window.location = window.location;
//     };

//   }());
// let a = parseInt(document.getElementById("input1").value);
// let b = parseInt(document.getElementById("input2").value);



// var b = parseInt(form.input2.value);
// var a = parseInt(document.getElementById("input1").value);
// var b = parseInt(document.getElementById("input2").value);

// function addition() {
//     // console.log("Test");
//     var a = parseFloat(document.getElementById("input1").value);
//     var b = parseFloat(document.getElementById("input2").value);
//     let c = a + b
//   document.getElementById("demo").innerHTML = c;
// }

// function subt() {
//     // console.log("Test");
//     var a = parseFloat(document.getElementById("input1").value);
//     var b = parseFloat(document.getElementById("input2").value);

//     let c = a - b
//     document.getElementById("demo").innerHTML = c;
// } 
// function div() {
//     // console.log("Test");
//     var a = parseFloat(document.getElementById("input1").value);
//     var b = parseFloat(document.getElementById("input2").value);

//     let c = a / b
//     document.getElementById("demo").innerHTML = c;
// } 
// function mul() {
//     // console.log("Test");
//     var a = parseFloat(document.getElementById("input1").value);
//     var b = parseFloat(document.getElementById("input2").value);

//     let c = a * b
//     document.getElementById("demo").innerHTML = c;
// }

// function subt() {
//     var c = a - b
//     document.write(c);
// }

//  else(opera == '-')
// {
//     var total = txt1 - txt2;
//     document.getElementById("demo").innerHTML = total;
// }
//  else
//  {
//     var num3 = parseInt(txt1) + parseInt(number2);
//     document.getElementById("demo").innerHTML = total;
// }