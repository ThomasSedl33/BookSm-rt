document.addEventListener('DOMContentLoaded', function () {
    var bg = chrome.extension.getBackgroundPage();
    currentHTML = bg.GetCurrentHTML();
    alert("1  " + currentHTML);

});

var currentHTML = "";

$(function () {
    $("#btnsave").click(function () {
        var name = $("#txt_name").val();

        //alert("Hi" + " " + name);

        let array_thingo = {};
        let site_list = {
            'angus': 'https://allorigins.me/get?url=https://www.angusrobertson.com.au/search?text={}&mediatype=BOOKS',
            'qbd': 'https://allorigins.me/get?url=https://www.qbd.com.au/product/{}'
        };

        // scraper();

        // let html = document.documentElement.innerHTML;
        // console.log(html)
        html = get_html();
        array_thingo = check_site(html, array_thingo);
        console.log(array_thingo);
        let isbn_keys = Object.keys(array_thingo);
        let website_keys = Object.keys(array_thingo[isbn_keys[0]]);
        delete site_list[website_keys[0]]

        // scrappy('https://allorigins.me/get?url={}')

        array_thingo = search_websites(site_list, array_thingo, isbn_keys)


        // console.log(isbn_keys, website_keys)

        // for (var key in array_thingo) {
        //     for (var keyy in array_thingo[key]) {
        //         console.log(keyy, array_thingo[key][keyy])
        //         }
        // }
        // keys = array_thingo.Object.keys();
        // alert(keys)
    })

    //dissapear();
    // var test = GetCurrentHTML();
    // alert(test);
})
dissapear();


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


