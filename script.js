burger = document.querySelector('.burger')
navlist = document.querySelector('.nav-list');
navbar = document.querySelector('.navbar')
leftside=document.querySelector('.leftside')
burger.addEventListener('click',()=>{
  navlist.classList.toggle('h-nav-resp');
  navlist.classList.toggle('v-class-resp')
  leftside.classList.toggle('leftside-p')
} )
