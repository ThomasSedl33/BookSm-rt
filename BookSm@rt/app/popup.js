$(function () {

    isItCheapest();
    whichSiteIsCheapest();
})

function disappearElsewhere() {
    document.getElementById("CheaperElsewhere").style.display = "none";
}

function disappearCheapest() {
    document.getElementById("CheapestOption").style.display = "none";
}
function goingThroughDictionary() {
    var dict = {
        ISBN: "12345",
        Price: "$1.50",
        Photo: "http://www.google.com",
    };
    //var shopNameString = str.slice() 
}

var storeName = "aWord";


function isItCheapest() {
    var cheapest = false; 

    if (cheapest == false) {//if it is not the cheapest it'll change the visibility
        disappearCheapest();
    }
    else {
        disappearElsewhere(); //if it is the cheapest, don't display cheaperElseWherediv
    }
}

function whichSiteIsCheapest() {
    var str = "https://covers.angusrobertson.com.au/images/9781925483598.jpg?width=250"
    var isItThere = str.search('angusrobertson');
    if (isItThere > -1) {
        storeName = "Angus and Robertson";
    }
    if (isItThere === false) {
        storeName = "QBD The Bookstore";
       
    }

    var shoppingCartLink = 'https://www.angusrobertson.com.au/'; //shoppingCartLink is the url for the chopping cart of the book
    var bookPhotoImage = "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0081/9780008172145.jpg";

    $('#AnotherID').attr('href', shoppingCartLink); //replace the url link for the button with the shopping cart link to the cheapest shop
    document.getElementById("storeNameAndLink").innerText = storeName;
    $('#bookPhoto').attr('src', bookPhotoImage);
}


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

function scraper() {
    $.ajax({
        url: "https://www.qbd.com.au/going-to-the-mountain/nbada-mandela/9781786331564/",
        type: "GET",
        dataType: "jsonp",
        success: function () {
            alert("this")
        },
        error: function () {
            alert('not that')
        }
    })

}