function validateForm() {
    let x = document.forms["form"]["firstname"].value;
    let y= document.forms["form"]["lastname"].value;
      if (x == "") {
        alert(" first name must be filled out");
        return false;
} 
if (y ==""){
    alert ("filled out  your last name");
    return false;
}

}

function myfun(){
    let x = document.forms["form"]["firstname"].value;
    let y= document.forms["form"]["lastname"].value;
    if(x!="" && y !=""){
    alert("sucssesfully submitted thanks");
        
    
}}














