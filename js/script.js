// all code that interacts with the DOM in a call to jQuery to ensure that CSS and HTML is loaded properly
$(function () {
  // used to call all functions
  displayCurrentDateAndTime();
  pastPresentFutureTimeblock();
  savedData();
  // save and clear buttons
  var saveBtn = $('.saveBtn');
  var clearBtn = $('#clearBtn')
  // save and clear button actions when clicked
  saveBtn.on('click', function() {
    localStorage.setItem($this).parent().attr('id'), $(this).sibling().eq(1).val()
  })
  clearBtn.on('click', function() {
    $('textarea').val('');
    localStorage.clear();
  });
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
  // stores the data in local storage in the correct time block
  function savedData() {
    $('.description').each(function() {
      $(this).val(localStorage.getItem($this).parent().attr('id'));
    })
  }
  // displays the current date in the header
  function displayCurrentDateAndTime () {
    var date = dayjs();
    $('#currentDay').text(date.format('dddd, MMM DD, YYYY'))
  }
});
