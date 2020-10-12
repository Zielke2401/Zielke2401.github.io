let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick = function(){
  = add1(elem[1], elem[19]);
};

elem[19].children[1].innerHTML = totalPar; 

// create an "add1" function
var totalPar = 72;
var totalPoints = 0;
var overTotal = 0;

function add1 (elem, elem19) 
{
  
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "0";
    
    elem19.children[2].innerHTML = totalScore;
  else {
    if (elem.children[2].innerHTML < "8"){    
        let currentscore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore + 1;
        totalScore = totalScore + 1;
        elem19.children[2].innerHTML = totalScore;  
    }
  }
  
 //find the over  
  if ((elem.children[2].innerHTML)- (elem.children[1].innerHTML) > 0){
    elem.children[3].innerHTML = (elem.children[2].innerHTML)- (elem.children[1].innerHTML);
    overTotal = overTotal + (elem.children[2].innerHTML)- (elem.children[1].innerHTML);                             
    elem19.children[3].innerHTML = overtotal;
}

  function subtract1(elem, elem19)
  {
    if (elem.children[2].innerHTML > "0")
    {
      let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore - 1;
        totalScore = totalScore - 1;
        elem19.children[2].innerHTML = totalScore; 
      }
    
      if (elem.children[2].innerHTML >= 4 && elem.children[2].innerHTML <= 8) {
        let currentOver;
        currentOver = elem.children[2].innerHTML - elem.children[1].innerHTML;
        overTotal = overTotal - 1;
        elem.children[3].innerHTML = currentOver;
        elem19.children[3].innerHTML = overTotal;
      }
    
    function clear(elem, elem19)
    {
      if (elem.children[2].innerHTML != "-")
      {
      elem19.children[2].innerHTML = totalScore - elem.children[2].innerHTML;
      }
      
      if(elem.children[3].innerHTML != "-")
      {
      elem19.children[3].innerHTML = overTotal - elem.children[3].innerHTML;
      }
      
      elem.children[2].innerHTML = "-";
      elem.children[3].innerHTML = "-";
    }

