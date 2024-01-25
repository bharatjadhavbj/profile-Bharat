
const calculateBmi = document.querySelector("#calculate");
const resetBmi = document.querySelector("#reset");

const inpHeight = document.querySelector("#inputHeight");
const inpWeight = document.querySelector("#inputWeight");
const resultBmi = document.querySelector("#bmical");

calculateBmi.addEventListener('click',()=>{
    const ht = +inpHeight.value;
    const wt = +inpWeight.value;
    const result = (wt/(ht*ht))*10000;
    resultBmi.innerHTML= result;
   });

resetBmi.addEventListener('click',()=>{
    inpHeight.value="";
    inpWeight.value="";
    resultBmi.innerHTML="";
});