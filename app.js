$("#do-search").on("click",function(){
    event.preventDefault();
    var term = $("#search-terms").val();
    var retrieveNumbers = $("#records-retrieve").val();
    var endYear = $("#start-year").val();
    var startYear = $("#end-year").val();

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api_key=c1329d325fc24b4fb6f049b56a739730"

        $.ajax({
            url: queryUrl,
            method: "GET"
        })
            .done(function(response) {
                var results = response.response.docs;
                console.log(results);
                for (var i = 0; i <= retrieveNumbers; i++) {
                    var thisResult = $("<div class ='res'  id='"+[i]+"'>");
                    var snippet = results[i].snippet;
                    var by = results[i].byline.original;
                    console.log(by);
                    var section = results[i].section_name;
                    console.log(section);
                    var pubDate = results[i].pub_date;
                    console.log(pubDate);
                    var webUrl = results[i].web_url;
                    console.log(webUrl);
                    thisResult.append(snippet).append(by).append(section).append(pubDate).append(webUrl);
                    $("#results-all").append(thisResult);



                }

            })


})