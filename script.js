// Variable Declarations
let startbutton = document.getElementById('start');
let stopbutton = document.getElementById('stop');
let resetbutton = document.getElementById('reset');
let hours = 0;
let minutes = 0;
let seconds = 0;
let time = true;

//clicking on START button

startbutton.addEventListener('click', function()
{
    time = true;
    stopWatch();
});

//clicking on STOP button

stopbutton.addEventListener('click', function()
{
    time = false;
});

//clicking on RESET button

resetbutton.addEventListener('click', function()
{
    time = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
  // restoring values to 00
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
});
// Main stopwatch function
function stopWatch()
{
    if(time) 
    {
        seconds++ ;
        if(seconds==60)
        {
            minutes=minutes+1;
            seconds = 0;
        }    
        if (minutes==60)
        {
            hours+=1;
            minutes = 0;
            seconds = 0;
        }
      //displaying the 0 before values
        let hoursOutput = hours;
        let minutesOutput = minutes;
        let secondsOutput = seconds;
        if (hours < 10) {
            hoursOutput = '0' + hoursOutput;
        }
        if (minutes < 10) {
            minutesOutput = '0' + minutesOutput;
        }
        if (seconds < 10) {
            secondsOutput = '0' + secondsOutput;
        }
       // display of final result
        document.getElementById('hours').innerHTML = hoursOutput;
        document.getElementById('minutes').innerHTML = minutesOutput;
        document.getElementById('seconds').innerHTML = secondsOutput;
        

        setTimeout(stopWatch, 1000);
    }
}


