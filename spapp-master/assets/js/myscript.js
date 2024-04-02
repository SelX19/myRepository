/*handling forms and submit buttons*/

/* 404 form */

$(document).ready(function () {
    // Parsing keyword from URL query parameters
    function getParameterByName(name, url) { //defining function getParameterByName
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
});

$(document).ready(function () {
    g
    $('.search-404').submit(function (e) {
        e.preventDefault(); // preventing default form submission
        var keyword = $('#keyword').val(); // getting the keyword from input field

        // Making an AJAX call
        $.ajax({
            url: 'my-backend-script.php', // specifying the URL of my future backend script
            type: 'POST',
            data: { keyword: keyword }, // sending the keyword to the backend script
            success: function (response) {
                // handling success response case
                console.log("Page successfully found!");
                // Getting keyword from URL by using function getParameterByName, defined above
                var keyword = getParameterByName('keyword');

                // Switch statement to handle redirection based on keyword
                switch (keyword) {
                    case 'home':
                        window.location.href = 'home.html';
                        break;
                    case 'login':
                        window.location.href = 'login.html';
                        break;
                    case 'about-us':
                        window.location.href = 'about-us.html';
                        break;
                    case 'team':
                        window.location.href = 'team.html';
                        break;
                    case 'services':
                        window.location.href = 'services.html';
                        break;
                    case 'gallery':
                        window.location.href = 'gallery.html';
                        break;
                    case 'contact':
                        window.location.href = 'contact.html';
                        break;
                    case 'class-timetable':
                        window.location.href = 'class-timetable.html';
                        break;
                    case 'class-details':
                        window.location.href = 'class-details.html';
                        break;
                    case 'bmi-calculator':
                        window.location.href = 'bmi-calculator.html';
                        break;
                    case 'blog':
                        window.location.href = 'blog.html';
                        break;
                    default:
                        // Redirecting to home page by default
                        window.location.href = '404.html';
                }

            },
            error: function (xhr, status, error) {
                // handling error case
                console.error("Page not found!");
            }
        });
    });
});

/* login (registration form) */

$(document).ready(function () {
    $('#myForm').submit(function (e) {
        e.preventDefault(); // preventing default form submission

        // Getting form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            pricingPlan: $('#pricingPlan').val()
        };

        // Making AJAX call
        $.ajax({
            url: 'my-backend-script.php', // specify the URL of my future backend script
            type: 'POST',
            data: formData, // sending form data to the backend script
            success: function (response) {
                // handling success response case
                alert("Form submitted successfully");
            },
            error: function (xhr, status, error) {
                // handling error case
                console.error("Error submitting form");
                alert("Error submitting form");
            }
        });
    });
});

/* Contact form */

$(document).ready(function () {
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        var formData = {
            trainerName: $('#trainerName').val(),
            trainerEmail: $('#trainerEmail').val(),
            trainingDate: $('#trainingDate').val(),
            fitnessGoals: $('#fitnessGoals').val()
        };

        $.ajax({
            url: 'my-backend-script.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                alert("Form submitted successfully");
            },
            error: function (xhr, status, error) {
                alert("Error submitting form");
            }
        });
    });
});

/* BMI form */

$(document).ready(function () {
    $('#calculateBMI').submit(function (e) {
        e.preventDefault();

        var formData = {
            height: $('#height').val(),
            weight: $('#weight').val(),
            age: $('#age').val(),
            sex: $('#sex').val()
        };

        $.ajax({
            url: 'my-backend-script.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log("Form submitted successfully");
                alert("Form submitted successfully");
            },
            error: function (xhr, status, error) {
                alert("Error submitting form");
            }
        });
    });
});

/* Blog - comment form */

$(document).ready(function () {
    $('#commentForm').submit(function (e) {
        e.preventDefault();

        var formData = {
            name: $('#commentName').val(),
            email: $('#commentEmail').val(),
            website: $('#commentWebsite').val(),
            comment: $('#commentText').val()
        };

        $.ajax({
            url: 'my-backend-script.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                alert("Comment submitted successfully");
            },
            error: function (xhr, status, error) {
                alert("Error submitting comment");
            }
        });
    });
});

/* adding click events on other buttons*/

/* HOME BUTTONS
- adding click event on pictures of a team (at team.html), to redirect us on another page(clases.html) */

$(document).ready(function () {
    $('.ts-item').click(function () {
        // Redirecting to classes.html when one of the pictures of class = "ts-item" is clicked
        window.location.href = 'classes.html';
    });
});

$(document).ready(function () {
    $('.primary-btn').click(function () {
        // Redirecting to login.html when the "Start now" or "Enroll" button is clicked on the home page
        window.location.href = 'login.html';
    });
});

/*price button*/

$(document).ready(function () {
    $('#pricesButton').click(function (event) {
        event.preventDefault();

        // Redirecting to the pricing section of the home.html page
        window.location.href = 'home.html#pricing-section';
    });
});

/*appointment button*/

$(document).ready(function () {
    $('#appointmentButton').click(function () {
        // Redirecting to the contact.html page
        window.location.href = 'contact.html';
    });
});










