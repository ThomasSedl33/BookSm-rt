$(function () {
        $("#btnsave").click(function () {
            //var name = $("#txt_name").val();
    
            //alert("Hi" + " " + name);
            //get_ISBN_QDB('isbn="09090998374298')
            alert('this');

        });
});

function get_ISBN_QDB(data) {
    var pattern = /isbn="([0-9]*)/;
    var match = pattern.exec(data);
    return match;
}

function get_ISBN_angus(data) {
    var pattern = /sku">([0-9]*)/
    var match = pattern.exec(data);
    return match;
}

function doalert()
{
    alert("Did it");
}