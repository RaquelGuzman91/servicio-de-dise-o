/*===============           ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.sidebar');

menuIcon.onclick = () => 
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');

    /*==========        ========*/
    document.querySelector('#menu-icon').addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }   else {
            sidebar.classList.add('active');
        }
    });


    /*===============           ====================*/
    let header = document.querySelector('.sidebar');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===============           ====================*/
        menuIcon.classList.remove('bi-x');
        navbar.classList.remove('active');



    /*==============        scrollY            =================*/
   let sections = document.querySelectorAll('section');
   let navLinks = document.querySelectorAll('header nav a');
   
   window.onscroll = () => {
       sections.forEach(sec => {
           let top = window.scrollY;
           let offset = sec.offsetLeft - 150;
           let height = sec.offsetHeight;
           let id = sec.getAttribute('id');
   
           if(top >= offset && top < offset + height) {
               navLinks.forEach(links => {
                   links.classList.remove('active');
                   document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
               });
           };
       });
   
       /*==============    sticky navbar   =================*/
       let header = document.querySelector('.sidebar');
   
       header.classList.toggle('sticky', window.scrollY > 100);
   
         /*==============    remove toggle icon and navbar when click navbar link   =================*/
       menuIcon.classList.remove('bi-x');
       navbar.classList.remove('active');
};

