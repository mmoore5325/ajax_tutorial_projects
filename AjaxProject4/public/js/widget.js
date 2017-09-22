// $(document).ready(function() {
//     var rooms = '<ul class="rooms">';
//     var url = '../data/rooms.json';
//     $.getJSON(url, function(data) {
//         console.log(data);
//         $(data).each(function(index, value) {
//             console.log(index);
//             if (value.available) {
//                 console.log(value.room + " is full");
//                 rooms += '<li class="full">';
//             } else {
//                 console.log(value.room + " is empty")
//                 rooms += '<li class="empty">';
//             }
//             rooms += value.room + "</li>";
//         });
//         rooms += "</ul>";
//         console.log(rooms);
//         $("#roomList").html(rooms);
//     });
//     $("#roomList").html(rooms);
// });

var url = '../data/rooms.json';
$.ajax(url, {
    type: 'GET',
    success: function(response) {
        html = '<ul class="rooms">';
        $.each(response, function(index, info) {
            console.log(info);
            let isAvailable = info.available ? 'empty' : 'full';
            var roomnum = info.room;
            html += `'<li class="${isAvailable}">${roomnum}</li>`;
        });
        html += "</ul>";
        $('#roomList').html(html);
    }
});