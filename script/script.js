window.addEventListener('DOMContentLoaded', function(){
  'use strict';
  
    //Timer
    function countTimer(deadLine) {
        let idInterval,
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
      
        function getTimeRemaining () {

            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {timeRemaining, hours, minutes, seconds};
        } //вычисляет сколько времени осталось до deadline

        function updateClock () {
          let timer = getTimeRemaining();

          //Часы
          if (String(timer.hours).length === 1){
            timerHours.textContent = '0' + timer.hours;
          } else {
            timerHours.textContent = timer.hours;
          }

          //Минуты
          if (String(timer.minutes).length === 1){
            timerMinutes.textContent = '0' + timer.minutes;
          } else {
            timerMinutes.textContent = timer.minutes;
          }

          // Секунды
          if (String(timer.seconds).length === 1){
            timerSeconds.textContent = '0' + timer.seconds;
          } else {
            timerSeconds.textContent = timer.seconds;
          }

          if (timer.timeRemaining < 0) {
              clearInterval(idInterval);
              timerHours.textContent = '00';
              timerHours.style.color = 'tomato';

              timerMinutes.textContent = '00';
              timerMinutes.style.color = 'tomato';

              timerSeconds.textContent = '00';
              timerSeconds.style.color = 'tomato';
          }
        } // получаем и записываем значения seconds, minutes, hours

        idInterval = setInterval(updateClock, 1000);
    }
    countTimer('03 november 2020 23:32:20');
});