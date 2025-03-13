const nightMode = document.querySelector("#nightMode");
const menuMobile = document.querySelector("#menuShow")
const navBar = document.querySelector('.navBar')


nightMode.addEventListener('click',()=>{
    if(nightMode.classList.contains("bi-brightness-low-fill")){
        document.documentElement.style.setProperty('--Branco', '#272727');
        document.documentElement.style.setProperty('--Preto','#f2f2f2');
        document.documentElement.style.setProperty('--Rosa','#bf625a');
        document.documentElement.style.setProperty('--Marrom','#f2dceb');
        nightMode.classList.remove('bi-brightness-low-fill')
        nightMode.classList.add('bi-moon-fill');
    }else{
        document.documentElement.style.setProperty('--Branco', '#f2f2f2');
        document.documentElement.style.setProperty('--Preto','#272727');
        document.documentElement.style.setProperty('--Rosa','#f2dceb');
        document.documentElement.style.setProperty('--Marrom','#bf625a');
        nightMode.classList.add('bi-brightness-low-fill')
        nightMode.classList.remove('bi-moon-fill');
    }
});

menuMobile.addEventListener('click',() => {
    if(menuMobile.classList.contains('bi-list')){
        navBar.style.top = '120px';
        menuMobile.classList.remove('bi-list')
        menuMobile.classList.add('bi-x-lg')
    }else{
        navBar.style.top = '-80vh';
        menuMobile.classList.add('bi-list')
        menuMobile.classList.remove('bi-x-lg')
    }
})