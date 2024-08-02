var email= prompt ("Enter your e-mail:");
function checkEmail() {
if (email.length < 1) {
    alert("must include an email address.");
} else {
    alert("thanks! we'll spam you at " + email); 
}
}
checkEmail();