function getInput(){
    const inputsNode=document.querySelectorAll("#body");
    const display=document.querySelector("#display");


    const inputs=Array.from(inputsNode);
    let firstNumber , secondNumber;
    inputs.forEach(input=>{
        input.addEventListener("click",(e)=>{
            let number=e.target.getAttribute("data-number")

            console.log(number)
            if(number!=="+" && number!=="="){

                 firstNumber=display.textContent;
                 secondNumber=e.target.textContent;
                display.textContent=e.target.textContent;
                console.log(firstNumber,secondNumber)
            }
                if(number==="="){
                    display.textContent= +firstNumber+ +secondNumber;
                    console.log("in")
                }
            }

        )
    })

}













function main(){
    let c=getInput();
   

}

main()