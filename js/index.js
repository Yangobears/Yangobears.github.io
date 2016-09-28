$( document ).ready(function() {
  $("#menu").click(function() {
      $("#drawer").slideToggle("slow");
      $("#main-pic").toggle();
  });
});
