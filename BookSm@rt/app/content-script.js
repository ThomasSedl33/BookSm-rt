proxyXHR.get('http://www.google.com').onSuccess(function (data) {
  alert(data);
}).onFailure(function (status) {
  alert("HTTP Error " + status + " while retrieving data.");
});