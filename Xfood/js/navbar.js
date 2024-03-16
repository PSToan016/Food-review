function toggleNavbar() {
    var navbar = document.getElementById('navbar-feft');
    navbar.classList.toggle('active');
    var content = document.getElementById('content');
    content.classList.toggle('active');
  }

  function handleResize() {
    var navbar = document.getElementById('navbar-left');
    var content = document.getElementById('content');
    var navbarMobile = document.getElementById('navbar-mobile');
    var nava1 = document.getElementById('nav-a1');
    var nava2 = document.getElementById('nav-a2');
    var nava3 = document.getElementById('nav-a3');
    var nava4 = document.getElementById('nav-a4');
    var nava5 = document.getElementById('nav-a5');
    var navh2logo = document.getElementById('navh2-logo');
    var naviconlogo = document.getElementById('navicon-logo');
    var navmenudrop = document.getElementById('navmenu-drop');


    if (window.innerWidth <= 767) {
        navbar.style.width = '0';
        content.style.marginLeft = '0';
        navbarMobile.style.display = 'block';
        naviconlogo.style.display = 'none';
        navh2logo.style.display = 'none';

    } 
    else if (window.innerWidth <= 1205) {
        navbar.style.width = '80px';
        content.style.marginLeft = '80px';
        navbarMobile.style.display = 'none';
        nava1.style.display = 'none';
        nava2.style.display = 'none';
        nava3.style.display = 'none';
        nava4.style.display = 'none';
        nava5.style.display = 'none';
        naviconlogo.style.display = '';
        navh2logo.style.display = 'none';

      }
    else {
        navbar.style.borderRight = '1px solid grey';
        navbar.style.width = '320px';
        content.style.marginLeft = '210px';
        navbarMobile.style.display = 'none';
        nava1.style.display = '';
        nava2.style.display = '';
        nava3.style.display = '';
        nava4.style.display = '';
        nava5.style.display = '';
        naviconlogo.style.display = 'none';
        navh2logo.style.display = '';

    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('DOMContentLoaded', handleResize);