// a call to jQuery to ensure that CSS and HTML is loaded properly
$(function () {
  // used to call all functions
  displayCurrentDateAndTime();
  pastPresentFutureTimeblock();
  savedData();
  // save buttons
  var saveBtn = $('.saveBtn');
  // save button action when clicked
  saveBtn.on('click', function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings().eq(1).val())
  });
  // stores the data in local storage in the correct time block
  function savedData() {
    $('.description').each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')));
    })
  }
  // Applies time block colors based on time frame
  function pastPresentFutureTimeblock() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function() {
      var timeSlot = $(this).attr('id');
      if (timeSlot < currentHour) {
        $(this).addClass('past')
      }
      else if (timeSlot == currentHour) {
      $(this).addClass('present')
      }
      else if (timeSlot > currentHour) {
        $(this).addClass('future')
      }
    })
  }
  // displays the current date in the header
  function displayCurrentDateAndTime () {
    var date = dayjs();
    $('#currentDay').text(date.format('dddd, MMM DD, YYYY'))
  }
});
