$(document).ready(function () {
  
  $('.saveBtn').on('click', function () {
    
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hUpdate() {

    var currentH = dayjs().hour();

    $('.time-block').each(function () {
      var blockH = parseInt($(this).attr('id').split('-')[1]);

      if (blockH < currentH) {
        $(this).addClass('past');
      } else if (blockH === currentH) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hUpdate();

  setInterval(hUpdate, 15000);

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
