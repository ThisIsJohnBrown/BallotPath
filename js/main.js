$(function() {
    $('.btn-elections').click(function(e) {
      e.preventDefault();
      $('.election-rows').slideDown();
    });
    $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
});