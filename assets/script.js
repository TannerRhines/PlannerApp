console.log("the files are linked");




// declare current hour using dayJS
const currentHour = dayjs().format('H');




function enterText() {
  $('.saveBtn').on('click', function() {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}



$('.time-block').each(function() {
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});


function hourlyColor() {
  $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    $(this).toggleClass('past', blockHour < currentHour);
    $(this).toggleClass('present', blockHour === currentHour);
    $(this).toggleClass('future', blockHour > currentHour);
  });
}

function refreshColor() {
  $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    if (blockHour == currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else if (blockHour < currentHour) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
}





// function to set the current Time and Region 
function currentTime() {
  var dateElement = $('#date');
  var current = new Date();
  dateElement.text(current);
}

setInterval(currentTime, 1000);


enterText();

currentTime();
hourlyColor();
refreshColor();




