
$(document).ready(function () {

    var months = ['January', 'February', 'March', 'April', 'May', 'JuNe', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dates = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    $('#Date').html(dates[newDate.getDate()] + ' ' + newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval(function () {
        var seconds = new Date().getSeconds();
        $('#sec').html((seconds < 10 ? '0' : '') + seconds);
    },1000);

    setInterval(function () {
        var minutes = new Date().getMinutes();
        $('#min').html((minutes < 10 ? '0' : '' ) + minutes);
    },1000);

    setInterval(function () {
        var hours = new Date().getHours();
        $('#hours').html((hours < 10 ? '0' : '') + hors);
    },1000);

});