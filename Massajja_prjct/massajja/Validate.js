const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const Email = document.getElementById('email');
const phoneNumber = document.getElementById('phonenumber');
const NIN = document.getElementById('nin');
function validateFirstName(){
let first_name = firstName.value.trim();
let firstNameRegex = /^[A-Za-z]+$/;
if(first_name == ''){
    alert('First name can not be empty');
    firstName.style.border = '3px solid red';
    //firstName.focus();
    return false;
}
if(!first_name.match(firstNameRegex)){
    alert('Invalid - Use only alphabet')
    firstName.style.border = '3px solid red';
    //firstName.focus();
    return false;
}
else{
    if(first_name.match(firstNameRegex)){
       // lastName.focus();
        firstName.style.border = '3px solid green';
        return true;
}
}
}
//Validating the last name
function validateLastName(){
    let last_name = lastName.value.trim();
    let lastNameRegex = /^[A-Za-z]+$/;
    
    if(last_name == ''){
        alert('Last name can not be empty');
        lastName.style.border = '3px solid red';
        //lastName.focus();
        return false;
   }
    
    if(!last_name.match(lastNameRegex)){
        alert('Invalid - Use only alphabet')
        lastName.style.border = '3px solid red';
        //lastName.focus();
        return false;
   }
    
    else{
        if(last_name.match(lastNameRegex)){
           // Email.focus();
            lastName.style.border = '3px solid green';
            return true;
   }
  
}
}
 //Validating the email
function validateEmail(){
 let email = Email.value.trim();
 let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
 if(email == ''){
     alert('Email can not be empty');
     Email.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 if(!email.match(emailRegex)){
     
     alert('Enter valid email')
     Email.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 else{
     if(email.match(emailRegex)){
         //phoneNumber.focus();
         Email.style.border = '3px solid green';
         return true;
}
 
}
}
 //Validating the phone
function validatePhone(){
 let phone = phoneNumber.value.trim();
 let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 
 if(phone == ''){
     alert('Phone number can not be empty');
     phoneNumber.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 if(!phone.match(phoneRegex)){
     
     alert('Enter valid phone number')
     phoneNumber.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 else{
     if(phone.match(phoneRegex)){
         //phoneNumber.focus();
         phoneNumber.style.border = '3px solid green';
         return true;
}
}
}
 //Validating the NIN
function validateNin(){
 let nin = NIN.value.trim();
 let ninRegex = /^[0-9a-zA-Z]+$/;
 if(nin == ''){
     alert('NIN can not be empty');
     NIN.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 if(!nin.match(ninRegex)){
     
     alert('Enter valid NIN')
     NIN.style.border = '3px solid red';
     //Email.focus();
     return false;
}
 
 else{
     if(nin.match(ninRegex)){
         //phoneNumber.focus();
         NIN.style.border = '3px solid green';
         return true;
}
 
}
}