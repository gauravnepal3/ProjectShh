function increase(n){
    var currentnumber=document.getElementById('number');
    currentnumber=currentnumber+n;
    document.getElementById('number').innerHTML=currentnumber;
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
  /*search button */
 function search(){
   document.getElementById('search-container').style.display='inline';
   document.getElementById("hide-search").style.display='none';
   document.getElementsById('nav-list-id').style.padding="0.5em 1em"
  if (window.innerWidth<700){
    document.getElementsById("hide").style.display='none';
  }
 
 
 
  }
 function closesearch(){
   document.getElementById('search-container').style.display='none';
   document.getElementById("hide-search").style.display='inline';
 }
  
  jQuery(document).ready(function($) {
    // open search
    $('header.top .topmenu li.search').on('click', 'a', function(e) {
      $('.search-bar').fadeIn();
      $('.topmenu').fadeOut();
      e.preventDefault();
    });
    // close search
    $(document).mouseup(function(e) {
      var container = $('.search-bar form');
      if (!container.is(e.target) &&
        container.has(e.target).length === 0) {
        $('.search-bar').fadeOut();
        $('.topmenu').fadeIn();
      }
    });
  });
/* Comment */
function comment(){
  document.getElementById('showcomment').style.display="block";
  hidecomment();
}


// smaller screen search bar jquery 
$(window).resize(function(){

  if ($(window).width() <= 600) {  

         $('.hide').hide();

  }     

});
