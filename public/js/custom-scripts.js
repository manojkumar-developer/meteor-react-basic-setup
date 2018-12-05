/* Top Banner On Load */
$(document).ready(function() {
  setTimeout(function() {
    $(".top-banner .collapse")
      .collapse("show")
      .fadeIn(500);
  }, 1000);
});
/* Mobile Menu Toggle */
$(document).ready(function() {
  $(".navbar-nav.main-menu li a").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar-nav.profile-menu > li > a.dashboard-link").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar-nav.profile-menu > li > button").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar-nav.profile-menu li div.dropdown-menu a ").click(function(event) {
    $(".navbar-collapse").collapse("hide");
  });
});

/* Cannot scroll down after enabling Developer tools 
$(document).ready(function() {
  for (div=0; div < document.querySelectorAll('div').length; div++) {
    document.querySelectorAll('div')[div].style.overflow = "auto";
  };
});*/
