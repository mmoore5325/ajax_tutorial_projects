$(document).ready(function() {
    var url = "../data/employees.json";
    $.getJSON(url, function(response) {
        var newhtml = "<ul class='bulleted'>";
        $.each(response, function(index, value) {
            if (value.inoffice === true) {
                newhtml += '<li class="in">';
            } else {
                newhtml += '<li class="out">';
            }
            newhtml += value.name + "</li>";
        });
        newhtml += "</ul>";
        $('#employeeList').html(newhtml);
    });
});