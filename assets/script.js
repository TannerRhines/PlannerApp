console.log("the files are linked");












// function to set the current Time and Region 
function currentTime() {
  var dateElement = $('#date');
  var current = new Date();
  dateElement.text(current);
}

setInterval(currentTime, 1000);





