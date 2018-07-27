$(function () {
    $("#btnsave").click(function () {
        var name = $("#txt_name").val();

        alert("Hi" + " " + name);


        let array_thingo = {};
        let site_list = ['angus', 'qbd'];

        let html = document.documentElement.innerHTML;
        array_thingo = check_site(html, array_thingo);

        for (var key in array_thingo ) {
            if (object.hasOwnProperty(key)) {
                if (!(key in site_list)){
                //    Fetch Data and redo check_site thingy
                }
    }
}



    });
});

//Determine which site the data is from and scrape appropriate book data
function check_site(data, array_thingo) {
    let angus_pattern = /www.angusrobertson.com.au/;
    let qbd_pattern = /www.qbd.com.au/;

    //Scrape A&R data
    if (angus_pattern.test(data) === true) {
        angus_isbn = /sku">([0-9]*)/;
        angus_price = /itemprop="price">([0-9.]*)/;
        return scrape_page(angus_isbn, angus_price, 'angus', array_thingo)

    //Scrape QBD Data
    } else if (qbd_pattern.test(data) === true) {
        qdb_isbn = /isbn="([0-9]*)/;
        qdb_price = /data-price="([0-9.]*)/;
        return scrape_page(qdb_isbn, qdb_price, 'qbd', array_thingo)

    } else {
        console.log('Unable to identify site');
        return array_thingo
    }

}

function scrape_page(data, isbn_pattern, price_pattern, identifier, array_thingo) {
    let isbn = isbn_pattern.exec(data);
    let price = price_pattern.exec(data);
    array_thingo[identifier] = [isbn, price];
    return array_thingo;
}

