chrome.tabs.onUpdated.addListener(function (TabId, changeInfo, Tab) {
    
    //chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    //    var url = tabs[0].url;
    //    //if (checkURL(url)) {
    //        if (true) {
    //            //scraper(url);
    //            //var test = $.getJSON('https://allorigins.me/get?url=' + url, function (data) { alert("me"); $('#output').html(data.contents); })

    //            //$.getJSON('http://allorigins.me/get?url=www.qbd.com.au/harriet-blue-03-liar-liar/james-patterson-candice-fox/9780143787471/', function (data) {
    //            //    alert(JSON.stringify(data));
                    
    //            });
    //    }
    //});

    if (changeInfo.url != null) {
        chrome.tabs.sendMessage(TabId, { url: changeInfo.url }, function (response) {
            console.log(response);
            alert("1  3  " + response);
        })
        alert('new url');
    } else {
        console.log('working')
    }
})

// gloabl var for storing the current url if it is a book site
var currentURL = "";

//global var for storing the current html page
var currentHTML = "";

//
//  checks if the url is a url related to the given list
//
function checkURL(url)
{
    var testurls = ["https://www.qbd.com.au/", "https://www.angusrobertson.com.au/"];

    var i;
    for (i = 0 ; i < testurls.length; i++)
    {
        var urlLength = testurls[i].length;
        var testing = url.substr(0, urlLength);
        if (testing == testurls[i]) {
            return true;
        }
    }
    return false;
}

// 
//  Scrapper gets the html for the given url, currently returns through the error function 
//
function scraper(url) {
    $.ajax({
        url: "https://www.bookdepository.com/Barefoot-Investor-Scott-Pape/9780730324218?ref=grid-view",
        //headers: {
        //    'Accept': 'application/json'
        //},
        type: "GET",
        cache: false,
        dataType: "json",
        processdata: false,
        context: document.body,
        //contentType: "text/html",
        success: function (data) {
            alert("success" + data)
            currentHTML = "" + data;
        },
        error: function (data) {
            alert("error" + JSON.stringify(data))
            currentHTML = "" + data;
        }
    })

}

function GetCurrentHTML() {
    return currentHTML;
}