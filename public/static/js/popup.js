const paths = [
  'best-fuel-monitoring-software',
  'Dashcam-with-GPS',
  'GPS-Tracker-For-Kids',
  'best-transportation-management-software',
  'transport-management-system'
];

// Function to open the popup form
$(document).on('click',".closex",function() {
    $("body").css("overflow-y", "auto");
    $(".overlayg").fadeOut(200);
    $(".close_btn").css("display", "none");
    // this function for add the specific functionality for the best fuel monitoring software page
    $(".display_block").hide();
    $(".contact-form-cont").removeClass("p-fix");


    $(window).scroll(function () {
      if ($(window).scrollTop() < 1) {
          $(".header_area").removeClass("navbar_fixed");
      } else {
        $(".header_area").addClass("navbar_fixed");
      }
    });


});

$(document).on('click',".c-btnn",function() {
  $("html").animate({ scrollTop: 100 }, "fast");
});

$(document).ready(function () {
  $(".display_block").hide();
});

  // var shownPopup = false;
  //   // this function for add the specific functionality for the best fuel monitoring software page
  // if(window.location.pathname.includes('best-fuel-monitoring-software') || window.location.pathname.includes('Dashcam-with-GPS') || window.location.pathname.includes('GPS-Tracker-For-Kids')){
  //   $(document).on('click',".c-btn",function() {
  //     showPopup = true;
  //     $("body").css("overflow-y", "hidden");
  //     $(".overlaygn").fadeIn(300);
  //     $(".display_block").show();
  //     $(".close_btn").css("display", "inline-block");
  //     $(".display_block").addClass("p-fix");
  //   });
  //   // this function for add the specific functionality for the best fuel monitoring software page
  // }else if(!window.location.pathname.includes('best-fuel-monitoring-software') || window.location.pathname.includes('Dashcam-with-GPS') || window.location.pathname.includes('GPS-Tracker-For-Kids'){
  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() > 1100) {
  //       showPopup = true;
  //       $("body").css("overflow-y", "hidden");
  //       $(".overlayg").fadeIn(300);
  //       $(".close_btn").css("display", "inline-block");
  //       $(".contact-form-cont").addClass("p-fix");
  //       $(window).off("scroll");
  //     }
  //   });
  // }



  var shownPopup = false;
// this function for add the specific functionality for the best fuel monitoring software page
if ((paths.some(path => window.location.pathname.includes(path)))) {
  
  $(document).on('click', ".c-btn", function () {
    shownPopup = true;
    $("body").css("overflow-y", "hidden");
    $(".overlayg").fadeIn(300);
    $(".display_block").show();
    $(".close_btn").css("display", "inline-block");
    $(".display_block").addClass("p-fix");
  });

// this function for specific functionality on other pages
} else if (paths.every(path => !window.location.pathname.includes(path))
          ) {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1100) {
      shownPopup = true;
      $("body").css("overflow-y", "hidden");
      $(".overlayg").fadeIn(300);
      $(".close_btn").css("display", "inline-block");
      $(".contact-form-cont").addClass("p-fix");
      $(window).off("scroll");
    }
  });

// this else if condition adds a new functionality
} 