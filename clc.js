function clock() {
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = h % 12;
    if (h == 0) {
        h = 12;
    }

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    if (h == 8 && m == 21) {
        var sound = document.getElementById(sound1);
        sound.Play();
    }
}

var inteval = setInterval(clock, 1000);