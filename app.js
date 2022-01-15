const h = document.querySelector(".h");
const m = document.querySelector(".m");
const s = document.querySelector(".s");
const am = document.querySelector(".ampm");


setInterval(function () {
  let dateObjet = new Date();
  let hours = dateObjet.getHours();
  let minutes =dateObjet.getMinutes();
  let seconds = dateObjet.getSeconds();
  let ampm = hours > 12 ? "PM" : "AM";
  let hour= "";
  if (hours == 0) {
    hour = 12;
  }
  if (hours > 0 && hours <= 12) {
    hour = hours;
  } else {
    hour = hours - 12;
  }
  let min="";
  if(minutes < 10){
    min=`0${minutes}`
  }
  else{
    min=minutes
  }

  let sec = "";
  if (seconds < 10) {
    sec = `0${seconds} `;
  } else {
    sec = seconds;
  }
  h.innerHTML = `${hour}`;
  m.innerHTML = `${min}`;
  s.innerHTML = `${sec}`;
  am.innerHTML = `${ampm}`;
}, 1000);



 //Counter with Loader 

const start = document.getElementById('start');
const h1 = document.getElementById('output');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const laoder = document.querySelector('.loader')





let counter_value;
let counter;


start.addEventListener('click' , function(){


   counter_value = count.value;

   counter = setInterval(() => {
       
       h1.innerHTML = counter_value;

       let width = loader(count.value, counter_value);

       laoder.style.width =`${width}%`;

       if(width > 50 && width <= 100){
           laoder.style.backgroundColor ='green';
       }
       else if(width > 30 && width <= 50){

           laoder.style.backgroundColor = 'orange';

       }else if(width <= 30){

           laoder.style.backgroundColor = 'red';
       };

       

       if(counter_value == 0){

           clearInterval(counter);

       }

       counter_value--;

   }, 1000);




});

// todo app

const todo = document.getElementById('do');
const add = document.getElementById('add');
const list = document.getElementById('list');

const todolist = ['alo' , 'potol']

add.addEventListener('click', function(){

    let li =document.createElement('li')
    li.className = 'list-group-item';
    li.innerHTML = todo.value;
    list.appendChild(li);
    todo.value='';

   
});