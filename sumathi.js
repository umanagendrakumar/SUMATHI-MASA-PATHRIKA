const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navbarList = document.querySelector('.navbar-list');


menu.addEventListener('click', () => {
    close.style.display = "inline-block";
    navbarList.style.display = "block";
    menu.style.display = "none"
});

close.addEventListener('click', () => {
    close.style.display = "none";
    navbarList.style.display = "none";
    menu.style.display = "inline-block";
})

// const wrap = document.querySelector('.wrap');
// const dropdownItems = document.querySelector('.dropdown-items');

// wrap.addEventListener('click', () => {
//     alert('h');
// });




// const navbarLI2 = document.querySelector('.navbar-li2');
// const navbarLI3 = document.querySelector('.navbar-li3');
// const navbarLI4 = document.querySelector('.navbar-li4');
// const navbarLI5 = document.querySelector('.navbar-li5');
// const navbarLI6 = document.querySelector('.navbar-li6');
// const navbarLI7 = document.querySelector('.navbar-li7');
// const navbarLI8 = document.querySelector('.navbar-li8');
// const navbarLI9 = document.querySelector('.navbar-li9');

// const dropdownItems1 = document.querySelector('.dropdown-items1');
// const dropdownItems2 = document.querySelector('.dropdown-items2');
// const dropdownItems3 = document.querySelector('.dropdown-items3');
// const dropdownItems4 = document.querySelector('.dropdown-items4');
// const dropdownItems5 = document.querySelector('.dropdown-items5');
// const dropdownItems6 = document.querySelector('.dropdown-items6');
// const dropdownItems7 = document.querySelector('.dropdown-items7');
// const dropdownItems8 = document.querySelector('.dropdown-items8');

// navbarLI2.addEventListener('mouseenter', () => {
//     dropdownItems1.style.display = "block";
// });
// navbarLI2.addEventListener('mouseleave', () => {
//     dropdownItems1.style.display = "none";
// });


// navbarLI3.addEventListener('mouseenter', () => {
//     dropdownItems2.style.display = "block";
// });
// navbarLI3.addEventListener('mouseleave', () => {
//     dropdownItems2.style.display = "none";
// });


// navbarLI4.addEventListener('mouseenter', () => {
//     dropdownItems3.style.display = "block";
// });
// navbarLI4.addEventListener('mouseleave', () => {
//     dropdownItems3.style.display = "none";
// });


// navbarLI5.addEventListener('mouseenter', () => {
//     dropdownItems4.style.display = "block";
// });
// navbarLI5.addEventListener('mouseleave', () => {
//     dropdownItems4.style.display = "none";
// });


// navbarLI6.addEventListener('mouseenter', () => {
//     dropdownItems5.style.display = "block";
// });
// navbarLI6.addEventListener('mouseleave', () => {
//     dropdownItems5.style.display = "none";
// });


// navbarLI7.addEventListener('mouseenter', () => {
//     dropdownItems6.style.display = "block";
// });
// navbarLI7.addEventListener('mouseleave', () => {
//     dropdownItems6.style.display = "none";
// });


// navbarLI8.addEventListener('mouseenter', () => {
//     dropdownItems7.style.display = "block";
// });
// navbarLI8.addEventListener('mouseleave', () => {
//     dropdownItems7.style.display = "none";
// });


// navbarLI9.addEventListener('mouseenter', () => {
//     dropdownItems8.style.display = "block";
// });
// navbarLI9.addEventListener('mouseleave', () => {
//     dropdownItems8.style.display = "none";
// });
