// THIS IS FOR index.erb AND THE BUTTONS

// $(document).ready(function() {
//     $('button').click(function() {
//         $('button').removeClass("selected");
//         $(this).addClass("selected");
//         var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//         var animal = $(this).text(); // This is the text displayed on the button clicked
//         // text gets all the text from within the HTML element.
//         var flickrOptions = { // the data is expected to be contain JSON and objects
//             tags: animal, // tags is a parameter that flickr's api uses, it tells flickr
//             format: "json" // to search for most recent photos with "animal"
//         };

//         function displayPhotos(data) {
//             photoHtml = "<ul>";
//             $.each(data.items, function(index, value) {
//                 photoHtml += '<li class="grid-25 tablet-grid-50">';
//                 photoHtml += `<a href="${value.link}" class="image">`;
//                 photoHtml += `<img src="${value.media.m}"></a></li>`;
//                 console.log(index);
//             });
//             photoHtml += '</ul>';
//             $('#photos').html(photoHtml);
//         }
//         $.getJSON(flickrAPI, flickrOptions, displayPhotos)
//     });
// });

//  WASN'T ABLE TO GET THIS WORKING

// $(document).ready(function() {
//     $('form').submit(function(e) {
//         e.preventDefault();
//         var searchTerm = $('#search').val();

//         url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

//         var flickrOptions = { // the data is expected to be contain JSON and objects
//             tags: searchTerm, // tags is a parameter that flickr's api uses, it tells flickr
//             format: "json" // to search for most recent photos with "animal"
//         };

//         function displayPhotos(data) {
//             photoHtml = "<ul>";
//             $.each(data.items, function(index, value) {
//                 photoHtml += '<li class="grid-25 tablet-grid-50">';
//                 photoHtml += `<a href="${value.link}" class="image">`;
//                 photoHtml += `<img src="${value.media.m}"></a></li>`;
//                 console.log(index);
//             });
//             photoHtml += '</ul>';
//             $('#photos').html(photoHtml);
//         }

//         $.ajax(url, {
//             data: flickrOptions,
//             success: displayPhotos

//         });
//     });
// });

//  THIS IS FOR index2.erb AND THE SEARCH FORM BOX

// $(document).ready(function() {
//     $('form').submit(function(e) {
//         e.preventDefault();
//         var searchTerm = $('#search').val();
//         var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//         // var animal = $(this).text(); // This is the text displayed on the button clicked
//         // text gets all the text from within the HTML element.
//         var flickrOptions = { // the data is expected to be contain JSON and objects
//             tags: searchTerm, // tags is a parameter that flickr's api uses, it tells flickr
//             format: "json" // to search for most recent photos with "animal"
//         };

//         function displayPhotos(data) {
//             photoHtml = "<ul>";
//             $.each(data.items, function(index, value) {
//                 photoHtml += '<li class="grid-25 tablet-grid-50">';
//                 photoHtml += `<a href="${value.link}" class="image">`;
//                 photoHtml += `<img src="${value.media.m}"></a></li>`;
//                 console.log(index);
//             });
//             photoHtml += '</ul>';
//             $('#photos').html(photoHtml);
//         }
//         $.getJSON(flickrAPI, flickrOptions, displayPhotos)
//     });
// });



// GUYS AWESOME SOLUTION, that i added some code to, such as disabled, and changing
// the button to searching and enabling it once the search is complete.
// NOTE - KEYUP clashes with disabling the button in this instance, seems to cause lag
$(document).ready(function() {


    $('form').submit(function(e) {
        e.preventDefault();

        var $searchField = $('#search')
        var $submitButton = $('#submit')

        $searchField.prop("disabled", true);
        $submitButton.attr("disabled", true).val("searching...");
        // the AJAX part
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var searchField = $(this).val();
        var flickrOptions = {
            tags: searchField,
            format: "json"
        };

        function displayPhotos(data) {
            console.log(data);
            if (data.items.length === 0) {
                var photoHTML = "<li>Nothing Found!</li>";
            } else {
                var photoHTML = '<ul>';
                $.each(data.items, function(i, photo) {
                    photoHTML += '<li class="grid-25 tablet-grid-50">';
                    photoHTML += '<a href="' + photo.link + '" class="image">';
                    photoHTML += '<img src="' + photo.media.m + '"></a></li>';
                }); // end each
                photoHTML += '</ul>';
                // $('#photos').html(photoHTML);
            }
            $('#photos').html(photoHTML);
            // searchField.prop("disabled", false);
            // submitButton.attr("disabled", false).val("Search");

            $searchField.prop("disabled", false);
            $submitButton.attr("disabled", false).val("search");
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    }); // end click

}); // end ready


// $.getJSON(url, data, callback)
// Callback is function to run when response is received.
// jsoncallback lets flickr know you are making json key request
// lets you get around security limitation
// many websites use jsoncallback to query string.
// $(document).ready(function() {
//     $('form').submit(function(e) {
//         e.preventDefault();

//         // search word to be used for flickr tag

//         var searchText = $('#search').val();

//         // Ajax call for images

//         $.ajax({
//             url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
//             data: {
//                 tags: searchText,
//                 format: 'json'
//             },
//             success: (images) => {
//                 let html = `<ul>`;
//                 $.each(images.items, (i, image) => {
//                     html += `
//                 <li class="grid-25 tablet-grid-50">
//                 <a href="${image.link}" class="image">
//                     <img src="${image.media.m}" />
//                 </a>
//                 </li>
//             `;
//                 });
//                 html += `</ul>`;
//                 $('#photos').html(html);
//             }
//         });
//     });
// });