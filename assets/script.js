console.log("the files are linked");

// declare current hour using dayJS
let currentHour = dayjs().format('H');

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

// hanges the color of each time block based on whether it's in the "past, present, or future" 
function hourlyColor() {
  $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    $(this).toggleClass('past', blockHour < currentHour);
    $(this).toggleClass('present', blockHour == currentHour);
    $(this).toggleClass('future', blockHour > currentHour);
  });
}



// will save the user's input in a textarea to localStorage 
function textEntry() {
  $('.saveBtn').on('click', function() {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}

// function to set the current Time and Region 
function currentTime() {
  var dateElement = $('#date');
  var current = new Date();
  dateElement.text(current);

  // Update currentHour every time currentTime is called.
  currentHour = dayjs().format('H');
  hourlyColor();
}

setInterval(currentTime, 1000);

enterText();
currentTime();
