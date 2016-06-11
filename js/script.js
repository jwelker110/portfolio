$(document).ready(function(){
  var sections = $(".work");

  sections.each(function(index){
    var el = this;
    setTimeout(function(){
      $(el).fadeIn(1000);
    }, 200*index);
  });

});