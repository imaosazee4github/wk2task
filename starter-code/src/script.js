let Myname = document.getElementById('input1');
let email = document.getElementById('input2');
let active = document.getElementById('input3');
let cb = document.getElementById('input4');
let submit = document.querySelector("#button")

submit.addEventListener('click', validate);

function validate(e){
    e.preventDefault();
    if(Myname.value == ""){
       document.getElementById('output').innerText='USERNAME MUST BE FILLED OUT';
       return;
    } if(email.value == ""){
        document.getElementById('output').innerText='EMAIL MUST BE FILLED OUT!!!';
        return;
    } if(active.value == ""){
       document.getElementById('output').innerText='PLEASE FILL OUT THE ACTIVATION!!!';
       return;
    }   if(cb.checked == false){
        document.getElementById('output').innerText='PLEASE TICK THE PRIVACY CHECK!!!';
        return;
    }
}
   
      
