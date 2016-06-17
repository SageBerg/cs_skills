var $ = require('jquery');

$(document).ready(function() {
  var s = $("#skill_level_calculation");
  var pos = s.position();
  $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos > pos.top) {
          s.addClass("stick");
      } else {
          s.removeClass("stick");
      }
  });
});
