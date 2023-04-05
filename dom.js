//console.dir(document)
//console.log(document.domain)
//console.log(document.title);
//document.title = 'hasya ram';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body) ;
//console.log(document.all);
//console.log(document.all[22])
//document.all[120].textContent='hi';
//console.log(document.forms)
//console.log(document.links[10])


//console.log(document.getElementById("ram"))
//var heade = document.getElementById('ram')
//console.log(heade)
//heade.textContent = "hasya"
//heade.innerText="hasya ram prakash"
//console.log(heade.textContent)
//console.log(heade.innerText)
//heade.innerHTML="<h3>hello world</h3>"
//var hi =document.getElementById("hasyaram")
// var main =document.getElementById("vicky")
// // main.style.borderBottom="solid 3px blue"
// //console.log(hi)


// //var items =document.getElementsByClassName("list-group-item");
// //console.log(items)
// //console.log(items[2])
// //items[2].textContent="hello 2"
// //items[2].style.fontWeight = "bold";
// //items[2].style.backgroundColor="Yellow"
// //for(i = 0 ; i < items.length ; i++){
//   //items[i].style.backgroundColor="yellow"
//   //items[i].style.fontWeight="bold";
// //}



//   // var li =document.getElementsByTagName("li");
//   // console.log(li)
//   // console.log(li[2])
//   // li[2].textContent="hello 2"
//   // li[2].style.fontWeight = "bold";
//   // li[2].style.backgroundColor="Yellow"
//   // for(i = 0 ; i < li.length ; i++){
//   //   li[i].style.backgroundColor="#f4f4f4"
//   //   li[i].style.fontWeight="bold";
//   // }



//   var h = document.querySelector("#main-header");
//   h.style.borderBottom="solid 4px blue "
//   // var input =document.querySelector("input")
//   // input.value ="hi world"
//   // var bold =document.getElementById("up")

//   // // console.log(bold)
//   // bold.textContent="ram"
// var submit=document.querySelector("input[type='submit']");
// submit.value="SEND"
//  var input = document.querySelector('input');
//  input.value="hello world"
// //  var h3=document.getElementById("up")
// //  h3.textContent="hasya"
// var list=document.querySelector(".list-group-item")
// list.style.color="blue"
// var lastitem = document.querySelector
// (".list-group-item:last-child");
// lastitem.style.color = "green"
// var thirdlist = document.querySelector(".list-group-item:nth-child(2)");
// thirdlist.style.backgroundColor="red"



//  var title=document.querySelectorAll(".title")
//  console.log(title)
 
// title[0].style.color="blue"
// var odd=document.querySelectorAll("li:nth-child(odd)");
// var even=document.querySelectorAll("li:nth-child(even)");

// for( var i=0;i<odd.length;i++){
//   for( var j=0;j<even.length;j++){
//       even[j].style.backgroundColor="yellow"
//       }
//  odd[i].style.backgroundColor="blue"
 

// }
// // for( var i=0;i<even.length;i++){
// //   even[i].style.backgroundColor="yellow"
// //  }

// var items=document.querySelector("#items")
// console.log(items.parentNode)
// items.parentNode.style.backgroundColor="#f4f4f4"
// console.log(items.children[2])
// items.children[2].style.backgroundColor="blue"
// console.log(items.firstElementChild)
// items.firstElementChild.textContent="hello 1"
// console.log(items.lastElementChild);
// items.lastElementChild.textContent="hello 4"
// console.log(items.nextElementSibling);
// items.nextElementSibling.textContent="hi"
// console.log(items.previousElementSibling)
// items.previousElementSibling.style.color="green"
// var newdiv = document.createElement('div');
// newdiv.className="hello";
// newdiv.id="hello2"
// newdiv.setAttribute('title',"hello div")
// var newtext=document.createTextNode('hello world');
// newdiv.appendChild(newtext)
// console.log(newdiv)
// var row =document.querySelector("div .row");
// var h3 =document.querySelector('div h3');
// row.insertBefore(newdiv,h3)
// var button =document.getElementById('button').addEventListener
// ("click",button)
// function button(e){
  //console.log("click me")
  // document.querySelector('.title').textContent="hasya ram"
  // // document.querySelector("#main").style.backgroundColor="#f4f4f4"
  //console.log(e)
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList)
  // var output=document.getElementById("output");
  // output.innerHTML="<h3>"+e.target.id+"</h3>";
  // console.log(e.type)
  //console.log(e.clientX)
  //console.log(e.clientY)
  // console.log(e.offsetX)
  // console.log(e.offsetY)
  // console.log(e.altKey)
  // console.log(e.shiftKey)
  // console.log(e.ctrlKey)
// }
var button=document.getElementById('button')
var box=document.getElementById('box')
// button.addEventListener('click',button1)
//  button.addEventListener('dblclick',button1)
//  button.addEventListener('mouseup',button1)
//  button.addEventListener('mousedown',button1)
//  box.addEventListener("mouseenter",button1)
//  box.addEventListener("mouseover",button1)
//  box.addEventListener("mouseleave",button1)
//  box.addEventListener("mouseout",button1)
 box.addEventListener("mousemove",button1)

var input=document.querySelector('input[type="text"]')
// var form=document.querySelector('form')
// var select=document.querySelector('select')
//  input.addEventListener("keydown",button1)
//input.addEventListener("keyup",button1)
// input.addEventListener("keypress",button1)
//  input.addEventListener("focus",button1)
//  input.addEventListener("blur",button1)
// input.addEventListener("cut",button1)
// input.addEventListener("paste",button1)
// input.addEventListener("input",button1)

// select.addEventListener('change',button1)
// select.addEventListener('input',button1)
// form.addEventListener("submit",button1)
function button1(e){
 // e.preventDefault()
console.log("Event type :"+e.type)
//console.log(e.target.value)
//  console.log(e.target.value)
// document.getElementById('output').innerHTML="<h3>"+e.target.value+"</h3>"
output.innerHTML='<h2> MOUSE x:'+e.offsetX+'</h2><h2> MOUSE Y:'+e.offsetY+'</h2>'

 box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"

}