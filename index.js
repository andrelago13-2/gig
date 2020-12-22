function init() {
    let sub = GetURLParameter("sub");
    if(sub === "true") {
        $('#subscribeform').hide();
        $('#subscribedNotice').show();
    }
    console.log("hey there");
}

function subscribeFormClick() {
    window.location.href = "https://europe-west3-survey-handler.cloudfunctions.net/gig-subscription-handler?email=" + document.subscribeform['mail'].value;
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}