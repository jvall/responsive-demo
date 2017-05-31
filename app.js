$(function() {
  $(".workflow-item").click(function() {
    $(".workflow-item-info").addClass("slide-open");
    $(".workflow-list").addClass("slide-open");
  });

  $(".go-back").click(function() {
    $(".workflow-item-info").removeClass("slide-open");
    $(".workflow-list").removeClass("slide-open");
  });
});
