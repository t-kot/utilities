(function() {
    window.onload = function() {
        if(location.href.match(/localhost/)) {
            startWatching();
        };
    };

    function startWatching() {
        console.log('Start lazy watching');
        var timer = 0;

        setInterval(function() {
            timer += 10;
            if(timer % 600 == 0) {
                alert('Your leaving dev page for ' + (timer / 60) + ' minutes');
            }
        }, 10000);
    }
})();
