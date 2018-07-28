$(function () {
    $("#btnsave").click(function () {
        var name = $("#txt_name").val();

        //alert("Hi" + " " + name);

        scraper();


    })

    //dissapear();

})

function dissapear() {
    document.getElementById("CheaperElsewhere").style.display = "none";
}

function isItCheapest() {
    //let 0 representfalse and 1 represent true
    var cheapest = 0; //is it possible to change this to a boolean,
    //so that if it's not the cheapest it'll change the visibility
    if (cheapest == 0) {//if it is not the cheapest
        CheapestOption.style.display = 'none';//if it is NOT the cheapest,don't display cheapestOption div
    }

    if (cheapest == 1) {
        CheaperElsewhere.style.display = 'none'; //if it is the cheapest, don't display cheaperElseWherediv               
    }

}


//display the div
//function toggle_visibility(id) {
//    var z = document.getElementById(id);
//    if (e.style.display == 'block')
//        e.style.display = 'none';
//    else
//        e.style.display = 'block';
//}


        //let array_thingo = {};
        //let site_list = ['angus', 'qbd'];

        //let html = document.documentElement.innerHTML;
        //array_thingo = check_site(html, array_thingo);

//        for (var key in array_thingo ) {
//            if (object.hasOwnProperty(key)) {
//                if (!(key in site_list)){
//                //    Fetch Data and redo check_site thingy
//                }
//    }
//}



//    });
//});

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

//Zoey's code
//hide the div "cheaperElsewhere"
function cheaperElsewhere() {
    var x = document.getElementById("CheaperElsewhere");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
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
            alert('not that' + JSON.stringify(data.responseText));
        }
    })

}