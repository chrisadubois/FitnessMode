$(document).ready(function() {
    $("div#makeWorkoutForm").append(
// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Exercise Builder"), $("<p/>").text("Create your routine by filling in the forms"), $("<form/>", {
            action: '#',
            method: '#'
        }).append(
// Create <form> Tag and Appending in HTML Div form1.
            $("<input/>", {
                type: 'text',
                maxlength: 60,
                id: 'title',
                name: 'tytle',
                placeholder: 'Title'
            }), $("<textarea/>", {
                type: 'text',
                maxlength: 180,
                id: 'description',
                name: 'descrip',
                placeholder: 'Description'
            }), $("<input/>", {
                type: 'submit',
                id: 'submit',
                value: 'Start Adding Exercises to this Routine!'
            })))
});
