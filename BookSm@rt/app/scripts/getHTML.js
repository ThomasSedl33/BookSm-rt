chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var html = getHTML(request.url)
    sendResponse({ html: html });
    return true;
})

function getHTML(url) {
    //$.getJSON('http://allorigins.me/get?url=www.qbd.com.au/harriet-blue-03-liar-liar/james-patterson-candice-fox/9780143787471/', function (data) {
    //    alert(JSON.stringify(data));
    //    return data;    
    //})
    console.log('loggy');
    return "send a message";
}