
$(document).ready(function () {
    // Open modal when button is clicked
    $('#openModalBtn').on('click', function () {
        $('#searchModal').modal();
    });

    // Close modal when close button is clicked
    $('.close').on('click', function () {
        $('#searchModal').modal('close');
    });
});

