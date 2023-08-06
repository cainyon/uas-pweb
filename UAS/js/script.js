//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//clik menu
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//click di luar for close
const pilihan = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!pilihan.contains(e.target) && !navbarNav.contains(e.target) ){
        navbarNav.classList.remove('active')
    }
});