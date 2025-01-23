

// for (let index = 1; index <= 100; index++) { // Add a stopping condition
//     let h1 = document.createElement("h1"); // Create a new h1 element
//     h1.textContent = `${index}`; // Use the index value
//     document.body.appendChild(h1); // Append the new h1 to the body or desired container
// }


// let fruits = ["Mangos", "apples", "Banana", "litchi", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i,fruits[i]);
    
// }

// let student = [["Sanchit",95],["Nikita",96],["Tanu",97],["Kartikey",98],["Prashant",99]];
// for (let i = 0; i < student.length; i++) {
//     console.log(`Info of student #${i+1}`);
//     for (let j = 0; j < student[i].length; j++) {
//         console.log(`${student[i][j]}`);
//     }
// }
let H1 = document.getElementById("h1").querySelector("h2")
let promt =document.getElementById("prompt").addEventListener("click", function(){
    let req = prompt("Please enter your request");
// let todo = []; 

// button.addEventListener("click", function() {
//     let req = prompt("Please enter your request");

//     while(true) {
//         if(req === "quit") {
//             console.log("Quitting app");
//             break;
//         }

//         if (req == "list") {
//             console.log("----------");
//             for (let i = 0; i < todo.length; i++) {
//                 console.log(i, todo[i]);
//             }
//             console.log("----------");      
//         } else if (req == "add") {
//             let task = prompt("Please enter the task you want to add");
//             todo.push(task);
//             console.log("Task added");
//         } else if (req == "delete") {
//             let index = parseInt(prompt("Please enter the index of the task you want to delete"));
//             if (index >= 0 && index < todo.length) {
//                 todo.splice(index, 1);
//                 console.log("Task deleted");
//             } else {
//                 console.log("Invalid index");
//             }
//         }
        
//         req = prompt("Please enter your request");


//         H1.innerHTML = "";

//         let ul = document.createElement("ul");
//         todo.forEach((task) => {
//             let li = document.createElement("li");
//             li.textContent = `${task}`;
//             ul.appendChild(li);
//         });
//         H1.appendChild(ul);
//     }
// });







let H1 = document.getElementById("g1");
let button = document.getElementById("prompt"); 
let input = document.getElementById("number").value;
const random = 1;

let game = button.addEventListener("click", function() {
    console.log(random,input);
    if (input == random) {
        alert("You won!");
    } else {
        alert("Try again!");
    }
});

