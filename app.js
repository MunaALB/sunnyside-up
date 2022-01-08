const navSlide = ()=>{
    const burger = document.querySelector('.header__navigation--burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const button = document.querySelector('.btn--white');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        button.classList.remove('btn--white')
        button.classList.add('btn--yellow')
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + .4}s`;
            }
           
        })
    });
    
}

navSlide();