const mounthEl = document.querySelector(".mounth");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const yearEl = document.querySelector(".year");
const currentDate = new Date();
const mounth = currentDate.getMonth();

mounthEl.innerHTML = currentDate.toLocaleString("en", { month: "long" });

dayEl.innerText = currentDate.toLocaleString("en", { weekday: "long" });

dateEl.innerText = currentDate.getDate();

yearEl.innerText = currentDate.getFullYear();
