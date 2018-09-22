// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
/////////////////////
var m=0;
var slideIndex = 1;
showDivs(slideIndex,m);

function plusDivs(n) {
  showDivs(slideIndex += n, m);
}

function currentDiv(n) {
  showDivs(slideIndex = n, m);
}
window.addEventListener("resize", function(){
  if(this.innerWidth<899){
    m=1;
    showDivs(slideIndex,m);
  } else{
    m=0;
    showDivs(slideIndex,m);
  }
});

function showDivs(n,screen_size) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log('to jest:' + x);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length && screen_size ==0) {slideIndex = 1}    
  if (n < 1 && screen_size == 0) {slideIndex = x.length}
  if(screen_size == 0){
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   x[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";  
   }
   var slide_nav = document.getElementsByClassName("section-slideshow__container");
   slide_nav.style.display = "none";

  }
  

  }

  


////////////

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
  
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     if (window.innerWidth >= 900) {
//       console.log("Wersja desktoP");
//       x[i].style.display = "none";  
//     } else {
//       console.log("Wersja mobilnA");
//       x[i].style.display = "block";
//     }
     
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//   }
//   x[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }