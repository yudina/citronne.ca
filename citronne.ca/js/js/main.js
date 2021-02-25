$( document ).ready(function() {
    $('.nav__hamburger').click(function(){
        $('.nav__hidden').fadeToggle(500);
        $(this).toggleClass('active');
    });
});


function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount + " likes this";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}