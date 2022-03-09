//styling
function changeBgColor(){
var element = document.getElementById('box');
var bgcolor = document.getElementById('bgcolor').value;
element.style.backgroundColor = bgcolor;
}
function changeTColor(){
var element = document.getElementById('box');
var tcolor = document.getElementById('tcolor').value;
element.style.color = tcolor;
}
function changeTSize(){
var element = document.getElementById('box');
var tsize = document.getElementById('tSize').value;
element.style.fontSize = tsize+"px";
}
function changeWidth(){
var element = document.getElementById('box');
var W = document.getElementById('width').value;
element.style.width = W+"px";
}
function changeHeight(){
var element = document.getElementById('box');
var H = document.getElementById('height').value;
element.style.height = H+"px";
element.style.lineHeight = H+"px";
}
function changeBorderRadius(){
var element = document.getElementById('box');
var slider = document.getElementById('border').value;
element.style.borderRadius = slider+"%";
}
function changeBorderColor(){
var element = document.getElementById('box');
var bcolor = document.getElementById('bordercol').value;
element.style.borderColor = bcolor;
}
function changeOpacity(){
var element = document.getElementById('box');
var slider = document.getElementById('opacity').value;
element.style.opacity = slider+"%";
}
function changeBorderWidth(){
var element = document.getElementById('box');
var W = document.getElementById('borwidth').value;
element.style.borderWidth=W;
}



//car animation
var timer = null;
var element = null;
function init(){
element = document.getElementById('car');
element.style.position = "relative";
element.style.left = "2px";
}
function start(){
element.style.left= parseInt(element.style.left) + 2 + "px";
if(parseInt(element.style.left)>=1122)
{
document.getElementById('danger').style.display = "block";
clearTimeout(timer);
}
else{
timer = setTimeout(start,20);
}
}
function stop(){
clearTimeout(timer);
}
function reset(){
init();
document.getElementById('danger').style.display="none";
}



//directory
var names=[];
var phones=[];
function add(){
var datan=document.getElementById('name').value;
var datap=document.getElementById('phone').value;
if(names.indexOf(datan)!==-1){
alert("Contact Exists");
}
else{
names.push(datan);
phones.push(datap);
view();
}
}
function view(){
out=document.getElementById('output');
out.innerHTML="";
for (var i=0; i<names.length; i++){
out.innerHTML+=i+1+". "+names[i]+" - "+phones[i]+"<br>";
}
document.getElementById('output').style.textAlign="center";
}
function topdel(){
names.shift();
view();
}
function enddel(){
names.pop();
view();
}