chrome.tabs.onUpdated.addListener(function () {
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        var url = tabs[0].url;
        if (checkURL(url)) {
            scraper(url);
        }
    });
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
        url: url,
        headers: {
            'Accept': 'application/json'
        },
        //type: "GET",
        dataType: "text/html",
        contentType: "text/html",
        success: function (data) {
            alert("this" + data);
        },
        error: function (data) {
            currentHTML = JSON.stringify(data.responseText);
            alert(currentHTML);
        }
    })

}

function GetCurrentHTML() {
    return currentHTML;
}