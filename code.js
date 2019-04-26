function getNumber(num){
   var input_var=document.getElementById('input');
  //displaying the values of the number entered, by creating a switch statements and cases

   switch(num){
       case 1:
       input_var.value +='1';
             break;
             
       case 2:
       input_var.value +='2';
             break;
             
       case 3:
       input_var.value +='3';
             break;
             
       case 4:
       input_var.value +='4';
             break;
             
       case 5:
       input_var.value +='5';
             break;
             
       case 6:
       input_var.value +='6';
             break;
             
       case 7:
       input_var.value +='7';
             break;
            
       case 8:
       input_var.value +='8';
             break;
             
       case 9:
       input_var.value +='9';
             break;
             
       case 0:
       input_var.value +='0';
             break;

         } 
} 
// displaying functionality of mathematical operators using switch and cases
function getOperand(operand){
  var  input_var=document.getElementById('input');
  switch(operand){
      case '+':
      input_var.value +='+';
      break;

      case '-':
      input_var.value +='-';
      break;

      case '*':
      input_var.value +='*';
      break;

      case '/':
      input_var.value +='/';
      break;

      
      case '.':
      input_var.value +='.';
      break;

      case '+/-':
      input_var.value +='=' + input_var.value;
        }
      }
         
  
// clearing the screen after executioon of values
function clearscreen(){
    document.getElementById('input').value="";
    document.getElementById('answer').value="";
}
//displaying the backspace bar
function backspace(){
   var input_var=document.getElementById('input');
   var r = input_var.value;
   //checking the length of the variable entered  
   if(r.length>0){
       r=r.substring(r.length-1);
      input_var.value=r;
   }
   
}
//displaying the results after executions 
function compute(){
    var input_var=document.getElementById('input');
    ans=Math.floor(+eval(input_var.value))
    document.getElementById('answer').value='=' + ans;
}
// bracket functionality display
var i =0;
function brackets(){
    var input_var=document.getElementById('input');
    if(i==0){
        input_var.value+='(';
        i=1;
          }
          else if(i==1){
      input_var.value+=')';
     i=0;
  }
}
