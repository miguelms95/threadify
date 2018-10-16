var fullText = '';
var numChars = 0;

function updateNumChars(){
    numChars = document.getElementById("full-text").value.length
    document.getElementById("num_characters").innerHTML = numChars
}

$('#full-text').bind('input propertychange', function() {
    updateNumChars()
});

updateNumChars()

$('#bt-submit-text').click(function () {
   fullText = $('#full-text').val();
   //console.log(fullText);
    splitter(fullText)
});

function splitter(string){
    var numTweets = string.length/280
    var realTweets = 0;
    if(Math.round(numTweets) < numTweets)
        realTweets = Math.round(numTweets) + 1
    
    console.log("number of tweets needed: " + numTweets + ". Rounded: " + Math.round(numTweets) + ". Real needed: " +realTweets )

    parts = string.split(' ');
    console.log(parts);
    
    console.log(string.substr(0,280))
    
}