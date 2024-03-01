console.log("hey This is my Validation App");


let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email=document.getElementById('email');

let ValidEmail=false;
let ValidPhone=false;
let ValidName=false;


//console.log(name,email,phone);

name.addEventListener('blur',()=>{
//console.log('event bluerd');
let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,15}$/;
let str=name.value;
console.log(str,regex);
if(regex.test(str))
{
    name.classList.remove('is-invalid'); 
    ValidName=true;
}
else{
    name.classList.add('is-invalid');  
    ValidName=false;
}
});

phone.addEventListener('blur',()=>{
console.log('event bluerd');
let regex=/^([0-9]){10}$/;
let str=phone.value;
console.log(str,regex);
if(regex.test(str))
{
    phone.classList.remove('is-invalid');
    ValidPhone=true;  
}
else{
    phone.classList.add('is-invalid');  
    ValidPhone=false;  
}
});

email.addEventListener('blur',()=>{
console.log('event bluerd');
let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
let str=email.value;
console.log(str,regex);
if(regex.test(str))
{
    email.classList.remove('is-invalid'); 
    ValidEmail=true;
}
else{
    email.classList.add('is-invalid');  
    ValidEmail=false;
}
});

let Submit=document.getElementById('submit');

Submit.addEventListener('click',(e)=>{

    e.preventDefault();
    if(ValidEmail && ValidName && ValidPhone)
    {
        console.log('valid');
        success();
    }
    else{
        console.log('invalid')
        fail();
    }
})
function success() {
    let ht=document.getElementById('notifiy');
    let add=`<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>SUCCESSFUL!</strong> your Respone Submitted successfuly
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
ht.innerHTML=add;
}
function fail() {
    let ht=document.getElementById('notifiy');
    ht.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>DANGER!</strong> your Respone Not Submitted
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
}



