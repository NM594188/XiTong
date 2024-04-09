// countdown.js
window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var refreshButton = document.getElementById('refresh');

    function countdown(minutes) {
        var seconds = minutes * 60;

        var countdownInterval = setInterval(function() {
            var minutesRemaining = Math.floor(seconds / 60);
            var secondsRemaining = seconds % 60;

            countdownElement.textContent = pad(minutesRemaining) + ':' + pad(secondsRemaining);

            if (seconds <= 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = '00:00';
            }

            seconds--;
        }, 1000);
    }

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }

    countdown(60); // 设置倒计时时间

    refreshButton.onclick = function() {
        countdown(60); // 刷新倒计时时间
    };
};
