const eyes= document.getElementById('eyes');
const pwd= document.getElementById('pw');
pwd.addEventListener('input',()=>{
    eyes.style.display=pwd.value.length>0?'inline':'none';
    
});
eyes.addEventListener('click',()=>{
    if (pwd.type ==='password') {
        pwd.type='text';
        eyes.remove="&#xf06e;";
        eyes.innerHTML="&#xf070;";
    }else{
        pwd.type='password';
        eyes.innerHTML="&#xf06e;";
    }
    
})