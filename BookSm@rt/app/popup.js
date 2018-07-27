$(function () {
    $("#btnsave").click(function () {
        var name = $("#txt_name").val();

        alert("Hi" + " " + name);
        var html = document.documentElement.innerHTML;
        var site = check_site(html);


    });
});

function check_site(data) {
    var angus_pattern = /www.angusrobertson.com.au/;
    var qbd_pattern = /www.qbd.com.au/;

    if (angus_pattern.test(data) == true) {
        ISBN = get_ISBN_angus(html);
        price = get_price_angus(html);
        return 'angus';

    } else if (qbd_pattern.test(data) == true) {
        ISBN = get_ISBN_QBD(html);
        price = get_price_QBD(html);
        return 'qbd';

    } else {
        console.log('Unable to identify site');
    }

}

function get_ISBN_QBD(data) {
    var pattern = /isbn="([0-9]*)/;
    var match = pattern.exec(data);
    return match;
}

function get_ISBN_angus(data) {
    var pattern = /sku">([0-9]*)/
    var match = pattern.exec(data);
    return match;
}

function get_price_QBD(data) {
    var pattern = /data-price="([0-9.]*)/
    var match = pattern.exec(data)
    return match;
}

function get_price_angus(data) {
    var pattern = /itemprop="price">([0-9.]*)/
    var match = pattern.exec(data)
    return match;
}