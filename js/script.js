(function() {

    var actualizarHora = function() {
        var date = new Date();
        var hours = date.getHours();
        var ampm;
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var dayweek = date.getDate();
        var contentDay = date.getDay();
        var contentMonth = date.getMonth();
        var contentYear = date.getFullYear();

        var phours = document.getElementById('hour');
        var pampm = document.getElementById('ampm');
        var pminute = document.getElementById('minute');
        var pseconds = document.getElementById('second');

        var pdayWeek = document.getElementById('dayweek');
        var pday = document.getElementById('day');
        var pmonth = document.getElementById('month');
        var pyear = document.getElementById('year');

        var week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
        pdayWeek.textContent = week[contentDay];
        pday.textContent = contentDay;

        var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pmonth.textContent = month[contentMonth];
        pyear.textContent = contentYear;

        if (hours >= 12) {
            hours = hours - 12;
            ampm = 'PM';
        } else {
            ampm = "AM";
        }

        if (hours == 0) {
            hours = 12;
        }
        phours.textContent = hours;
        pampm.textContent = ampm;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        pminute.textContent = minutes;

        if (seconds < 10) {
            pseconds = '0' + seconds;
        }
        pseconds.textContent = seconds;


    };
    actualizarHora();
    var interval = setInterval(actualizarHora, 1000);


}());