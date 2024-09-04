function sendEmail() {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var body = $("#body").val();

    if (isNotEmpty($("#name")) && isNotEmpty($("#email")) && isNotEmpty($("#subject")) && isNotEmpty($("#body"))) {
        $('.loading').show();

        emailjs.send("3NXq8DitexTPeJvF4", "service_k9i59h9", {
            name: name,
            email: email,
            subject: subject,
            body: body
        }).then(function (response) {
            $('#myForm')[0].reset();
            $('.loading').hide();
            $('.error-message').hide();
            $('.sent-message').show();
        }, function (error) {
            $('.loading').hide();
            $('.error-message').text("Something went wrong. Please try again.").show();
        });
    }
}