function get_html() {
    return "\n" +
        "<!doctype html>\n" +
        "<html class=\"no-js\" lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:fb=\"http://ogp.me/ns/fb#\">\n" +
        "\t<head>\n" +
        "\t\t<meta charset=\"utf-8\">\n" +
        "\t\t<meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n" +
        "\t\t<title>Cart - QBD Books | Buy Books Online From Australia's Best Book Store</title>\n" +
        "\t\t<meta name=\"copyright\" content=\"Copyright © 2018 QBD Books\" />\n" +
        "\t\t<meta name=\"language\" content=\"en\" />\n" +
        "\t\t<meta name=\"googlebot\" content=\"index,follow\" />\n" +
        "\t\t<meta name=\"robots\" content=\"index,follow\" />\n" +
        "\t\t<meta name=\"description\" content=\"Buy books online or in store from Australia's premier bookshop. Online Books, Discount Books, eBooks - Cart - QBD Books - Buy Online for Better Range and Value.\" />\n" +
        "\t\t<meta name=\"verify-v1\" content=\"Hox+LsWFY82aAC0mUojK1qIHT7cYwke4ehlBsn4ho3M=\" />\n" +
        "\t\t<meta name=\"google-site-verification\" content=\"g8f2tm6k97gBrdUCcCT2qRIKCRaeb2HnRMAebF-ZOsw\" />\n" +
        "\t\t<meta name=\"msvalidate.01\" content=\"ADAB2492E18D7ED69E8ED7799E0BD9DC\" />\n" +
        "\t\t<link rel=\"canonical\" href=\"https://www.qbd.com.au/cart/\" />\n" +
        "<meta property=\"og:title\" content=\"Australia's premier bookshop - QBD Books\" />\n" +
        "\t\t<meta property=\"og:image\" content=\"https://www.qbd.com.au/res/img/logo-square-512x512.png\" />\n" +
        "\t\t<meta property=\"og:url\" content=\"https://www.qbd.com.au\" />\n" +
        "\t\t<meta property=\"og:description\" content=\"Over 1,000,000 titles online.\n" +
        "57 stores and growing.\" />\n" +
        "\t\t<meta name=\"twitter:card\" content=\"summary\" />\n" +
        "\t\t<meta name=\"twitter:site\" content=\"@qbdthebookshop\" />\n" +
        "\t\t<meta name=\"twitter:title\" content=\"Cart - QBD Books | Buy Books Online From Australia's Best Book Store\" />\n" +
        "\t\t<meta name=\"twitter:description\" content=\"Buy books online or in store from Australia's premier bookshop. Online Books, Discount Books, eBooks - Cart - QBD Books - Buy Online for Better Range and Value.\" />\n" +
        "\t\t<meta name=\"twitter:image\" content=\"https://pbs.twimg.com/profile_images/481562749957185537/DPmoobc8_reasonably_small.png\" />\n" +
        "\t\t<meta name=\"twitter:url\" content=\"https://www.qbd.com.au\" />\n" +
        "\t\t<meta property=\"twitter:account_id\" content=\"81306718\" />\n" +
        "\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\" id=\"viewport\" />\n" +
        "\t\t<style type=\"text/css\">@font-face{font-family:'Avenir Black';src:url('/res/fonts/ab/ab.eot');src:url('/res/fonts/ab/ab.eot?#iefix') format('embedded-opentype'),url('/res/fonts/ab/ab.woff') format('woff'),url('/res/fonts/ab/ab.ttf') format('truetype'),url('/res/fonts/ab/ab.svg#AvenirBlack') format('svg')}@font-face{font-family:'Avenir Light';src:url('/res/fonts/al/al.eot');src:url('/res/fonts/al/al.eot?#iefix') format('embedded-opentype'),url('/res/fonts/al/al.woff') format('woff'),url('/res/fonts/al/al.ttf') format('truetype'),url('/res/fonts/al/al.svg#AvenirLight') format('svg')}@font-face{font-family:'Komika Title';src:url('/res/fonts/kt/kt.eot');src:url('/res/fonts/kt/kt.eot?#iefix') format('embedded-opentype'),url('/res/fonts/kt/kt.woff') format('woff'),url('/res/fonts/kt/kt.ttf') format('truetype'),url('/res/fonts/kt/kt.svg#KomikaTitle') format('svg')}@font-face{font-family:'Dancing Script';font-style:normal;font-weight:400;src:local('Dancing Script Regular'),local('DancingScript-Regular'),url(https://fonts.gstatic.com/s/dancingscript/v9/DK0eTGXiZjN6yA8zAEyM2ZsM3FTMmj2kTPH3yX99Yaw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215}BODY>.v6{overflow-x:hidden}BODY>.v6>.page{margin:auto auto;width:1000px}BODY>.v6>.page>.header{background:#921736;height:100px;position:fixed;top:0;width:1000px;z-index:1000}BODY>.v6>.page>.header H1{display:none}BODY>.v6>.page>.header:before{background-color:#921736;content:' ';display:block;height:inherit;left:0;position:fixed;top:0;width:100%;z-index:-10}BODY>.v6>.page>.header .free-shipping{background-image:url('/res/img/freeshipping.png');background-repeat:no-repeat;height:90px;margin-right:-605px;position:fixed;right:50%;top:5px;width:90px;display:none}BODY>.v6>.page>.header .logo{height:112px;position:absolute;top:0;width:139px}BODY>.v6>.page>.header .nav-main{display:table;height:30px;left:150px;position:absolute;top:60px;width:850px}BODY>.v6>.page>.header .nav-main LI{display:table-cell;vertical-align:top}BODY>.v6>.page>.header .nav-main LI>A{color:#fff;display:block;font-size:14px;font-weight:bold;height:inherit;line-height:30px;padding:0 10px;position:relative;text-align:center}BODY>.v6>.page>.header .nav-main LI>A H2{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;padding:0}BODY>.v6>.page>.header .nav-main LI.mobile-hide{display:table-cell}BODY>.v6>.page>.header .nav-main LI.mobile-show{display:none}BODY>.v6>.page>.header .nav-main LI.cart{padding-left:10px;width:130px}BODY>.v6>.page>.header .nav-main LI.cart A{background:#090;padding:0}BODY>.v6>.page>.header .nav-main LI.cart A:after{content:\"\\f054\";padding:10px}BODY>.v6>.page>.header .nav-main LI.cart A:before{content:\"\\f07a\";padding:10px}BODY>.v6>.page>.header .nav-main LI.cart A:after{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;right:0;position:absolute;top:-9px}BODY>.v6>.page>.header .nav-main LI.cart A:before{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;left:0;position:absolute;top:-10px}BODY>.v6>.page>.header .nav-main LI.item>A{background:#661026}BODY>.v6>.page>.header .nav-main LI.item>A:hover{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-main LI.item>A.active{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-mobile{display:none}BODY>.v6>.page>.header .nav-top{display:table;height:40px;left:150px;position:absolute;top:10px;width:850px}BODY>.v6>.page>.header .nav-top>LI{display:table-cell;line-height:40px;vertical-align:top}BODY>.v6>.page>.header .nav-top>LI.mobile-hide{display:table-cell}BODY>.v6>.page>.header .nav-top>LI.mobile-show{display:none}BODY>.v6>.page>.header .nav-top>LI.item{padding-left:10px;width:130px}BODY>.v6>.page>.header .nav-top>LI.search{padding-left:0;width:auto}BODY>.v6>.page>.header .nav-top>LI.search INPUT{border:solid 1px #700000;font-size:16px;height:40px;margin:0;outline:0;padding:0 10px;width:100%}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete{background:#fff;border:solid 1pt #921736;border-top:transparent;display:block;position:absolute;top:29.25pt;z-index:1210}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI{cursor:pointer;display:block;height:30pt;line-height:39pt;width:458px}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI:hover{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI:hover B{color:#fff200}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI.selected{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI.selected B{color:#fff200}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI B{color:#921736}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN{display:block;float:left;height:inherit;overflow:hidden}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN.author{font-size:10pt;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:300pt}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN.binding{text-align:center;width:70pt}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN.cover{text-align:center;width:30pt}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN.cover IMG{height:24pt;margin:3pt;width:auto}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete LI SPAN.title{line-height:13.63636364pt;width:235pt;padding-top:5px}BODY>.v6>.page>.header .nav-top>LI.search>.menu{display:none}BODY>.v6>.page>.header .nav-top>LI.search>.submit{display:none}BODY>.v6>.page>.header .nav-top>LI A{background:#fff200;background:-moz-linear-gradient(top,#fff200 0,#fff200 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff200),color-stop(100%,#fff200));background:-webkit-linear-gradient(top,#fff200 0,#fff200 100%);background:-o-linear-gradient(top,#fff200 0,#fff200 100%);background:-ms-linear-gradient(top,#fff200 0,#fff200 100%);background:linear-gradient(to bottom,#fff200 0,#fff200 100%);border:solid 1px #700000;color:#333;display:block;font-size:16px;font-weight:bold;height:40px;padding-left:20px;position:relative;width:120px;text-align:center}BODY>.v6>.page>.header .nav-top>LI A:before{color:#921736;font-size:16px;left:5px;position:absolute;margin-left:8px;text-shadow:1px 1px #fffe6f}BODY>.v6>.page>.header .nav-top>LI A:hover{color:#333}BODY>.v6>.page>.header .nav-top>LI A:hover:before{color:#921736}BODY>.v6>.page>.footer{background:#921736;color:#fff;height:320px;margin:0 auto;position:relative;width:1000px;z-index:1000}BODY>.v6>.page>.footer:before{background-color:#921736;content:' ';display:block;height:inherit;left:500px;margin-left:-50vw;margin-right:-50vw;position:absolute;top:0;width:100vw;z-index:-10}BODY>.v6>.page>.footer.fixed{bottom:-264px;position:fixed}BODY>.v6>.page>.footer .disclaimer{font-size:8pt;line-height:10pt;margin:10pt 20pt;max-width:80%}BODY>.v6>.page>.footer A.social.icon{background:#fff;border-radius:50%;color:#921736;display:block;float:left;height:21pt !important;margin:0 5pt 5pt 0;padding:5pt;width:21pt !important}BODY>.v6>.page>.footer A.social.icon:before{font-size:16pt;left:0 !important;padding-right:0 !important}BODY>.v6>.page>.footer A.social.icon.icon-facebook{padding:5.5pt 1pt 5pt 5.5pt}BODY>.v6>.page>.footer A.social.icon.icon-goodreads{padding:4.5pt 3pt 4pt 3.5pt}BODY>.v6>.page>.footer A.social.icon.icon-instagram{padding:4.5pt 3pt 5pt 4pt}BODY>.v6>.page>.footer A.social.icon.icon-snapchat{padding:4.5pt 3pt 4pt 3pt}BODY>.v6>.page>.footer A.social.icon.icon-twitter{padding:5.5pt 3pt 5pt 3.5pt}BODY>.v6>.page>.footer A.social.icon.icon-wordpress{padding:4.5pt 3pt 4pt 3pt}BODY>.v6>.page>.footer .top{height:56px;overflow:hidden}BODY>.v6>.page>.footer .top BUTTON{background-color:#090}BODY>.v6>.page>.footer A{color:#fff}BODY>.v6>.page>.footer B.heading{font-family:'Avenir Black';font-size:15pt;font-weight:normal;line-height:18pt;color:#fff;display:block}BODY>.page>.body{padding-top:100px !important}BODY>.page>.body>.slices{margin-top:0 !important}BODY>.page>.body>.content>.v6{margin:-15pt -15pt 0}BODY>.page>.body>.content>.v6 .body{margin:0 -10pt;padding:0}BODY>.page>.body>.content>.v6 .body>.breadcrumbs{background-color:#fff;border-bottom:solid 1px #ccc;height:30px;line-height:32px;margin:0;position:absolute;top:0;width:1024px;z-index:999}BODY>.page>.body>.content>.v6 .body>.breadcrumbs:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.page>.body>.content>.v6 .body>.breadcrumbs.full LI:last-child{display:block !important}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI{display:block;float:left;font-size:11pt}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI:before{content:'>';padding:0 .35em;position:relative}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI:first-child:before{content:''}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI:last-child{display:none}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI .pagination{right:3px;position:absolute;top:2px}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI .pagination BUTTON{background-color:#eee;border:solid 1px #ddd;height:24px;line-height:22px;padding:0 6px !important}BODY>.page>.body>.content>.v6 .body>.breadcrumbs LI .pagination BUTTON.disabled{background-color:#921736;border:solid 1px #24060d}BODY>.page>.body>.content>.v6 .body>.content{position:relative;text-align:justify}BODY>.page>.body>.content>.v6 .body>.content.has-sidebar{padding:0}BODY>.page>.body>.content>.v6 .body>.content.has-sidebar:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.page>.body>.content>.v6 .body>.content>.main{float:right;padding:10px 15px 10px 0;width:770px}BODY>.page>.body>.content>.v6 .body>.content>.sidebar{border:0 !important;float:left;margin:0 !important;width:250px}BODY>.page>.body>.content>.v6 .body>.content>.sidebar UL{border:0 !important;margin:10px}BODY>.page>.body>.content>.v6 .body>.content>.sidebar UL LI{border:0 !important;line-height:25px;min-height:15px;padding:5px;padding-bottom:0;text-align:left}BODY>.page>.body>.content>.v6 .body>.content>.sidebar UL LI.heading{background-color:#921736;color:#fff;font-weight:bold;text-shadow:none}BODY>.page>.body>.content>.v6 .body>.content>.sidebar UL LI.item{border-bottom:solid 1px #ccc !important;padding-left:5px}BODY>.page>.body>.content>.v6 .body>.content>.sidebar UL LI.item:last-child{border-bottom:solid 0 !important}BODY>.page>.body>.content>.v6 .body>.content H2.title{border-bottom:solid 2px #921736;margin-bottom:5px;margin-top:20px;text-shadow:-3px -3px 0 #fff,3px -3px 0 #fff,-3px 3px 0 #fff,3px 3px 0 #fff}BODY>.page>.body>.content>.v6 .body>.content .product .description{margin-left:195pt;width:540pt}BODY>.page>.body>.content>.v6 .body>.content .product .description:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.page>.body>.content>.v6 .body>.content .product .information{height:310pt;overflow:hidden;position:relative}BODY>.page>.body>.content>.v6 .body>.content .product .information .author{height:25pt;left:195pt;position:absolute;top:0;width:520pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .author H2{font-size:18pt;height:25pt;line-height:25pt;overflow:hidden;text-overflow:ellipsis;width:inherit;white-space:nowrap}BODY>.page>.body>.content>.v6 .body>.content .product .information .author H2:before{color:#999;content:\"By \"}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover{background-color:#f7f7f7;border:solid 1pt #ccc;display:table;height:270pt;padding:5pt;position:absolute;width:180pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover .image{display:table-cell;width:inherit;overflow:hidden;text-align:center;vertical-align:middle}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover .image A.multibuy{background-image:url('https://www.qbd.com.au/img/common/starburst.png');background-size:100pt 100pt;background-repeat:no-repeat;bottom:-10pt;color:#921736;font-size:18pt;height:100pt;line-height:35pt;padding:12pt;position:absolute;right:-10pt;text-align:center;width:100pt;z-index:1}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover .image A.multibuy B{font-size:30pt;position:absolute;top:45pt;right:0;line-height:10pt;text-align:center;width:100pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover .image A.preview{background-image:url('https://www.qbd.com.au/img/common/preview-peel.png');background-size:90pt 135pt;color:#fff;display:block;height:135pt;padding:5pt;position:absolute;right:0;text-align:center;top:5pt;width:90pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .cover .image>IMG{max-height:260pt;max-width:170pt}BODY>.page>.body>.content>.v6 .body>.content .product .information>.details{height:100pt;left:195pt;position:absolute;top:170pt;width:285pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats{position:absolute;left:195pt;top:40pt;width:540pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format{border:solid 1pt #ccc;height:70pt;margin-bottom:5pt;padding-left:24pt;position:relative;width:100%}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format:hover{background-color:#f7f7f7;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,0.15);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,0.15);box-shadow:0 0 5px 0 rgba(0,0,0,0.15)}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format:hover H3{background-color:#921736}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format H3{background-color:#921736;color:#fff;font-size:12pt;height:24pt;left:0;padding:5pt;position:absolute;bottom:-24pt;text-align:center;width:70pt;transform-origin:left top 0;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3)}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .availability{text-align:center}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .availability .cart{background-color:#090;color:#fff;font-weight:bold;height:20pt;line-height:20pt;margin:auto auto;text-align:center;width:80%}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .details SPAN{color:#921736;display:block;float:left;width:70pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .details .icon-search:after{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;background-color:#921736;border-radius:50%;color:#fff;content:\"\\f129\";display:inline-block;float:left;font-size:7pt;height:11pt;margin-right:3pt;padding-left:4pt;width:7pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price{position:relative}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .cart{background-color:#090;bottom:0;color:#fff;cursor:pointer;font-size:12pt;font-weight:bold;height:30pt;line-height:30pt;padding-left:30pt;position:absolute;width:130pt;text-align:center;text-transform:uppercase}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .cart INPUT[type=\"text\"]{border:solid 1pt #008000;cursor:default;font-size:13pt;height:24pt;left:3pt;position:absolute;text-align:center;top:3pt;width:24pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .save{background-image:url('https://www.qbd.com.au/img/common/starburst.png');background-size:50pt 50pt;color:#921736;font-size:13pt;font-weight:bold;height:50pt;padding:12pt;position:absolute;line-height:10pt;right:0;text-align:center;top:10pt;width:50pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .save:after{content:\" Off RRP\";font-size:8pt;text-transform:uppercase}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .save B{font-size:10pt;font-weight:normal}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .sell{font-size:26pt;font-weight:bold;line-height:70pt;height:70pt;position:absolute;right:55pt;top:0}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .sell.discounted:before{color:#921736;content:\"QBD Price!\";font-size:12pt;position:absolute;top:-18pt;right:0;white-space:nowrap}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .was{font-size:12pt;position:absolute;top:48pt;right:55pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .formats .format .price .was:before{content:\"RRP: \";font-size:10pt;font-weight:bold}BODY>.page>.body>.content>.v6 .body>.content .product .information .location{height:230pt;position:absolute;right:0;top:40pt;width:220pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .location .search{margin-top:10pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .location .search BUTTON{font-weight:bold;line-height:22pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating{height:25pt;padding-left:13pt;position:absolute;left:0;top:275pt;width:180pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars{border:0;float:left}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>INPUT{display:none}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>LABEL{color:#ccc;cursor:pointer;float:right}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>LABEL:before{padding:5px;font-size:20pt;font-family:FontAwesome;display:inline-block;content:\"\\f005\";text-shadow:0 0 1px #000}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>.half:before{position:absolute;content:\"\\f089\";text-shadow:none}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>input:checked ~ label,BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars:not(:checked)>label:hover,BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars:not(:checked)>label:hover ~ label{color:#fff200}BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>input:checked+label:hover,BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>input:checked ~ label:hover,BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>label:hover ~ input:checked ~ label,BODY>.page>.body>.content>.v6 .body>.content .product .information .rating .stars>input:checked ~ label:hover ~ label{color:#fff200}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews{height:50pt;position:absolute;left:195pt;top:285pt;width:520pt}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews BLOCKQUOTE{border-radius:5pt;-moz-border-radius:5pt;-webkit-border-top-left-radius:5pt;-webkit-border-top-right-radius:5pt;-webkit-border-bottom-right-radius:5pt;-webkit-border-bottom-left-radius:5pt;color:#000;font-size:12pt;height:55pt;line-height:15pt;margin:0;padding:5pt 6.66666667pt;position:relative;width:inherit;background:#f5b83e;background:-webkit-gradient(linear,0 0,0 100%,from(#fbfa57),to(#f5b83e));background:-moz-linear-gradient(#fbfa57,#f5b83e);background:-o-linear-gradient(#fbfa57,#f5b83e);background:linear-gradient(#fbfa57,#f5b83e)}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews BLOCKQUOTE SPAN{display:block;height:45pt;line-height:15pt;overflow:hidden;text-shadow:1pt 1pt #fbfa57}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews BLOCKQUOTE:before{content:\"\";position:absolute;bottom:-20px;right:40px;border-width:0 0 20px 40px;border-style:solid;border-color:transparent #f5b83e;display:block;width:0}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews BLOCKQUOTE:after{content:\"\";position:absolute;bottom:-20px;right:70px;border-width:0 0 20px 10px;border-style:solid;border-color:transparent #fff;display:block;width:0}BODY>.page>.body>.content>.v6 .body>.content .product .information .reviews BLOCKQUOTE+P{margin:10px 90px 2em 0;text-align:right;font-style:italic}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small{height:94pt;margin:0 0 10pt 0 !important;padding:0;width:100%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI{float:left;margin:0;margin-bottom:10pt !important;padding:0;width:32%;position:relative}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI:nth-child(3n+1){margin-right:2%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI:nth-child(3n+3){margin-left:2%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu{box-shadow:0 0 10pt #999;margin-bottom:77pt !important}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>A{background:#f7f7f7}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>UL{position:absolute;top:94pt;margin:0;padding:0;border:solid 1pt #921736;width:100%;height:62pt;overflow:hidden;background:#fff}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>UL>LI{height:20pt;line-height:24pt !important;padding-left:5pt;border-bottom:solid 1pt #f7f7f7}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>UL>LI.more{position:absolute;width:30pt;bottom:0;right:15pt}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>UL>LI.more:after{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;font-size:8pt;content:\"\\f101\";color:#333;margin-left:5pt;margin-right:5pt}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI.submenu>UL>LI>A{color:#333}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A{border:solid 2pt #921736;display:block;height:94pt;position:relative;overflow:hidden;width:100%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A IMG{height:91pt;left:0;position:absolute;top:0;width:100%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A IMG.product{top:18pt;left:50%;margin-left:-15%;height:90pt;border:solid 1pt #333;box-shadow:0 0 10pt #333;width:26%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A IMG.product:nth-child(1){-ms-transform:rotate(-10deg);-webkit-transform:rotate(-10deg);transform:rotate(-10deg);margin-left:-38%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A IMG.product:nth-child(2){-ms-transform:rotate(10deg);-webkit-transform:rotate(10deg);transform:rotate(10deg);margin-left:12%}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A IMG.product:nth-child(3){width:30%;top:10px}BODY>.page>.body>.content>.v6 .body>.content .spotlight-small>LI>A SPAN{font-family:'Avenir Light';font-size:11pt;font-weight:normal;line-height:17pt;background-color:#921736;color:#fff;bottom:0;display:block;height:15pt;left:0;padding:2pt;position:absolute;text-align:center;width:100%}BODY>.page>.body>.content>.v6 .body>.content .tiles{height:300px;margin:auto auto;margin-bottom:35px;position:relative}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile{height:150px;left:0;position:absolute;top:0;width:100px}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile.tile-1{height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile A{height:inherit;width:inherit}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile A.more{background-color:rgba(0,0,0,0.75);color:#fff;left:0;padding-top:50px;position:absolute;text-align:center;top:0;z-index:2}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile A.more B{font-size:40px}BODY>.page>.body>.content>.v6 .body>.content .tiles .tile A IMG{height:inherit;width:inherit}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-1{width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-2{width:410px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-2 .tile-2{left:210px;height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-3{width:620px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-3 .tile-2{left:210px;height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-3 .tile-3{left:420px;height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-4{width:520px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-4 .tile-2{left:210px;height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-4 .tile-3{left:420px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-4 .tile-4{top:160px;left:420px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-5{width:420px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-5 .tile-2{left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-5 .tile-3{left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-5 .tile-4{top:160px;left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-5 .tile-5{top:160px;left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6{width:630px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6 .tile-2{left:210px;height:310px;width:200px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6 .tile-3{left:420px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6 .tile-4{left:530px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6 .tile-5{top:160px;left:420px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-6 .tile-6{top:160px;left:530px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7{width:530px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-2{left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-3{left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-4{left:430px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-5{top:160px;left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-6{top:160px;left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-7 .tile-7{top:160px;left:430px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8{width:430px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-1{height:150px;width:100px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-2{left:110px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-3{left:220px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-4{left:330px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-5{top:160px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-6{top:160px;left:110px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-7{top:160px;left:220px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-8 .tile-8{top:160px;left:330px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9{width:640px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-2{left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-3{left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-4{left:430px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-5{left:540px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-6{top:160px;left:210px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-7{top:160px;left:320px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-8{top:160px;left:430px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-9 .tile-9{top:160px;left:540px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10{width:540px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-1{height:150px;width:100px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-2{left:110px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-3{left:220px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-4{left:330px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-5{left:440px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-6{top:160px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-7{top:160px;left:110px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-8{top:160px;left:220px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-9{top:160px;left:330px}BODY>.page>.body>.content>.v6 .body>.content .tiles.tiles-10 .tile-10{top:160px;left:440px}BODY>.page>.body>.content>.v6 .body>.heading{background-attachment:fixed;background-position:top center;background-repeat:no-repeat;padding-bottom:15px;padding-top:48px;text-shadow:none !important}BODY>.page>.body>.content>.v6 .body>.heading H1{font-family:'Avenir Black';font-size:25pt;font-weight:normal;line-height:30pt}BODY>.page>.body>.content>.v6 .body>.heading H1.logo{text-align:center}BODY>.page>.body>.content>.v6 .body>.heading H1>.logo{max-height:150px;width:auto}BODY>.page>.body>.content>.v6 .body>.heading H2.logo{text-align:center}BODY>.page>.body>.content>.v6 .body>.heading H2>.logo{max-height:150px;width:auto}BODY>.page>.header{display:none !important}@media(max-width:580px){@viewport{width:480px;min-zoom:1;max-zoon:1;overflow:hidden;orientation:portrait}@-ms-viewport{width:device-width}BODY>.v6{width:100% !important;overflow-x:hidden}BODY>.v6>.page{margin:0;width:100% !important}BODY>.v6>.page>.body{margin-bottom:50px}BODY>.v6>.page>.breadcrumbs{width:100% !important}BODY>.v6>.page>.breadcrumbs:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.v6>.page>.header{height:64px;width:100%}BODY>.v6>.page>.header .free-shipping{display:none}BODY>.v6>.page>.header .logo{height:48px;left:72px;top:8px;clip:rect(0,105px,48px,0);width:64px}BODY>.v6>.page>.header .nav-main{display:none}BODY>.v6>.page>.header .nav-main.active{display:block;height:auto;left:0;top:64px;width:100%;z-index:1999}BODY>.v6>.page>.header .nav-main.active LI{display:block;height:64px;width:100%}BODY>.v6>.page>.header .nav-main.active LI>A{font-size:24px;line-height:64px;text-align:left;padding:0 16px}BODY>.v6>.page>.header .nav-main.active LI>A H2{line-height:64px}BODY>.v6>.page>.header .nav-main.active LI.cart{padding:0;width:100%}BODY>.v6>.page>.header .nav-main.active LI.cart>A{padding-left:64px}BODY>.v6>.page>.header .nav-main.active LI.mobile-hide{display:none}BODY>.v6>.page>.header .nav-main.active LI.mobile-show{display:block}BODY>.v6>.page>.header .nav-mobile{display:block}BODY>.v6>.page>.header .nav-mobile .menu{padding:0 !important;background:transparent;border:0;height:64px;left:0;position:absolute;top:0;width:64px}BODY>.v6>.page>.header .nav-mobile .menu:before{content:\"\\f0c9\"}BODY>.v6>.page>.header .nav-mobile .menu:before{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;color:#fff;font-size:40px !important;left:5px;position:absolute;margin-left:10px;margin-top:24px;top:0}BODY>.v6>.page>.header .nav-top{left:158px;top:0;width:222px}BODY>.v6>.page>.header .nav-top>LI.mobile-hide{display:none}BODY>.v6>.page>.header .nav-top>LI.mobile-show{display:table-cell}BODY>.v6>.page>.header .nav-top>LI.cart{float:right}BODY>.v6>.page>.header .nav-top>LI.item{padding-left:0;height:64px;max-width:64px;overflow:hidden;width:64px}BODY>.v6>.page>.header .nav-top>LI.locations{display:none;margin-right:-10px}BODY>.v6>.page>.header .nav-top>LI.locations A:before{margin-left:25px;margin-right:-10px}BODY>.v6>.page>.header .nav-top>LI.members{float:right}BODY>.v6>.page>.header .nav-top>LI.members A:before{margin-left:12px}BODY>.v6>.page>.header .nav-top>LI.search{float:right}BODY>.v6>.page>.header .nav-top>LI.search INPUT{display:none}BODY>.v6>.page>.header .nav-top>LI.search INPUT.active{border:solid 16px #921736;border-top:0;border-radius:0 !important;display:block;font-size:24px;height:64px;left:0;margin-left:-158px;position:absolute;top:64px;width:400px !important}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete{background:#fff;border:solid 1pt #921736;border-top:transparent;display:none !important;left:0 !important;margin-left:-158px;position:absolute;top:128px !important;z-index:1210}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete.active{display:block !important}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI{cursor:pointer;display:block;height:64px;line-height:64px;width:400px;max-width:400px}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI:hover{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI:hover B{color:#fff200}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI.selected{background:#921736;color:#fff}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI.selected B{color:#fff200}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI B{color:#921736}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN{display:block;float:left;height:inherit;overflow:hidden}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN.author{font-size:14px;line-height:16px;margin-top:-12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN.binding{text-align:center;width:30%}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN.cover{text-align:center;width:15%}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN.cover IMG{height:48px;margin:8px;width:auto}BODY>.v6>.page>.header .nav-top>LI.search>.autocomplete>LI SPAN.title{font-size:20px;line-height:44px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:50%}BODY>.v6>.page>.header .nav-top>LI.search>.menu{padding:0 !important;padding-left:10px;background:transparent;border:0;display:block;height:64px;right:0;position:absolute;top:0;width:64px}BODY>.v6>.page>.header .nav-top>LI.search>.menu:before{content:\"\\f002\"}BODY>.v6>.page>.header .nav-top>LI.search>.menu:before{font-decoration:inherit;font-family:FontAwesome !important;font-style:normal;font-weight:normal;color:#fff;font-size:40px !important;right:15px;position:absolute;margin-left:-10px;margin-right:0;margin-top:23px;top:0}BODY>.v6>.page>.header .nav-top>LI.search>.submit{display:none}BODY>.v6>.page>.header .nav-top>LI.vouchers{display:none}BODY>.v6>.page>.header .nav-top>LI A{background:transparent;border:0;height:64px;overflow:hidden;padding-left:64px;width:64px}BODY>.v6>.page>.header .nav-top>LI A:before{color:#fff;font-size:40px;left:5px;position:absolute;margin-left:8px;margin-top:12px;text-shadow:none}BODY>.v6>.page>.header .nav-top>LI A:hover{color:#fff}BODY>.v6>.page>.header .nav-top>LI A:hover:before{color:#fff}BODY>.v6>.page>.footer{width:100% !important;height:540px;overflow:hidden}BODY>.v6>.page>.footer.fixed{bottom:-484px;position:fixed}BODY>.v6>.page>.footer.fixed:before{display:none}BODY>.v6>.page>.footer .top .p5{width:100% !important}BODY>.v6>.page>.footer .top .p5:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.v6>.page>.footer .cols .col4{width:40% !important;height:200px}BODY>.v6>.page>.footer .disclaimer{max-width:100%}BODY>.page{margin:0 !important;width:100% !important}BODY>.page>.body{width:100% !important;padding-top:64px !important;margin-bottom:50px}BODY>.page>.body>.content>.v6>.body{margin:0}BODY>.page>.body>.content>.v6>.body>.breadcrumbs{left:0;overflow:hidden;width:100% !important;white-space:nowrap}BODY>.page>.body>.content>.v6>.body>.content{width:100%;padding:10px}BODY>.page>.body>.content>.v6>.body>.content.has-sidebar{padding:10px}BODY>.page>.body>.content>.v6>.body>.content>.main{float:none;padding:0;width:100%}BODY>.page>.body>.content>.v6>.body>.content>.main .product-list .product-thumb{width:50%}BODY>.page>.body>.content>.v6>.body>.content>.main .product-list .product-thumb A IMG{height:auto}BODY>.page>.body>.content>.v6>.body>.content>.main .product-list:after{clear:both;content:'.';display:block;height:0;visibility:hidden}BODY>.page>.body>.content>.v6>.body>.heading{background-size:100%}BODY>.page>.body>.content>.v6>.body>.heading>H1.logo>IMG.logo{width:90%}BODY>.page>.body>.promotional{width:100% !important}BODY>.page>.body>.promotional .line>.square{display:none}BODY>.page>.body>.promotional .line>.promo A IMG{height:auto;width:100% !important}BODY>.page>.body>.slices{height:148px !important;overflow:hidden !important}BODY>.page>.body>.slices .slice{background-size:190% 46.875%;width:100% !important}BODY>.page>.body>.slices .slice .ticket{margin-left:-30px !important;padding-right:-110px !important;padding-top:90px !important;transform:scale(0.46875);width:480px !important}BODY>.page>.body>.slices .slice .ticket .sell{margin-left:-25px !important}BODY>.page>.body .v5-productstrip{width:100%}BODY>.page>.footer{height:350px !important}BODY>.page>.footer .cols .col4{width:100% !important}}</style>\n" +
        "\t\t<link rel=\"stylesheet\" href=\"/res/css/main.v4.css?v=201804111145\" type=\"text/css\" />\n" +
        "\t\t<link rel=\"shortcut icon\" href=\"/favicon.ico\" />\n" +
        "\t\t<link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\" />\n" +
        "\t</head>\n" +
        "\t<body data-device=\"desktop\" data-user=\"inactive\" data-promotional-url=\"https://www.qbd.com.au/harriet-blue-03-liar-liar/james-patterson-candice-fox/9780143787471/\">\n" +
        "\t\t\t\t<div class=\"v6\">\n" +
        "\t\t\t<div class=\"page\">\n" +
        "\t\t\t\t<div class=\"header\">\n" +
        "\t\t\t\t\t<a href=\"/\"><img src=\"/res/img/logo-square-overhang.png\" width=\"139\" height=\"112\" class=\"logo\" title=\"QBD Books\" alt=\"QBD Books\" /></a><ul class=\"nav-top\"><li class=\"item search\"><button class=\"menu\"></button><button class=\"submit\"></button><input class=\"query\" type=\"text\" placeholder=\"Search by Title, Author or ISBN\" /><ul class=\"autocomplete\"></ul></li><li class=\"item vouchers\"><a href=\"/cart/voucher/\" class=\"icon icon-card\">Vouchers</a></li><li class=\"item locations\"><a href=\"/locations/\" class=\"icon icon-pin\">Locations</a></li><li class=\"item cart mobile-show\"><a href=\"/cart/\" class=\"icon icon-shopping-cart\">2 Items</a></li><li class=\"item members\"><a href=\"/club/login/\" class=\"icon icon-user\">Log In</a></li></ul><ul class=\"nav-main\"><li class=\"item mobile-show\"><a href=\"/locations/\" class=\"locations\">Store Locations</a></li><li class=\"item mobile-show\"><a href=\"/cart/voucher/\" class=\"vouchers\">Vouchers</a></li><li class=\"item\"><a href=\"/sale/\" class=\"sale\">Sale</a></li><li class=\"item\"><a href=\"/fiction/\">Fiction</a></li><li class=\"item\"><a href=\"/fiction/young-adult/\">Young Adult</a></li><li class=\"item\"><a href=\"/childrens/\">Childrens</a></li><li class=\"item mobile-hide\"><a href=\"/biographies/\">Biographies</a></li><li class=\"item mobile-hide\"><a href=\"/cooking/\">Cooking</a></li><li class=\"item\"><a href=\"/categories/\" class=\"categories\">All Categories</a></li><li class=\"item mobile-hide\"><a href=\"/events/\" class=\"events\">Events</a></li><li class=\"cart\"><a href=\"/cart/\">2 Items</a></li></ul><div class=\"nav-mobile\"><button class=\"menu\"></button></div><div class=\"free-shipping\"></div>\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"page\">\n" +
        "\t\t\t<div class=\"header\">\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"body bodypush\">\n" +
        "\t\t\t\t<div class=\"heading\"><a class=\"button action right expand-30 ta-center icon icon-lock icon-chevron-right\" href=\"/cart/checkout/\">Secure Checkout</a><h1>Cart</h1><ul class=\"breadcrumbs\"><li><a href=\"/\">Home</a></li></ul></div><div class=\"content\"><form class=\"cart-summary\" data-agreed=\"no\" data-checked=\"no\"><h2 class=\"title red\">PRODUCTS</h2><div class=\"cart-list-products zebra\"><div class=\"head\"><div class=\"column thumb\">Information</div><div class=\"column tools\">&nbsp;</div><div class=\"column total\">Total</div><div class=\"column quantity\">Qty</div><div class=\"column price\">Price</div><div class=\"column binding\">Binding</div><div class=\"column details\"></div></div><div class=\"line product\" id=\"cart-line-9781460751756\"><div class=\"thumb\"><img src=\"https://www.qbd.com.au/img/products/0/9781460751756.jpg\" /></div><div class=\"tools\"><button class=\"cart small pull-right\" data-function=\"remove\" data-isbn=\"9781460751756\" data-remove=\"cart-line-9781460751756\">Remove</button></div><div class=\"total\">$20.99</div><div class=\"quantity\"><input type=\"number\" min=\"0\" value=\"1\" class=\"qty\" data-type=\"product\" data-isbn=\"9781460751756\" data-price=\"20.99\" /></div><div class=\"price\">$20.99</div><div class=\"binding\">Paperback</div><div class=\"details\"><div class=\"title\">Pieces of Her</div><div class=\"author\">By: <span itemprop=\"author\"><span itemscope itemtype=\"http://schema.org/Person\"><a href=\"/karin-slaughter/\" itemprop=\"url\"><span itemprop=\"name\">Karin Slaughter</span></a></span></span></div></div></div><div class=\"line product\" id=\"cart-line-9781846059995\"><div class=\"thumb\"><img src=\"https://www.qbd.com.au/img/products/0/9781846059995.jpg\" /></div><div class=\"tools\"><button class=\"cart small pull-right\" data-function=\"remove\" data-isbn=\"9781846059995\" data-remove=\"cart-line-9781846059995\">Remove</button></div><div class=\"total\">$12.99</div><div class=\"quantity\"><input type=\"number\" min=\"0\" value=\"1\" class=\"qty\" data-type=\"product\" data-isbn=\"9781846059995\" data-price=\"12.99\" /></div><div class=\"price\">$12.99</div><div class=\"binding\">Hardcover</div><div class=\"details\"><div class=\"title\">Cop Town</div><div class=\"author\">By: <span itemprop=\"author\"><span itemscope itemtype=\"http://schema.org/Person\"><a href=\"/karin-slaughter/\" itemprop=\"url\"><span itemprop=\"name\">Karin Slaughter</span></a></span></span></div></div></div></div><br /><button class=\"dull right update expand-20 clear\">Update</button><button class=\"dull left giftwrapping clickable expand-20 clear\">Add Giftwrap</button><br clear=\"both\" />&nbsp;<br clear=\"both\" />&nbsp;<div class=\"giftwrapping-options hidden ta-center\"><i>Paper shown is indicative of the type of wrapping available. Actual wrapping may vary.</i><br /><br /><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/0f8af71f1e3a1a4951f8189720a92791.jpg\" /><div class=\"lh15 h25\">Birthday</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000026\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/2748b77000bec1a161afc7a171de006b.jpg\" /><div class=\"lh15 h25\">General Purpose</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000023\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/7e6df935d085fce3ec246e8340777044.jpg\" /><div class=\"lh15 h25\">For Her</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000024\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/661c2fbdccc53273ae475aa2e89dcc05.jpg\" /><div class=\"lh15 h25\">For Him</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000025\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/05a83512927af6ac50e1c86aeb367504.jpg\" /><div class=\"lh15 h25\">Christmas</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000027\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/c824e4d31f7e77c06a8c8f588b49a88b.jpg\" /><div class=\"lh15 h25\">Romantic</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000028\" data-quantity=\"1\" >Add</button></div></div><div class=\"mb20 expand-15 mr8 left\"><img style=\"width:100%;border:solid 1px #000;\" src=\"https://www.qbd.com.au/img/assets/eab36cf820b85637b8a7100b58d452b5.jpg\" /><div class=\"lh15 h25\">Children's</div><br /><div><button class=\"small expand-100 cart\" data-function=\"add\" data-type=\"extra\" data-isbn=\"8100000000030\" data-quantity=\"1\" >Add</button></div></div><br clear=\"both\" /></div><br /><h2 class=\"title red\">Coupons</h2><div class=\"line\"><div class=\"input-append\"><input type=\"text\" class=\"coupon-code mb0\" /><button class=\"dull coupon-submit mb0\">Apply Code</button></div></div><br /><br /><div class=\"line\"><div class=\"tools\"></div><div class=\"total\">$33.98</div><div class=\"quantity\">&nbsp;</div><div class=\"price\"><b>Subtotal</b></div></div><div class=\"line\"><div class=\"tools\"></div><div class=\"total\">$4.95</div><div class=\"quantity\">&nbsp;</div><div class=\"price\"><b>Shipping</b></div></div><div class=\"line\"><div class=\"tools\"></div><div class=\"total\">$38.93</div><div class=\"quantity\">&nbsp;</div><div class=\"price\"><b>Total</b></div></div><br /><button class=\"button action right ta-center cart checkout icon icon-lock icon-chevron-right expand-30 data-function=\"checkout\">Secure Checkout</button><br clear=\"both\" /><br /><button class=\"button dull right expand-30 ta-center cart continue expand-30\">Back to Shopping</button></form><div class=\"marketing-criteo\" data-type=\"cart\" data-account=\"13151\" data-customer=\"\" data-sitetype=\"d\" data-hashed=\"\" ><div class=\"marketing-criteo-list\"><div data-isbn=\"9781460751756\" data-price=\"20.99\" data-quantity=\"1\" ></div><div data-isbn=\"9781846059995\" data-price=\"12.99\" data-quantity=\"1\" ></div></div></div></div><br clear=\"both\" /><div class=\"google-analytics\" data-type=\"pageview\"></div><div class=\"emarsys-event\" data-type=\"pageview\"><div class=\"emarsys-event-cart\"><div data-isbn=\"9781460751756\" data-price=\"20.99\" data-quantity=\"1\" ></div><div data-isbn=\"9781846059995\" data-price=\"12.99\" data-quantity=\"1\" ></div></div></div><div class=\"facebook-event\" data-type=\"pageview\"></div>\t\t\t</div>\n" +
        "\t\t\t<div class=\"footer\">\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"v6\">\n" +
        "\t\t\t<div class=\"page\">\n" +
        "\t\t\t\t<div class=\"footer\">\n" +
        "\t\t\t\t\t<div class=\"top clear\">\n" +
        "\t\t\t\t\t\t<div class=\"left expand-20 p5 ta-center\">\n" +
        "\t\t\t\t\t\t\t<b class=\"heading\">Need Help?</b>\n" +
        "\t\t\t\t\t\t\t<i class=\"icon icon-phone\"></i> <a href=\"tel:+61732917444\" class=\"google-analytics-event-click\" data-type=\"contact\" data-action=\"CTC\" data-stop=\"yes\">(07) 3291 7444</a>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"right expand-30 p5\">\n" +
        "\t\t\t\t\t\t\t<div class=\"payment-information left\">\n" +
        "\t\t\t\t\t\t\t\t<img src=\"/res/img/payment-types.png\" style=\"height:30px;width:auto;margin:5px 0;\" alt=\"Accepted Payment Types\" />\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"left expand-50 p5 footer-subscribe\">\n" +
        "\t\t\t\t\t\t\t<form method=\"post\" action=\"/club/subscribe/\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"input-append\">\n" +
        "\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"subscribe_email\" class=\"email\" placeholder=\"Your email address\" />\n" +
        "\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"submit\">&nbsp; Subscribe &nbsp;</button>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</form>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t<ul class=\"cols clear\">\n" +
        "\t\t\t\t\t\t<li class=\"col col4\">\n" +
        "\t\t\t\t\t\t\t<b class=\"heading\"><a href=\"/contact/\">Contact QBD</a></b>\n" +
        "\t\t\t\t\t\t\t\t<br />\n" +
        "\t\t\t\t\t\t\t(07) 3291 7444<br />\n" +
        "\t\t\t\t\t\t\t<a href=\"mailto:online@qbd.com.au\">online@qbd.com.au</a><br />\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"col col4\">\n" +
        "\t\t\t\t\t\t\t<b class=\"heading\"><a href=\"/site/about/\">About QBD</a></b>\n" +
        "\t\t\t\t\t\t\t\t<br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/site/privacy/\">Privacy Policy</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/site/terms/\">Terms of Use</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/site/about/\">About QBD</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"https://blog.qbd.com.au/\">Blog</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/events/\">Events</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/sitemap/\">Sitemap</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"col col4\">\n" +
        "\t\t\t\t\t\t\t<b class=\"heading\"><a href=\"/help/faq/\">Help</a></b>\n" +
        "\t\t\t\t\t\t\t\t<br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/contact/\">Contact</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/help/faq/\">FAQ</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/help/faq/delivery/\">Shipping & Delivery</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/site/returns/\">Returns Policy</a><br />\n" +
        "\t\t\t\t\t\t\t<a href=\"/site/payments/zippay/\">About ZipPay</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"col col4\">\n" +
        "\t\t\t\t\t\t\t<b class=\"heading\"><a href=\"https://blog.qbd.com.au/\" target=\"_blank\">Social</a></b>\n" +
        "\t\t\t\t\t\t\t\t<br />\n" +
        "\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/QBDTheBookshop\" target=\"_blank\" class=\"social icon icon-facebook\"></a>\n" +
        "\t\t\t\t\t\t\t<a href=\"https://www.twitter.com/QBDTheBookshop\" target=\"_blank\" class=\"social icon icon-twitter\"></a>\n" +
        "\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/QBDTheBookshop\" target=\"_blank\" class=\"social icon icon-instagram\"></a>\n" +
        "\t\t\t\t\t\t\t<a href=\"#\" target=\"_blank\" rel=\"nofollow\" class=\"social icon icon-snapchat modal-open\" data-modal-title=\"Snapcode\" data-modal-feed=\"asset/snapcode\"></a>\n" +
        "\t\t\t\t\t\t\t<a href=\"https://www.goodreads.com/user/show/56576465-qbd-the-bookshop\" target=\"_blank\" class=\"social icon icon-goodreads\"></a>\n" +
        "\t\t\t\t\t\t\t<a href=\"https://blog.qbd.com.au/\" target=\"_blank\" class=\"social icon icon-wordpress\"></a>\n" +
        "\t\t\t\t\t\t\t\t<br clear=\"both\" />\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br />\n" +
        "\t\t\t\t\t\t\t&copy; 2018 - QBD Books<br />ABN: 54 614 038 765\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t</ul>\n" +
        "\t\t\t\t\t<div class=\"disclaimer\">\n" +
        "\t\t\t\t\t\tRRP refers to the Recommended Retail Price as set out by the original publisher at time of release.\n" +
        "\t\t\t\t\t\tThe RRP set by overseas publishers may vary to those set by local publishers due to exchange rates and\n" +
        "\t\t\t\t\t\tshipping costs. Due to our competitive pricing, we may have not sold all products at their original RRP.\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\n" +
        "\t\t<script async type=\"text/javascript\" src=\"//maps.googleapis.com/maps/api/js?v=3&key=AIzaSyD1Le64JQzjqBT580Y9QJUD73eDVTZi8J0\"></script>\n" +
        "\n" +
        "\n" +
        "<script>\n" +
        "\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
        "\tga('create', 'UA-838381-2', 'auto');\n" +
        "\tga('require', 'ec');\n" +
        "</script>\n" +
        "<script async type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion_async.js\" charset=\"utf-8\"></script>\n" +
        "\n" +
        "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n" +
        "<script>\n" +
        "(adsbygoogle = window.adsbygoogle || []).push({\n" +
        "google_ad_client: \"ca-pub-9616249507674022\",\n" +
        "enable_page_level_ads: true\n" +
        "});\n" +
        "</script>\n" +
        "<script>\n" +
        "\tvar gts = gts || [];\n" +
        "\tgts.push([\"id\", \"577100\"]);\n" +
        "\tgts.push([\"badge_position\", \"BOTTOM_RIGHT\"]);\n" +
        "\tgts.push([\"locale\", \"en_AU\"]);\n" +
        "\t(function() {var gts = document.createElement(\"script\");gts.type = \"text/javascript\";gts.async = true;gts.src = \"https://www.googlecommerce.com/trustedstores/api/js\";var s = document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(gts, s);})();</script>\n" +
        "<script type=\"text/javascript\"> var ScarabQueue = ScarabQueue || []; (function(id) { if (document.getElementById(id)) return; var js = document.createElement('script'); js.id = id; js.src = '//cdn.scarabresearch.com/js/1CCE7FE836D5096D/scarab-v2.js'; var fs = document.getElementsByTagName('script')[0]; fs.parentNode.insertBefore(js, fs); })('scarab-js-api'); </script>\n" +
        "<script type=\"text/javascript\">\n" +
        "\tsetTimeout(function(){var a=document.createElement(\"script\");\n" +
        "\t\tvar b=document.getElementsByTagName(\"script\")[0];\n" +
        "\t\ta.src=document.location.protocol+\"//script.crazyegg.com/pages/scripts/0063/7368.js?\"+Math.floor(new Date().getTime()/3600000);\n" +
        "\t\ta.async=true;a.type=\"text/javascript\";b.parentNode.insertBefore(a,b)}, 1);\n" +
        "</script>\n" +
        "<script>\n" +
        "\t!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');\n" +
        "\tfbq( 'init', '1363355063717390' );\n" +
        "</script>\n" +
        "<noscript><img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=1363355063717390&ev=PageView&noscript=1\" /></noscript>\n" +
        "\n" +
        "<script type=\"text/javascript\" src=\"//static.criteo.net/js/ld/ld.js\" async></script>\n" +
        "\n" +
        "<script async src=\"https://t.cfjump.com/tag/54934\"></script>\n" +
        "\t\t<script async type=\"text/javascript\" src=\"/res/js/main.v4.js?v=201804111145\"></script>\n" +
        "\t</body>\n" +
        "</html>"
}


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


