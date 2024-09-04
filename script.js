function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("body").value, // Mengambil nilai dari id="body"
    }

    emailjs.send("service_k9i59h9", "template_gz27gaf", parms)
        .then(function (response) {
            alert("Email Sent!!");
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Email not sent!");
        });
}
