var shown = false;

function showhideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var myemail = "<a href='mailto:nonejs-waph" + "@" + "outlook.com'>nonejs-waph" + "@" + "outlook.com</a>";
        document.getElementById('email').innerHTML = myemail;
        shown = true;
    }
}