function search_websites(site_list, array_thingo, isbn_list) {
    var url_list = [];
    console.log(Object.keys(site_list).length);
    for (i = 0; i < Object.keys(site_list).length; i++) {
        console.log(i);
        for (j = 0; j < isbn_list.length; j++) {
            console.log(j)
            var key = Object.keys(site_list)[i]
            var url = site_list[key].replace(/\{\}/, isbn_list[j]);
            url_list.push(url)
            // console.log(util.inspect(array_thingo, { depth: 4 }))
            // array_thigno = check_site(data, array_thingo, individual = true)
            // array_thingo[isbn_list[j]][key] = array_thingo[isbn_list[j]][key].push(url) //Add url to book

        }
        array_list = do_stuff(url_list)
        console.log(array_list)

    }
    return array_thingo
}

function do_stuff(url) {
    list = []
    for (i = 0, i < url.length, i++) {
        list.push(scrappy(url))
    }
    return list
}

//Determine which site the data is from and scrape appropriate book data
function check_site(data, array_thingo, individual = false) {
    let angus_pattern = /Angus &amp; Robertson/;
    let qbd_pattern = /www.qbd.com.au/;

    //Scrape A&R data

    if (angus_pattern.test(data) === true) {
        // var identifier = 'angus';
        if (individual === false) {
            var angus_isbn = /id:.*?"([0-9]{13})/g;
            var angus_price = /ubtotal:.*?([0-9.]*),/g;
            var angus_image = /image-modal.*?src="(.*?)"/g;
            var nested_match = /line_items:.*?language/gs;
        } else {
            var angus_isbn = /id:.*?\\"([0-9]{13})/g;
            var angus_price = /itemprop=\\"price\\">([0-9.]*)/g;
            var angus_image = /image-modal.*?src=\\"(.*?)\\"/;
            var nested_match = false;
        }

        return scrape_page(data, angus_isbn, angus_price, angus_image, 'angus', array_thingo, nested_match);

        //Scrape QBD Data
    } else if (qbd_pattern.test(data) === true) {
        // var identifier = 'qbd';
        if (individual === false) {
            var qbd_isbn = /data-isbn="([0-9]{13})" data-price="[0-9.]+" \//g;
            var qbd_price = /data-isbn="[0-9]{13}" data-price="([0-9.]*)" \//g;
            var qbd_image = /line product.*?src="(.*?)"/g
        } else {
            var qbd_isbn = /isbn=\\"([0-9]{13})/;
            var qbd_price = /data-price=\\"([0-9.]*)/;
            var qbd_image = /cover.*?img src=\\"(https.*?)\\"/;
        }

        // data-isbn="([0-9]{13})" data-price="([0-9.]*)" \//g <----------------------------------------------------------------- for checkout page isbn
        console.log(qbd_isbn);
        return scrape_page(data, qbd_isbn, qbd_price, qbd_image, 'qbd', array_thingo);

    } else {
        console.log('Unable to identify site');
        return array_thingo;
    }

}

