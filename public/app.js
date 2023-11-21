const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit",(e) => {
    
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log("email", email);
    console.log("password", password);

    if(email === ""){
        emailError.innerHTML="veuillez entrez l'adresse email";
    }
    // exercice recolte de la temperature en faerneint affichage en degre celsus
    if(password === ""){
        passwordError.innerHTML="veuillez entrez le mot de passe";
    }    
});
