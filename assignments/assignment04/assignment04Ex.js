// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  streetAddress: "2993 Real Rd",
  city:"Saginaw",
  state:"MI",
  zipCode: 48601,
  fullName: function() {return this.firstName  + " " + person.lastName},
  fullAddress: function() {return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode}
}
document.getElementById("1A").innerHTML = person.fullName();
document.getElementById("1B").innerHTML = person.fullAddress();


// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person.streetAddress = "123 Main Street";

// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");

// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">


let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow5(table2b,"1","2","3","4","5");
appendTableRow5(table2b,"6","7","8","9","10");
appendTableRow5(table2b,"11","12","13","14","15");
appendTableRow5(table2b,"16","17","18","19","20");
appendTableRow5(table2b,"21","22","23","24","25");


// append to tableobj a 5-column table row 
function appendTableRow5 (tableobj, col1, col2, col3,col4,col5) 
{
  // create column DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  //put content into items
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;

  //create table object
  let tr = document.createElement("tr");
  // append colums to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  //append row to table object
  tableobj.children[0].appendChild(tr);
}

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column

let div3B = document.getElementById("3B"); 
let table3A = document.getElementById("3A"); 
let table3B = createTable("table3B");
div3B.appendChild(table3B); 


//retrieve the values
const P1 = parseInt(table3A.children[0].children[0].children[1].children[1].innerHTML); 
const P2 = parseInt(table3A.children[0].children[0].children[2].children[1].innerHTML); 
const P3 = parseInt(table3A.children[0].children[0].children[3].children[1].innerHTML); 
const Q1 = parseInt(table3A.children[0].children[0].children[1].children[2].innerHTML); 
const Q2 = parseInt(table3A.children[0].children[0].children[2].children[2].innerHTML); 
const Q3 = parseInt(table3A.children[0].children[0].children[3].children[2].innerHTML); 

//set the style
table3B.setAttribute("style", "border:1px solid black;");
table3B.setAttribute("width", "100%");

//put the values in the row
addrow(table3B, "Item", "Price", "Qty", "Price * Qty"); 
addrow(table3B, "Thingamabob", "1.00", "1", P1 * Q1);
addrow(table3B, "Whachamacallit", "2.00", "2", P2 * Q2);
addrow(table3B, "Doohickey", "3.00", "3", P3 * Q3); 
addrow(table3B, "Grand Total:", P1 + P2 + P3 + ".00", Q1 + Q2 + Q3, P1 * Q1 + P2 * Q2 + P3 * Q3); 

function addrow(tableobj, top, col1, col2, col3, col4)
{
  
  // create column DOM objects
  let td0 = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  //put content into items
  td0.innerHTML = top;
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;

  
  td0.setAttribute("Style", "border:1px solid black;");
  td1.setAttribute("Style", "border:1px solid black;"); 
  td2.setAttribute("Style", "border:1px solid black;"); 
  td3.setAttribute("Style", "border:1px solid black;"); 
  td4.setAttribute("Style", "border:1px solid black;");
  //create table object
  let tr = document.createElement("tr");
  // append colums to table row
  tr.appendChild(td0);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  //append row ot table object
  tableobj.children[0].appendChild(tr);
  
  
}
  
// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* 
// its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

    // initialize error div id array
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

    // function: validate() ---------------------------------------------
    function validate() {
        // initialize input array
        const inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // initialize error array
        const errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message
        for (i in inputs) {
            let errMessage = errors[i];
            let div = divs[i];
            if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
          
            if (i == 2) {
                let atpos = inputs[i].indexOf("@");
                let dotpos = inputs[i].lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
                    document.getElementById('errEmail').innerHTML 
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } 
           if (i == 5) {
                let first = document.getElementById('password').value;
                let second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML 
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
        }
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        const count = 0;
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
      
        for (i = 0; i < 6; i++) {
            var div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
            else
            {
              document.getElementById(divs[i]).innerHTML = errors[i];
            }
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");
form00.appendChild(table00);

// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first10", 
    onkeyup: "validate10();", errorId: "errFirst10"}, 
  
  {label: "Last name:",  inputType: "text", id: "last10",  
    onkeyup: "validate10();", errorId: "errLast10" }, 
  
  {label: "Email:",      inputType: "text", id: "email10", 
    onkeyup: "validate10();", errorId: "errEmail10"}, 
  
  {label: "User id:",    inputType: "text", id: "uid10",   
    onkeyup: "validate10();", errorId: "errUid10"  }, 
  
  {label: "Password:",   inputType: "password", id: "password10", 
    onkeyup: "validate10();", errorId: "errPassword10"}, 
  
  {label: "Confirm Password:", inputType: "password", id: "confirm10", 
    onkeyup: "validate10();", errorId: "errConfirm10"}
];

// Step 3. loop through the JS object array to populate the form

let div5b = document.getElementById("5B"); 
let table5b = createTable("table5b") 
form00.appendChild(table00); 
div5b.appendChild(table5b); 


for (i in formArray)
{
   table5b.setAttribute("style", "border:1px solid black;") 
   table5b.setAttribute("width", "100%") 
   appendTableRoww5(table5b, formArray[i].label, 
                    formArray[i].inputType, 
                    formArray[i].id, 
                    formArray[i].onkeyup, 
                    formArray[i].errorId);
}
// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

// possible object oriented form append code
/*
let fieldLabel, fieldEntry, fieldError;
for(let i=0; i<formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry =  `<input type='${formArray[i].inputType}' `
    + `id='${formArray[i].id}' name='${formArray[i].id}' `  
    + `onkeyup='${formArray[i].onkeyup}' \/>`;
  fieldError = `<span id='' + formArray[i].errorId + ''></span>`;
  appendTableRow3(table00,fieldLabel,fieldEntry,fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);
*/
