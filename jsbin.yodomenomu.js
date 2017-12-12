$(".accordion").click(function(){
  $(this).toggleClass("active");
  var panel = $(this).next();
  panel.toggle();
});