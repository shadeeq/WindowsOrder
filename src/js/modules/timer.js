function addZero(num) {
    if (num > 0 && num < 10) {
        num = `0${num}`;
    } else {
        return num;
    }
    return num
}

function timer (timerSelector, deadline) {
    
    function getTimeLeft(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date),
              days = Math.floor((t / (1000*60*60*24))),
              hours = Math.floor((t / (1000*60*60) % 24)),
              minutes = Math.floor((t / (1000*60) % 60)),
              seconds = Math.floor((t / 1000 % 60));
        
        return {
            timeLeft: t,
            days,
            hours,
            minutes,
            seconds
        }
    }

    function updateTimer(timerSelector, deadline) {
        const timer = document.querySelector(timerSelector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        const updater = setInterval(doTimerUpdates, 1000);

        doTimerUpdates();

        function doTimerUpdates() {
            const t = getTimeLeft(deadline);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.timeLeft < 0) {
                clearInterval(updater);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }
    updateTimer(timerSelector, deadline);
}
export default timer;