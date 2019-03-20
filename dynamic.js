function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
     callback(xhr.responseText);
   }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
   profile(data.basics);
   career(data.career);
   education(data.educationaldetails);
   skills(data.skills);
})

var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
  var name=document.createElement('h2');
  name.textContent=pro.name;
  left.appendChild(name);
  main.appendChild(left);
  var job=document.createElement('h2');
  job.textContent=pro.job;
  left.appendChild(job);
  main.appendChild(left);
  var email=document.createElement('h2');
  email.textContent=pro.email;
  left.appendChild(email);
  main.appendChild(left);
}
function career(c){

  var resume=document.createElement('h1');
  resume.textContent="RESUME";
  right.appendChild(resume);
  main.appendChild(right);
  var line1=document.createElement('hr');
  line1.textContent=c.line;
  right.appendChild(line1);
  main.appendChild(right);
  var career=document.createElement('h2');
  career.textContent="Career Objectives";
  right.appendChild(career);
  main.appendChild(right);
  var info=document.createElement('h3');
  info.textContent=c.info;
  right.appendChild(info);
  main.appendChild(right);
  var line=document.createElement('hr');
  line.textContent=c.line;
  right.appendChild(line);
  main.appendChild(right);
}
function education(ed){
  var education=document.createElement('h2');
  education.textContent="Educational Qualifications";
  right.appendChild(education);
  main.appendChild(right);
  var line2=document.createElement('hr');
  line2.textContent=ed.line;
  right.appendChild(line2);
  main.appendChild(right);


var table=document.createElement('table');
table.border="1";
  let row='';

  row +="<tr>"+"<td>"+"sno"+"</td>"+
  "<td>"+"Degree"+"</td>"+
  "<td>"+"Institute"+"</td>"+
  "<td>"+"Yop"+"</td>"+
  "</tr>";


  for(i in ed){

  row +="<tr>"+"<td>"+ed[i].sno+"</td>"+
  "<td>"+ed[i].degree+"</td>"+
  "<td>"+ed[i].institute+"</td>"+
  "<td>"+ed[i].yop+"</td>"+
  "</tr>";


table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}


}
function skills(sk){
  var skills=document.createElement('h2');
  skills.textContent="Technical Skills";
  right.appendChild(skills);
  main.appendChild(right);
  var l3=document.createElement('hr');
  right.appendChild(l3);
  main.appendChild(right);

var ul=document.createElement(ul);
right.appendChild(ul);
  for(i in sk){
    var li=document.createElement("li");
    li.textContent=sk[i].skills;
    ul.appendChild(li);


  }
}