function get_matched_groups(pattern, data) {
    var matches = [];
    while (match = pattern.exec(data)) {
        matches.push(match[1]);
    }
    return matches;
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

function scrape_page(data, isbn_pattern, price_pattern, image_pattern, identifier, array_thingo, nested_match = false) {
    var identifier = identifier;
    if (nested_match !== false) {
        while (match = nested_match.exec(data)) {
            match_string = match[0];
            var isbns = get_matched_groups(isbn_pattern, match_string);
            var prices = get_matched_groups(price_pattern, match_string);
            var images = get_matched_groups(image_pattern, match_string);
            // var isbns = match_string.match(isbn_pattern);
            // var prices = match_string.match(price_pattern);
            console.log(isbns, prices);
        }

    } else {
        var isbns = get_matched_groups(isbn_pattern, data);
        var prices = get_matched_groups(price_pattern, data);
        var images = get_matched_groups(image_pattern, data);
    }

    //Array containing price/isbn pairs
    console.log('Line 370:', isbns, prices, images)
    var combined_array = array_thingo;
    for (var i = 0; i < isbns.length; i++) {
        try {
            combined_array[isbns[i]][[identifier]] = [prices[i], images[i]];
        } catch {
            combined_array[isbns[i]] = {[identifier]: [prices[i], images[i]]};
        }


    }
    console.log(combined_array);
    // array_thingo[identifier] = [isbn, price];
    return combined_array;
}


function scraper(book_url) {
    $.ajax({
        url: book_url,
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            console.log(data)
        },
        error: function () {
            alert('not that')
        }
    })

}

function scrappy(url, array_thingo, individual_boolean = true) {
    proxyXHR.get(url).onSuccess(function (data) {console.log(data)
        array_thingo = check_site(data, array_thingo, individual = individual_boolean)
        return
    }).onFailure(function (status) {
        alert("HTTP Error " + status + " while retrieving data.");
    });
}