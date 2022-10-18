function myFunction()

var input=document.getElementById("capital");
var letter=document.getElementById("letter");
var number=document.getElementById("number");
var length=document.getElementById("length");
var symbols=document.getElementById("symbol");
/*when the user clicks on the pasword , show the message box*/
myInput.onfocus = myfunction()
{
    document.getElementById("message").style.display="block";

}
myInput.onblur = function()
{
    document.getElementById("message").style.display="none";
}
myInput.onkeyup= myfunction()
{
//validating lowercase
var lowerCaseLetters=/[a-z]/g;
if(myInput.value.match(lowerCaseLetters))
{
letter.classList.remove("invalid");
letter.classList.add("valid");
}
else
{
letter.classList.remove("valid");
letter.classList.add('invalid');
}
//uppercase
var capital=/[A-Z]/g;
if(input.value.match(capital))
{
capital.classList.remove("valid");
capital..classList.add("invalid");
}
else
{
capital.classList.remove("invalid");
capital.classList.add("valid");
}

var numbers = /[0-9]/g;
if(myInput.value.match(numbers))
{
number.classList.remove("invalid");
number.classList.add("valid");
}
else
{
number.classList.remove("valid");
number.classList.add("invalid");
}
//length validation
if(myInput.value.length>=6)
{
length.classList.remove("invalid");
length.classList.add("valid");
}
else
{
length.classList.remove("valid");
length.classList.add("invalid");
}
//symbol variation

var symbols = /[?,.,!,@,#,$,%,]/g;
if(myInput.value.match(symbols))
{
symbol.classList.remove("invalid");
symbol.classList.add("valid");
}
else
{
symbol.classList.remove("valid");
symbol.classList.add("invalid");
}
}

