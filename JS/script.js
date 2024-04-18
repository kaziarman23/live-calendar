const mounthEl = document.querySelector(".mounth");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const yearEl = document.querySelector(".year");
const currentDate = new Date();
const mounth = currentDate.getMonth();


// mounthEl.innerHTML = currentDate.tolocalString('en',{month:'long'})

// dayEl.innerText = currentDate.tolocalString('en',{weekday:'long'});


let num = currentDate.getDate();
console.log(num)
dateEl.appendChild(num);


yearEl.innerText = currentDate.getFullYear();
