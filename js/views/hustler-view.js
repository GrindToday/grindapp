/**
 * Created by Oskar on 22.02.2017.
 */

nameinput_onceclicked = false;

$('#nameinput').click(function() {
    if(!nameinput_onceclicked) {
        $('#nameinput').css({
            'text-decoration': 'none'
        });
        // $('#nameinput').text($('#nameinput').text().replace('*', ''));
        $('#nameinput').text('');
        $('#nameinput').focus();

        $('#clicktoedit').html('</br>');

        nameinput_onceclicked = true;
    };
});
