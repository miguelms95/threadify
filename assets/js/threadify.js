var fullText = '';
var numChars = 0;
var parts_text = []

function updateNumChars() {
    numChars = document.getElementById("full-text").value.length
    document.getElementById("num_characters").innerHTML = numChars
}

$('#full-text').bind('input propertychange', function () {
    updateNumChars()
});

updateNumChars()

$('#bt-submit-text').click(function () {
    fullText = $('#full-text').val();
    splitter(fullText)
});

function splitter(string) {
    // preconditions
    parts_text = []
    var numTweets = string.length / 280
    var realTweets = 0;

    // for a second execution, the previous texarea must be destroyed
    $("#text-area-results").empty() 

    // First of all, display the container
    $("#result-wrapper").css('display','flex')

    if (Math.round(numTweets) < numTweets)
        realTweets = Math.round(numTweets) + 1
    else
        realTweets = Math.round(numTweets)

    console.log("Total characters / 280 : " + numTweets + ". Rounded: " + Math.round(numTweets) + ". Real tweets needed: " + realTweets)

    // With word wrap. I've to improve this later.

    var x = 0;
    var tweet_max_length = 280;

    while (string.substr(x, tweet_max_length) != "") {
        console.log(string.substr(x, tweet_max_length))
        parts_text.push(string.substr(x, tweet_max_length))
        x += 280
    }

    for (i = 0; i < realTweets; i++) {
        $("#text-area-results").append('<textarea rows="4" cols="30" id="text_result_' + i + '" class="form-control result_textarea">' + parts_text[i] + '</textarea>' + 
        '<button class="btn btn-dark bt_result" type="submit" id="bt-copy-' + i + '" onclick="copy(' + i + ')"> Copy text <i class="fa fa-copy"></i></button>')
    }
    // $("#text_result_1").val( parts_text[0] )

    console.log(parts_text)
}

function copy(i){
    $("#text_result_"+i).select();
    document.execCommand("copy");
}