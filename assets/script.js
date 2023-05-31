console.log("the files are linked");








// time zone Alaska
function displayTime() {
    var options = {
      timeZone: 'America/Anchorage',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    var alaskaTime = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('time').innerHTML = alaskaTime;
  }

  // Update the time every second
  setInterval(displayTime, 1000);





//   time zone Dubai
  function displayTimeDXB() {
      var options = {
        timeZone: 'Asia/Dubai',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      var dubaiTime = new Date().toLocaleTimeString('en-US', options);
      document.getElementById('timeDXB').innerHTML = dubaiTime;
    }

    // Update the time every second
    setInterval(displayTimeDXB, 1000);

    //   time zone Dubai
  function displayTimeFR() {
    var options = {
      timeZone: 'Europe/Paris',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    var dubaiTime = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('timeFR').innerHTML = dubaiTime;
  }

  // Update the time every second
  setInterval(displayTimeFR, 1000);


  function displayTimeHK() {
    var options = {
      timeZone: 'Asia/Hong_Kong',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    var dubaiTime = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('timeHK').innerHTML = dubaiTime;
  }

  // Update the time every second
  setInterval(displayTimeHK, 1000);