// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
anchor.addEventListener('click', function (event) {
event.preventDefault();
const section = document.querySelector(this.getAttribute('href'));
section.scrollIntoView({ behavior: 'smooth' });
});
});

// Highlight active section in navbar
window.addEventListener('scroll', () => {
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

sections.forEach((section, index) => {  
    let top = window.scrollY;  
    let offset = section.offsetTop - 100;  
    let height = section.offsetHeight;  

    if (top >= offset && top < offset + height) {  
        navLinks.forEach(link => link.classList.remove('active'));  
        navLinks[index].classList.add('active');  
    }  
});

});
