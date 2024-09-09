$(document).ready(function() {
  // Toggle mobile menu on navbar burger click
  $('.navbar-burger').click(function() {
    $(this).toggleClass('active'); // Toggle the active class to animate the burger icon
    
    var $menu = $('.mobile-menu');

    if ($menu.is(':hidden')) {
      $('body').addClass('no-scroll').css('background-color', '#3E4E5Fff'); // Set body background color to charcoal inline
      $menu.css({
        display: "flex",
        flexDirection: "column"
      }).hide().slideDown(300, function() {
        // Animation complete callback
        $menu.find('li').each(function(index) {
          $(this).delay(100 * index).animate({ opacity: 1 }, 300); // Adjust delay and animation as needed
        });
      });
    } else {
      $('body').removeClass('no-scroll').css('background-color', '');
      $menu.find('li').animate({ opacity: 0 }, 300, function() {
        $menu.slideUp(300, function() {
          $('body').removeClass('no-scroll').css('background-color', ''); // Revert body background color
        });
      });
    }
  });
});







$(document).ready(function() {
  /* Home Page */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-down-arrow').fadeOut();
    } else {
      $('.scroll-down-arrow').fadeIn();
    }
  });

  $('.scroll-down-arrow').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });




    /* Details Page */
    const detailsGrid = $('#details-grid');

    $('.tile').on('click', function() {
      let target = $(this).data('target');
      if(target !== undefined){
        $('#expanded-container').removeClass('hidden');
        $(target).removeClass('hidden');
        $('.tile').addClass('hidden');
        detailsGrid.removeClass('gap-5');
      }
    });
  
    $('.close-expanded').on('click', function() {
      detailsGrid.addClass('gap-5');
      $(this).closest('.expanded-content').addClass('hidden');
      $('.tile').removeClass('hidden');
    });
});
