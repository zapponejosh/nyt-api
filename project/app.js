/* PSUEDOCODE

URL EXAMPLE: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=wyj0XtuJp2wHFRfs1Ql7JwVBLhQgEJ3u


input fields that user types in values
search params

term
number of records

start year (optional)
end year (optional)

Buttons

Search 
Clear Results



*/

$(document).ready(function () {

    var searchTerm = $("#search-term");
    var numberResults = $("#results-num");
    var startYear = $("#start-year");
    var endYear = $("#end-year");

    var queryURL = "";

    $("#search-btn").on("click", function () {
        event.preventDefault();
        var term = searchTerm.text();
        var results = numberResults.text();
        var start = startYear.text()
        var end = endYear.text();

        if (start) {
            // correct year format
            start = start + "0101";
        }
        if (end) {
            end = end + "0101";
        }

        console.log(start)
        console.log(end);
    });

    
    
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&begin_date=20120101&end_date=20120101&api-key=wyj0XtuJp2wHFRfs1Ql7JwVBLhQgEJ3u"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
    });










});