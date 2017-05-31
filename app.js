$(function() {
  $(".workflow-item").click(function() {
    $(".workflow-item-info").addClass("open");
    $(".workflow-list").addClass("open");
  });

  $(".go-back").click(function() {
    $(".workflow-item-info").removeClass("open");
    $(".workflow-list").removeClass("open");
  });
});
