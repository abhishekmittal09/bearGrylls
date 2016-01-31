$(document).ready(function () {
    $.getJSON('/Scripts/data.json', function (data) {
        console.log(data);
        var trips = data.trips;
        console.log(trips);
    });
});