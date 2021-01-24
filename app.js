
//modal
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".itemBox");
const original = document.querySelector(".full-img");

previews.forEach(preview =>{
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        console.log( preview.getAttribute("data-original"));
        const originalSrc = preview.getAttribute("data-original");
        original.src=`${originalSrc}`;
    });
});

modal.addEventListener('click',(e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove("open");
    }
});  

const skill1 = document.querySelector('.skill:nth-child(1)');
const skill2 = document.querySelector('.skill:nth-child(2)');
const skill3 = document.querySelector('.skill:nth-child(3)');
const skill4 = document.querySelector('.skill:nth-child(4)');
const skill5 = document.querySelector('.skill:nth-child(5)');
const skill6 = document.querySelector('.skill:nth-child(6)');
const h_skill = document.querySelector('.skill-type');
const p_skill = document.querySelector('.skill-text');

skill1.addEventListener('click',function(){

    h_skill.innerHTML = "HTML";
    p_skill.innerHTML = "Able to use HTML or Hypertext Markup Language to provide content and structure to my website. HTML refers to the tags which give information to the browser on how the page should be rendered.";
});
skill2.addEventListener('click',function(){

    h_skill.innerHTML = "JAVA";
    p_skill.innerHTML = "Capable of using JAVA language in creating different types of programs of various usage. It is a popular object-oriented programming language used in developing desktop and mobile applications.";
});
skill3.addEventListener('click',function(){

    h_skill.innerHTML = "CSS";
    p_skill.innerHTML = "Capable of using CSS or Cascading Style Sheets to incorporate design with the content provided by HTML. CSS allows the Web pages to be presented in multiple ways concerning layout, fonts, colors, etc.";
});
skill4.addEventListener('click',function(){

    h_skill.innerHTML = "FIGMA";
    p_skill.innerHTML = "Able to use FIGMA in designing websites and producing vector artworks. FIGMA refers to a vector graphics editor and a prototyping tool that mainly focuses on web designing. It has multiple features that can further help in web designing such as the plugins and wireframing features.";
});
skill5.addEventListener('click',function(){

    h_skill.innerHTML = "JAVASCRIPT";
    p_skill.innerHTML = "Capable of improving the user experience and the complexity of the design through Javascript. It provides interactive elements on the web pages which is used to interact with the user.";
});
skill6.addEventListener('click',function(){

    h_skill.innerHTML = "WORDPRESS";
    p_skill.innerHTML = "Able to use WordPress to develop a beautiful website. WordPress is a simple platform that provides easy website management and development.";
});



const menu = document.querySelector('.logo-container');
const menu_bar = document.querySelector('#menu-container');
const logo_container = document.querySelector('.logo-container');
const menu_content = document.querySelector('.menu-list');
const menu_container = document.querySelector('.list-container');
const menu_container2 = document.querySelector('.list-container2');
const menu_container3 = document.querySelector('.list-container3');
const menu_container4 = document.querySelector('.list-container4');
const menu_container5 = document.querySelector('.list-container5');

var checker = 0;
const menu_display = document.querySelector('#menu-content');
menu.addEventListener('click',function(){
    if(checker == 0){
        menu_bar.style.width="100%";
        menu_bar.style.height="100%";
        checker += 1;
        console.log(checker);
        
        logo_container.style.background="white";
        menu_container.style.opacity = "1";
        menu_container.style.transform = "translateY(-20px)"; 
        menu_container2.style.opacity = "1";
        menu_container2.style.transform = "translateY(-20px)"; 
        menu_container3.style.opacity = "1";
        menu_container3.style.transform = "translateY(-20px)"; 
        menu_container4.style.opacity = "1";
        menu_container4.style.transform = "translateY(-20px)"; 
        menu_container5.style.opacity = "1";
        menu_container5.style.transform = "translateY(-20px)"; 
        menu_container.style.cursor ="pointer";
        menu_container2.style.cursor ="pointer";
        menu_container3.style.cursor ="pointer";
        menu_container4.style.cursor ="pointer";
        menu_container5.style.cursor ="pointer";
        menu_container.style.pointerEvents ="auto";
        menu_container2.style.pointerEvents ="auto";
        menu_container3.style.pointerEvents ="auto";
        menu_container4.style.pointerEvents ="auto";
        menu_container5.style.pointerEvents ="auto";
        menu_display.style.zIndex = "200";
        
    }else{
        menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
    }
   
})


menu_container.addEventListener('click',function(){
  menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
});

menu_container2.addEventListener('click',function(){
  menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
});

menu_container3.addEventListener('click',function(){
  menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
});


menu_container4.addEventListener('click',function(){
  menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
});


menu_container5.addEventListener('click',function(){
  menu_bar.style.width="0vw";
        menu_bar.style.height="0vh";
        checker -=1;
        logo_container.style.background="#f05454";  
        menu_container.style.transform = "translateY(20px)"; 
        menu_container.style.opacity = "0"; 
        menu_container2.style.transform = "translateY(20px)"; 
        menu_container2.style.opacity = "0"; 
        menu_container3.style.transform = "translateY(20px)"; 
        menu_container3.style.opacity = "0"; 
        menu_container4.style.transform = "translateY(20px)"; 
        menu_container4.style.opacity = "0"; 
        menu_container5.style.transform = "translateY(20px)"; 
        menu_container5.style.opacity = "0"; 
        menu_container.style.cursor ="default";
        menu_container.style.pointerEvents ="none";
        menu_container2.style.cursor ="default";
        menu_container2.style.pointerEvents ="none";
        menu_container3.style.cursor ="default";
        menu_container3.style.pointerEvents ="none";
        menu_container4.style.cursor ="default";
        menu_container4.style.pointerEvents ="none";
        menu_container5.style.cursor ="default";
        menu_container5.style.pointerEvents ="none";
        menu_display.style.zIndex = "0";
});







// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




  $(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.itemBox').show('1000'); 
        }
        else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})