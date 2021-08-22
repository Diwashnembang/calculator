


function clear(){
    currentNumber='';
    previousNumber='';
    whatTodo='';
}


function delet(){
    let newString=Array.from(currentNumber);
    newString.splice(newString.length-1,1);
    currentNumber=newString.join("");

}

function appendNumbers(number){
    if(currentNumber.includes(".") && number===".") return;
    currentNumber= currentNumber+number;


}


function chooseOperation(operation){
    if(currentNumber==="") return;
    if(previousNumber!==""){
        compute()
    }
    whatTodo=operation;
    previousNumber=currentNumber;
    currentNumber='';
    // whatTodo=undefined;
    
    
}


function compute(){
    switch (whatTodo){
        case '+':
            currentNumber=+currentNumber+ +previousNumber;
            break;
            case '-':
                currentNumber=+previousNumber - currentNumber;
                break;
                case '*':
                    currentNumber=+currentNumber * +previousNumber;
                    break;  
                    
                    case '/':
                        currentNumber=+currentNumber / +previousNumber;
                        break; 
                        
                        default:
                            return;
                        }
                        
                        console.log(typeof(currentNumber))
                        whatTodo=undefined;
                        previousNumber=" ";
                        console.log("the",currentNumber)
        
    }
    
    
function updateScreen(){
        currentElement.textContent=currentNumber;

            previousElement.textContent=previousNumber
    }

const numberButtons=document.querySelectorAll("[data-number]");
const operationButton=document.querySelectorAll("[data-operation]");
const clearButton=document.querySelector("[data-clear]");
const deletButton=document.querySelector("[data-delet");
const equallButton=document.querySelector("[data-equall]");

let currentElement=document.querySelector(".currentDisplay");
let  previousElement=document.querySelector(".previousDisplay");
let currentNumber="";
let previousNumber="";
let whatTodo;

console.log(operationButton)


numberButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        appendNumbers(button.textContent);
        updateScreen();
        
    })
});

operationButton.forEach(button=>{
    button.addEventListener("click",e=>{
        chooseOperation(button.textContent);
        updateScreen()
    })
})
    
equallButton.addEventListener("click",()=>{
    compute();
    updateScreen();

})

clearButton.addEventListener("click",()=>{
    clear();
    updateScreen();
})


deletButton.addEventListener("click",()=>{
    delet();
    updateScreen();
})

