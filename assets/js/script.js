// lightbox and filter
var lightboxDescription = GLightbox({
  selector: 'glightbox'
});


function call(id) {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    console.log(item);
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn','glightbox');
      setTimeout(clean,500);
    } else {
      const check = items[index].classList.contains(id);
      console.log(check);

      if (check) {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
      } else {
        item.classList.add('d-none');
        item.classList.remove('fadeIn','glightbox');
      }
    }
  })
}

function clean() {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    item.classList.remove('fadeIn');
  })
}


$(document).ready(function(){

  $(document).on("click", ".b-box button", function(){
    $(".b-box button").removeClass("active");
    $(this).addClass("active");
  });

  /*owl-carousel*/

  $('.team-slider').owlCarousel({
      loop:true,
      margin:30,
      dots:true,
      slideTransition:`0.5s`,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })


  /*testimonial*/

  $('.t-slider').owlCarousel({
      loop:true,
      center: true,
      nav:true,
      margin:30,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })


  $('.blog-slider').owlCarousel({
      loop:true,
      center: true,
      margin:30,
      autoplay:true,
      autoplayTimeout:4000,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })
 





});