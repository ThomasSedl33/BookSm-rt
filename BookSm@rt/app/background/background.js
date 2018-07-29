chrome.extension.onConnect.addListener(function (port) {
    if (port.name != 'XHRProxy_')
        return;
    port.onMessage.addListener(function (xhrOptions) {
        var xhr = new XMLHttpRequest();
        xhr.open(xhrOptions.method || "GET", xhrOptions.url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                port.postMessage({
                    status: this.status,
                    data: this.responseText,
                    xhr: this
                });
            }
        }
        xhr.send();
    });
});


// Thomas 
//chrome.tabs.onUpdated.addListener(function (TabId, changeInfo, Tab) {

//    if (changeInfo.url != null) {
//        chrome.tabs.sendMessage(TabId, { url: changeInfo.url }, function (response) {
//            console.log(response);
//        })
//    } else {
//        console.log('working')
//    }
//})

// gloabl variables
var currentURL = "";
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

function GetCurrentHTML() {
    return currentHTML;
}