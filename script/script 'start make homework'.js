window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  
  //Timer
  function countTimer(deadLine) {
      let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
 
      function getTimeRemaining () {
        //вычисляет сколько времени осталось до deadline
        let dateStop = new Date(deadLine).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {timeRemaining, hours, minutes, seconds};
      }
      
      function updateClock () {
        let timer = getTimeRemaining(); // получаем значения seconds, minutes, hours
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        
        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
      }
          
      updateClock();
  }

  countTimer('04 november 2020');

});