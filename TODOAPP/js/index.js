function add(){
    var todo=document.getElementById("doit").value;
    var list= document.getElementById("list");
   var li=document.createElement(li);
   //var add="<span class='text'>"+todo+"</span><span class='del'>X</span>"
   list.innerHTML=list.innerHTML+" <li  class='gg'onclick='checked("+list.getElementsByTagName("li").length+")'; id='del"+list.getElementsByTagName("li").length+"'><span class='text'>"+todo+"</span><span class='del' onclick='del("+list.getElementsByTagName("li").length+")'>X</span></li>";
   document.getElementById("doit").value=" ";
   // list.innerHTML=list.innerHTML+" <li ></span>";

}

function del(num){
var a="del"+num;
var li=document.getElementById(a);
li.style.display="none";

}

function checked(num){
    var a="del"+num;
    var li=document.getElementById(a);
    var gg=document.getElementById(a).className;
    if(gg=="gg"){
        document.getElementById(a).className="chk";
    }
    else{
        document.getElementById(a).className="gg";
    }
}