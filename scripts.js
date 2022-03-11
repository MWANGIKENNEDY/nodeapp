
let btn = document.querySelector('.toggle-menu');
let content = document.querySelector('.navlinks');

content.classList.add('active');

btn.addEventListener('click',()=>{
    content.classList.toggle('active');
})