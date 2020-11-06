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

          const timeCheck = (element1, element2) => {
              if (String(element1).length === 1) {
                element2.textContent = '0' + element1;
              } else {
                element2.textContent = element1;
              }
          };


          //Часы
          timeCheck(timer.hours, timerHours);

          //Минуты
          timeCheck(timer.minutes, timerMinutes);

          // Секунды
          timeCheck(timer.seconds, timerSeconds);

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

        updateClock();

        idInterval = setInterval(updateClock, 1000);
    }

    countTimer('07 november 2020 23:32:20');

    //Menu

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'), // кнопка бургер, открывает и закрывает меню
            menu = document.querySelector('menu'), // скрытое, с помощью translate(-100%) меню
            closeBtn = document.querySelector('.close-btn'), // кнопка "крестик" в меню 
            menuItems = menu.querySelectorAll('ul>li>a'), // список ссылок в выпадающем меню

            handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };

        // Кнопка-бургер меню, открыть и закрыть
        btnMenu.addEventListener('click', handlerMenu);

        // Кнопка "крестик", закрывает меню
        closeBtn.addEventListener('click', handlerMenu);
        
        // Навешать прослушиватель всем элементам выпадающего меню
        menuItems.forEach((elem) => {elem.addEventListener('click', handlerMenu);});
    };

    toggleMenu();

    //PopUp окно

    const togglePopUp = () => {
        const popUp = document.querySelector('.popup'),
        popUpContent = document.querySelector('.popup-content'),
        popUpBtns = document.querySelectorAll('.popup-btn'),
        popUpClose = document.querySelector('.popup-close');

        //Навешивает всем popUpBtns display block по клику + анимация Opacity
        popUpBtns.forEach(elem => {
            elem.addEventListener('click', () => {
              if(window.innerWidth > 768) {
                let count = 0;
                popUpContent.style.opacity = 0;
                console.log(popUpContent.style.opacity);
                popUp.style.display = 'block';
                
                setInterval(() => {
                    if (popUpContent.style.opacity < 1) {
                        count += 0.04;
                        popUpContent.style.opacity = count;
                    } else {
                        clearInterval();
                    }
                }, 40);
                } else {
                    popUp.style.display = 'block';
                }
            });
        });

        //Кнопка "закрыть popUp"
        popUpClose.addEventListener('click', () => {
            popUp.style.display = 'none';
            
        });
        
        let a = popUpContent.style.opacity;
        console.log(window.innerWidth);
        console.log(typeof a);
    };

    togglePopUp();

});