const form=document.getElementById("form");
const resultElement=document.getElementById("results");
const copyBtnElement=document.getElementById("copyBtn")
//
const lengthNoElement=document.getElementById("number");
const lengthRangeElement=document.getElementById("lengthrange")
//
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
//
const passBtn=document.getElementById("passBtn")




/*-----COPY FUNCTION--------*/

copyBtnElement.addEventListener("click",()=>{
    resultElement.select();
    navigator.clipboard.writeText(resultElement.value)
    if(resultElement.value==""){
        alert("Password Is Not Here")
    }
})

/*----RANGE TO NUMBER - NUMBER TO RANGE (VALUES)----*/

function length(){
    let rangeValue=lengthRangeElement.value;
    lengthNoElement.value=rangeValue;
}

lengthRangeElement.addEventListener("input",()=>{
    length()
})
lengthRangeElement.addEventListener("change",()=>{
    length()
})
lengthNoElement.addEventListener("input",()=>{
    lengthRangeElement.value=lengthNoElement.value
})

/*---GENERATING PASSWORD CODE FUNCTION---*/

function passwordGenerator(min,max){
    let val=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*val)+min);
    
}
function upperCase(){
    return passwordGenerator(65,90)
}
function lowerCase(){
    return passwordGenerator(97,122)
}
function number(){
    return passwordGenerator(48,57)
}
function symbol(){
    let symbols="~!@#$%^&*()_`-+=/*-+][}{';:?.><,"
    let randomSymbols=Math.floor(Math.random()*symbols.length)
    return symbols[randomSymbols]
}


let objVal=[
    {
        Element:upper,
        fctn:upperCase
    },
    {
        Element:lower,
        fctn:lowerCase
    },
    {
        Element:numbers,
        fctn:number
    },
    {
        Element:symbols,
        fctn:symbol
    }
]

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    myfunction()
})

function myfunction(){
    let value=lengthNoElement.value;
    let pass="";
    const filter=objVal.filter(({Element})=>Element.checked);
    console.log(filter)

    for(i=0;i<value;i++){
        let ranval=Math.floor(Math.random()*filter.length);
        let letter=filter[ranval].fctn();
        pass=pass+letter;
    }
   resultElement.value=pass
}
lengthRangeElement.addEventListener("input",myfunction);
lengthNoElement.addEventListener("change",myfunction);
