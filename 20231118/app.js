const form = document.querySelector("#form");
const mesur = document.querySelector("#mesur");
const calc = 0;


form.addEventListener("submit",(e) => {
    
    e.preventDefault();
    
    const mesur = e.target[0].value;

    console.log("mesur", mesur);

    let x = (mesur -32)/1.8 ;
    let y = x.toFixed(2)
     mesurError.innerHTML="En degrés Celsius : "+y+" °C";
   
});