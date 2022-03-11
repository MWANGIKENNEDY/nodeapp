console.log('testing ie');
let btn = document.querySelector('.toggle-menu');
let content = document.querySelector('.navlinks');


btn.addEventListener('click',function(){
    content.classList.toggle('active');
});