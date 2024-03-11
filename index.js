function showName() {
    // Show filled name inside h1
var x= document.getElementById("name");
var z=x.value;
var y= document.getElementById("dName");
y.innerHTML=z;
}

function showGender() {
    // Show the selected gender inside h2
var x= document.getElementById("gender");
var z=x.value;
var y=document.getElementById("dGender")
y.innerHTML=z;
}

function showEmail() {
    // Show the filled email inside h3
var x= document.getElementById("email");
var z=x.value;
var y=document.getElementById("dEmail")
y.innerHTML=z;
}

function showMobile() {
    // Show the filled mobile inside h4
var x= document.getElementById("mobile");
var z=x.value;
var y=document.getElementById("dMobile")
y.innerHTML=z;
}

function resetForm() {
    // Reset all the form elements to default values (blank "")



}

function resetDisplay() {
    // Reset all the headings (h1, h2, h3, h4) to blank values
var x=document.getElementById("dEmail");
x.innerText=' ';
var y=document.getElementById("dGender");
y.innerText=' ';
var z=document.getElementById("dName");
z.innerText=' ';
var m=document.getElementById("dMobile");
m.innerText=' ';
}