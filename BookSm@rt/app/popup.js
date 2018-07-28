$(function () {
        $("#btnsave").click(function () {
            var name = $("#txt_name").val();


            let array_thingo = {};
            let site_list = {
                'angus': 'www.angusrobertson.com.au',
                'qbd': 'www.qbd.com.au'
            };

            // let html = document.documentElement.innerHTML;
            // console.log(html)
            html = get_html();
            array_thingo = check_site(html, array_thingo);
            console.log(array_thingo);

            keys = array_thingo.Object.keys();
            alert(keys)

            })

        }


)


function get_html() {
    return "\n" +
        "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "\t<title>\n" +
        "\t\tCheckout | Angus &amp; Robertson</title>\n" +
        "\t\n" +
        "\t<!-- recommend IE to use the latest renderer engine -->\n" +
        "\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
        "\n" +
        "\t<meta name=\"level1NavCategory\" content=\"BOOKS\"/>\n" +
        "\t<meta name=\"currentCategory\" content=\"BOOKS\"/>\n" +
        "\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n" +
        "    <meta name=\"google-site-verification\" content=\"_b-psRobsjFLB-KQ6lPMD1wHlXqv9p387n_VaLCR1OU\" />\n" +
        "    \n" +
        "    <meta name=\"robots\" content=\"index,follow\" />\n" +
        "            <meta name=\"HandheldFriendly\" content=\"True\" />\n" +
        "            <meta name=\"MobileOptimized\" content=\"970\" />\n" +
        "            <meta name=\"viewport\" content=\"width=970, target-densitydpi=160, maximum-scale=1.0\" />\n" +
        "            \n" +
        "<script type=\"text/javascript\">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if(\"function\"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e(\"handle\"),a=e(2),u=e(3),c=e(\"ee\").get(\"tracer\"),f=e(\"loader\"),s=NREUM;\"undefined\"==typeof window.newrelic&&(newrelic=s);var p=[\"setPageViewName\",\"setCustomAttribute\",\"setErrorHandler\",\"finished\",\"addToTrace\",\"inlineHit\",\"addRelease\"],d=\"api-\",l=d+\"ixn-\";a(p,function(e,t){s[t]=o(d+t,!0,\"api\")}),s.addPageAction=o(d+\"addPageAction\",!0),s.setCurrentRouteName=o(d+\"routeName\",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o=\"function\"==typeof t;return i(l+\"tracer\",[f.now(),e,n],r),function(){if(c.emit((o?\"\":\"no-\")+\"fn-start\",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit(\"fn-err\",[arguments,this,e],n),e}finally{c.emit(\"fn-end\",[f.now()],n)}}}};a(\"setName,setAttribute,save,ignore,onEnd,getContext,end,get\".split(\",\"),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){\"string\"==typeof e&&(e=new Error(e)),i(\"err\",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r=\"\",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),\"undefined\"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:\"undefined\"!=typeof window.performance&&window.performance.timing&&\"undefined\"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||\"feature\",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u=\"nr@context\",c=e(\"gos\"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e(\"ee\").get(\"handle\");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||\"object\"!==t&&\"function\"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i=\"nr@id\",a=e(\"gos\");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName(\"script\")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c(\"mark\",[\"onload\",a()+h.offset],null,\"api\");var n=d.createElement(\"script\");n.src=\"https://\"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){\"complete\"===d.readyState&&i()}function i(){c(\"mark\",[\"domContent\",a()+h.offset],null,\"api\")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e(\"handle\"),f=e(2),s=e(\"ee\"),p=window,d=p.document,l=\"addEventListener\",m=\"attachEvent\",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=\"\"+location,y={beacon:\"bam.nr-data.net\",errorBeacon:\"bam.nr-data.net\",agent:\"js-agent.newrelic.com/nr-1071.min.js\"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l](\"DOMContentLoaded\",i,!1),p[l](\"load\",r,!1)):(d[m](\"onreadystatechange\",o),p[m](\"onload\",r)),c(\"mark\",[\"firstbyte\",u],null,\"api\");var x=0,E=e(4)},{}]},{},[\"loader\"]);</script><link rel=\"apple-touch-icon\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-57x57.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-57x57.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-60x60.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-72x72.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-76x76.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-114x114.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-120x120.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-144x144.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-152x152.png\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/apple-touch-icon-180x180.png\">\n" +
        "<link rel=\"icon\" type=\"image/png\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/favicon-32x32.png\" sizes=\"32x32\">\n" +
        "<link rel=\"icon\" type=\"image/png\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/android-chrome-192x192.png\" sizes=\"192x192\">\n" +
        "<link rel=\"icon\" type=\"image/png\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/favicon-96x96.png\" sizes=\"96x96\">\n" +
        "<link rel=\"icon\" type=\"image/png\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/favicon-16x16.png\" sizes=\"16x16\">\n" +
        "<link rel=\"manifest\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/manifest.json\">\n" +
        "<link rel=\"shortcut icon\" href=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/favicon.ico\">\n" +
        "<meta name=\"msapplication-TileColor\" content=\"#f0f0f0\">\n" +
        "<meta name=\"msapplication-TileImage\" content=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/mstile-144x144.png\">\n" +
        "<meta name=\"msapplication-config\" content=\"https://cdn.angusrobertson.com.au/_ui/shared/theme-arbw/images/favicons/browserconfig.xml\"><link rel=\"stylesheet\" href=\"https://cdn.angusrobertson.com.au/wro/20180719 1128/arbw.css\"/>\n" +
        "\n" +
        "\t<script type=\"text/javascript\">\n" +
        " \t\t\twindow.universal_variable = {\n" +
        " \t\t\t  \"version\" : \"1.2.0\",\n" +
        " \t\t\t  page: {\n" +
        " \t\t\t    type: \t\t\t\t\"CART\",\n" +
        " \t\t\t    \n" +
        " \t\t\t\tbreadcrumb : \t\t[\n" +
        " \t\t\t\t\t\"Bookworld Checkout\"\n" +
        " \t\t\t\t]\n" +
        " \t\t\t\t\n" +
        " \t\t\t  },\n" +
        " \t\t\t  \n" +
        " \t\t\t     \n" +
        "\t \t \t\t  basket: {\n" +
        "\t \t \t\t\tid: \t\t\t\t \"c_02876890\",\n" +
        "\t \t \t \t    currency:\t\t\t \"AUD\",\n" +
        "\t \t \t \t    subtotal:            92.01, \n" +
        "\t \t \t \t    total: \t\t\t\t 92.01,\n" +
        "\t\t \t \t    tax:\t\t\t\t 8.37,\n" +
        "\t\t \t \t    shipping_cost: \t\t 0.00,\n" +
        "\t\t\t\t\tpromotions:          [\n" +
        "\t\t\t\t\t                    \t\n" +
        "\t\t\t\t\t\t\t\t\t    ],\n" +
        " \t\t \t \t    line_items:       \t[\n" +
        " \t\t \t \t                      \t \n" +
        " \t\t \t \t                      \t \t{\n" +
        "\t\t\t \t \t                     \t\tquantity:\t\t\t1,\n" +
        "\t\t\t \t \t                  \t \t\tsubtotal:\t\t\t40.03,\n" +
        "\t\t\t \t \t \t\t\t\t\t \t\tproduct:{\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tid:\t\t\t\t\t\"9781631491177\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsku_code:\t\t\t\"9781631491177\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tname: \t\t\t\t\"The Prison Letters of Nelson Mandela\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tdescription:\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\turl:\t\t\t\t\"/books/the-prison-letters-of-nelson-mandela-nelson-mandela-sahm-venter/p/9781631491177\",\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tunit_price:\t\t\t49.95, unit_sale_price:\t\t40.03, \t\t\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcurrency:\t\t\t\"AUD\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcategory:\t\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsize:\t\t\t\t\"\"\n" +
        "\t\t\t \t \t\t\t\t\t\t\t\t}\n" +
        "\t\t\t \t \t                  \t\t}\n" +
        "\t\t\t\t\t \t \t          \t\t,\n" +
        " \t\t \t \t                      \t \t{\n" +
        "\t\t\t \t \t                     \t\tquantity:\t\t\t1,\n" +
        "\t\t\t \t \t                  \t \t\tsubtotal:\t\t\t25.99,\n" +
        "\t\t\t \t \t \t\t\t\t\t \t\tproduct:{\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tid:\t\t\t\t\t\"9780733637933\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsku_code:\t\t\t\"9780733637933\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tname: \t\t\t\t\"The Other Wife\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tdescription:\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\turl:\t\t\t\t\"/books/the-other-wife-michael-robotham/p/9780733637933\",\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tunit_price:\t\t\t32.95, unit_sale_price:\t\t25.99, \t\t\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcurrency:\t\t\t\"AUD\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcategory:\t\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsize:\t\t\t\t\"\"\n" +
        "\t\t\t \t \t\t\t\t\t\t\t\t}\n" +
        "\t\t\t \t \t                  \t\t}\n" +
        "\t\t\t\t\t \t \t          \t\t,\n" +
        " \t\t \t \t                      \t \t{\n" +
        "\t\t\t \t \t                     \t\tquantity:\t\t\t1,\n" +
        "\t\t\t \t \t                  \t \t\tsubtotal:\t\t\t25.99,\n" +
        "\t\t\t \t \t \t\t\t\t\t \t\tproduct:{\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tid:\t\t\t\t\t\"9781460751756\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsku_code:\t\t\t\"9781460751756\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tname: \t\t\t\t\"Pieces of Her\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tdescription:\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\turl:\t\t\t\t\"/books/pieces-of-her-karin-slaughter/p/9781460751756\",\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tunit_price:\t\t\t32.99, unit_sale_price:\t\t25.99, \t\t\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcurrency:\t\t\t\"AUD\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tcategory:\t\t\t\"\",\n" +
        "\t\t\t\t\t \t \t\t \t\t\t\t\tsize:\t\t\t\t\"\"\n" +
        "\t\t\t \t \t\t\t\t\t\t\t\t}\n" +
        "\t\t\t \t \t                  \t\t}\n" +
        "\t\t\t\t\t \t \t          \t\t\n" +
        "\t\t\t \t \t               \t\t] \n" +
        "\t \t \t\t  },\n" +
        " \t\t\t \n" +
        "             \n" +
        "  \t \t     user: {\n" +
        "\t \t \t\tname: \t\t\t\t\"\",\n" +
        "\t \t\t    user_id: \t\t\t\"000000002\",\n" +
        "\t \t\t    email: \t\t\t\t\"anonymous\",\n" +
        "\t \t\t    facebook_id: \t\t\"\",\n" +
        "\t \t\t    twitter_id: \t\t\"\",\n" +
        "\t \t\t\n" +
        "\t \t\t    language: \t\t\t\"English\"\n" +
        "\t \t \t }\n" +
        " \t\t\t}\n" +
        "</script><script src=\"//d3c3cq33003psk.cloudfront.net/opentag-79846-918449.js\" async defer></script>\n" +
        "<script src=\"//d3c3cq33003psk.cloudfront.net/opentag-79846-2135483.js\"></script>\n" +
        "<script type=\"text/javascript\">\n" +
        "  var ScarabQueue = ScarabQueue || [];\n" +
        "  (function(id) {\n" +
        "    if (document.getElementById(id)) return;\n" +
        "    var js = document.createElement('script'); js.id = id;\n" +
        "    js.src = '//cdn.scarabresearch.com/js/1EFF7B284367DE4E/scarab-v2.js';\n" +
        "    var fs = document.getElementsByTagName('script')[0];\n" +
        "    fs.parentNode.insertBefore(js, fs);\n" +
        "  })('scarab-js-api');\n" +
        "</script>\n" +
        "<script type=\"text/javascript\">\n" +
        "    var formSuccess = \"\";\n" +
        "    var form = \"\";\n" +
        "    var popupMessage = \"\";\n" +
        "    var popupErrorMessage = \"\";\n" +
        "    var ajaxTimeout = \"700000\";\n" +
        "    var ajaxCMSComponentTimeout = \"7000\";\n" +
        "    var EMARSYS_TEST_MODE = false;\n" +
        "</script>\n" +
        "\n" +
        "<script type='text/javascript'>\n" +
        "    var _vwo_code=(function(){\n" +
        "        var account_id=343342,\n" +
        "            settings_tolerance=2000,\n" +
        "            library_tolerance=2500,\n" +
        "            use_existing_jquery=false,\n" +
        "            /* DO NOT EDIT BELOW THIS LINE */\n" +
        "            f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();\n" +
        "</script></head>\n" +
        "\n" +
        "<body class=\" page-cartPage pageType-ContentPage template-pages-CartPageTemplate pageLabel-cart language-en  theme-arbw anonymous\">\n" +
        "\t<div class=\"container-fluid no-gutter header\">\n" +
        "            <nav class=\"navbar navbar-default\">\n" +
        "\t\t\t<div class=\"container\">\n" +
        "\t\t\t\t<div class=\"nav navbar-nav navbar-text\">\n" +
        "\t\t\t\t\t<a class=\"btn-return\" href=\"/\">Return to shop</a>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"navbar-right\">\n" +
        "\t\t\t\t\t<ul class=\"nav navbar-nav cart-links\">\n" +
        "\t\t\t\t\t\t<li>\n" +
        "\t\t\t\t\t\t\t<a href=\"/cart/terms-and-conditions\" data-toggle=\"modal\" data-target=\"#ajaxResponse\">Terms &amp; Conditions</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"list-divider\">|</li>\n" +
        "\t\t\t\t\t\t<li>\n" +
        "\t\t\t\t\t\t\t<a href=\"/cart/returns-policy\" data-toggle=\"modal\" data-target=\"#ajaxResponse\">Returns Policy</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"list-divider\">|</li>\n" +
        "\t\t\t\t\t\t<li>\n" +
        "\t\t\t\t\t\t\t<a href=\"/cart/delivery-information\" data-toggle=\"modal\" data-target=\"#ajaxResponse\">Delivery Information</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t\t<li class=\"list-divider\">|</li>\n" +
        "\t\t\t\t\t\t<li>\n" +
        "\t\t\t\t\t\t\t<a href=\"/cart/privacy\" data-toggle=\"modal\" data-target=\"#ajaxResponse\">Privacy Policy</a>\n" +
        "\t\t\t\t\t\t</li>\n" +
        "\t\t\t\t\t</ul>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</nav>\n" +
        "\t<div class=\"container\">\n" +
        "\t<div class=\"page-header row\">\n" +
        "    <div class=\"col-sm-3 site-logo\">\n" +
        "    \t<a id=\"logo\" href=\"/\">\n" +
        "\t<img title=\"\" alt=\"\" src=\"https://covers.angusrobertson.com.au/medias/logo-site.png?context=bWFzdGVyfGltYWdlc3w2OTM1fGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oYWUvaDhlLzEyODAwNzQ0NDIzNDU0L2xvZ28tc2l0ZS5wbmd8MzViZGVmNzAzMTM0ZDUyZDZlYzE5MjNiMjg3MzQyMWMxNTJlMDU5NDI1OTc0OGYyZjRlMjIyZmE0MTg0NTQzYQ\">\n" +
        "</a>\n" +
        "</div>\n" +
        "\t\n" +
        "\t<div class=\"col-sm-9\">\n" +
        "    \t<div class=\"secured-by\">\n" +
        "    \t\t\t\tProudly secured by:\n" +
        "    \t\t\t\t<img itemprop=\"image\" src=\"https://cdn.angusrobertson.com.au/_ui/desktop/theme-arbw/images/logos_gt_white.png\" alt=\"GeoTrust\" title=\"\" class=\"\"/>\n" +
        "\t<img itemprop=\"image\" src=\"https://www.eway.com.au/images/site-seal/wizz/dark/88x40-nocard.png\" alt=\"eWay\" title=\"\" class=\"\"/>\n" +
        "\t</div>\n" +
        "    \t\t</div>\n" +
        "</div></div>\n" +
        "</div>\n" +
        "        <div id=\"page-content-container\" class=\"container content\">\n" +
        "        \t\t<div class=\"row usp-banner\">\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "            <div class=\"leaderboardBanner\">\n" +
        "                </div>\n" +
        "            <div id=\"cart_popup\" class=\"cart_popup\"></div><div id=\"popup_wishlist\" class=\"wishlist\" style=\"width: 700px\"></div><div class=\"information_message negative\" id=\"noStoreSelected\" style=\"display:none\" tabindex=\"0\">\n" +
        "\t<span class=\"single\"></span>\n" +
        "\t<p>Please select stores for the entries highlighted in red</p>\n" +
        "</div><div class=\"span-24\">\n" +
        "\t\t<div class=\"span-20\">\n" +
        "\t\t\t<div class=\"span-20\">\n" +
        "\t\t\t\t<div class=\"main_content clearfix\">\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t<div class=\"checkout main_content clearfix\">\n" +
        "\t\t\t\t\t<div class=\"main_content clearfix\" style=\"margin-left: 0 !important;\">\n" +
        "\t\t\t\t\t\t<div id=\"item_container_holder_bw\">\n" +
        "\t<div id=\"order_summary\" class=\"item_container\">\n" +
        "\t\t<div class=\"cart-wrapper\">\n" +
        "\t\t  <table class=\"table cart-table\">\n" +
        "\t\t\t<thead>\n" +
        "\t\t\t  <tr>\n" +
        "\t\t\t\t<th class=\"product-col\">Your shopping cart</th>\n" +
        "\t\t\t\t<th>Price</th>\n" +
        "\t\t\t\t<th>Quantity</th>\n" +
        "\t\t\t\t<th>Total</th>\n" +
        "\t\t\t  </tr>\n" +
        "\t\t\t</thead>\n" +
        "\t\t\t<tbody>\n" +
        "\t\t\t  <tr data-product=\"9781631491177\">\n" +
        "                <td class=\"product-col cell\">\n" +
        "                <div class=\"cell half-height\">\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <a href=\"/books/the-prison-letters-of-nelson-mandela-nelson-mandela-sahm-venter/p/9781631491177\"><img class=\"image-modal\"  width=\"50\" src=\"https://covers.angusrobertson.com.au/images/9781631491177.jpg?width=50\" alt=\"The Prison Letters of Nelson Mandela\" title=\"The Prison Letters of Nelson Mandela\" />\n" +
        "\t\t  </a>\n" +
        "                  </div>\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <div class=\"cell half-height\">\n" +
        "                      <a href=\"/books/the-prison-letters-of-nelson-mandela-nelson-mandela-sahm-venter/p/9781631491177\">The Prison Letters of Nelson Mandela</a>\n" +
        "                    </div>\n" +
        "                    <div class=\"cell contributor\">\n" +
        "                      by <a title=\"Browse all products by Nelson Mandela\" href=\"/by/Nelson Mandela\">Nelson Mandela</a><span>,&nbsp;</span><a title=\"Browse all products by Sahm Venter\" href=\"/by/Sahm Venter\">Sahm Venter</a><span> and </span>\n" +
        "\t\t\t\t\t\t<a title=\"Browse all products by Sahm Venter\" href=\"/by/Sahm Venter\">Sahm Venter</a>\n" +
        "\t\t\t\t\t |\n" +
        "                      Hardback<br/>\n" +
        "                    <!-- BLOCK: AvailableToBuy -->\n" +
        "<!-- BLOCK: CartPage -->\n" +
        "\t\t\t<a href=\"#\">\n" +
        "\t\t\t<span class=\"availability\" data-toggle=\"modal\" data-target=\"#delivery_info_9781631491177\">\n" +
        "                <span class=\"okau-instock\">1-2 Weeks</span></span>\n" +
        "\t\t\t</a>\n" +
        "\t\t<!-- BLOCK: CartPage -->\n" +
        "\t\t<!-- Delivery messaging -->\n" +
        "<div id=\"delivery_info_9781631491177\" class=\"popModal modal fade\">\n" +
        "\t\t\t<div class=\"modal-dialog delivery-dialog\">\n" +
        "\t\t\t\t<div class=\"modal-content\">\n" +
        "\t\t\t\t\t<div class=\"modal-body\">\n" +
        "                        <ul style=\"padding-left: 20px;\"> <li>On order from our local supplier to our Sydney distribution centre</li><li>Once received into our distribution centre, we will despatch and inform you via email.</li><li>Arrives in 2-4 days after despatch for most Australian capitals.</li></ul></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\t<!-- ENDBLOCK: AvailableToBuy -->\n" +
        "</div>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "                </td>\n" +
        "    \n" +
        "                <td class=\"basePrice\"><!-- price.tag: start -->\n" +
        "$40.03<!-- price.tag: end -->\n" +
        "</td>\n" +
        "                <td class=\"quantity\">\n" +
        "                            <div class=\"quantity-container\">\n" +
        "                              <select class=\"form-control quantity select \" >\n" +
        "                                <option value=0 >0</option>\n" +
        "                                <option value=1 selected>1</option>\n" +
        "                                <option value=2 >2</option>\n" +
        "                                <option value=3 >3</option>\n" +
        "                                <option value=4 >4</option>\n" +
        "                                <option value=5 >5</option>\n" +
        "                                <option value=6 >6</option>\n" +
        "                                <option value=7 >7</option>\n" +
        "                                <option value=8 >8</option>\n" +
        "                                <option value=9 >9</option>\n" +
        "                                <option value=10+ >10+</option>\n" +
        "                              </select>\n" +
        "                              <input class=\"form-control quantity input collapse\" value=\"1\" />\n" +
        "                              <label class=\"quantity-output hidden\" data-input=\"text\">1</label>\n" +
        "                            </div>\n" +
        "                </td>\n" +
        "                <td class=\"entryTotal\"><!-- price.tag: start -->\n" +
        "$40.03<!-- price.tag: end -->\n" +
        "</td>\n" +
        "              </tr>\n" +
        "            <tr data-product=\"9780733637933\">\n" +
        "                <td class=\"product-col cell\">\n" +
        "                <div class=\"cell half-height\">\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <a href=\"/books/the-other-wife-michael-robotham/p/9780733637933\"><img class=\"image-modal\"  width=\"50\" src=\"https://covers.angusrobertson.com.au/images/9780733637933.jpg?width=50\" alt=\"The Other Wife\" title=\"The Other Wife\" />\n" +
        "\t\t  </a>\n" +
        "                  </div>\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <div class=\"cell half-height\">\n" +
        "                      <a href=\"/books/the-other-wife-michael-robotham/p/9780733637933\">The Other Wife</a>\n" +
        "                    </div>\n" +
        "                    <div class=\"cell contributor\">\n" +
        "                      by <a title=\"Browse all products by Michael Robotham\" href=\"/by/Michael Robotham\">Michael Robotham</a> |\n" +
        "                      Paperback / softback<br/>\n" +
        "                    <!-- BLOCK: AvailableToBuy -->\n" +
        "<!-- BLOCK: CartPage -->\n" +
        "\t\t\t<a href=\"#\">\n" +
        "\t\t\t<span class=\"availability\" data-toggle=\"modal\" data-target=\"#delivery_info_9780733637933\">\n" +
        "                <span class=\"bt-instock\">In Stock | 2-4 Days</span></span>\n" +
        "\t\t\t</a>\n" +
        "\t\t<!-- BLOCK: CartPage -->\n" +
        "\t\t<!-- Delivery messaging -->\n" +
        "<div id=\"delivery_info_9780733637933\" class=\"popModal modal fade\">\n" +
        "\t\t\t<div class=\"modal-dialog delivery-dialog\">\n" +
        "\t\t\t\t<div class=\"modal-content\">\n" +
        "\t\t\t\t\t<div class=\"modal-body\">\n" +
        "                        <ul style=\"padding-left: 20px;\"> <li>Typically received within 2-4 working days for most Australian capitals.</li>  <li>Please allow additional time for regional areas.</li>  <li>Once received into our distribution centre, we will despatch and inform you via email.</li>  <li>Tracking is available for this item via Australia Post.</li> </ul></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\t<!-- ENDBLOCK: AvailableToBuy -->\n" +
        "</div>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "                </td>\n" +
        "    \n" +
        "                <td class=\"basePrice\"><!-- price.tag: start -->\n" +
        "$25.99<!-- price.tag: end -->\n" +
        "</td>\n" +
        "                <td class=\"quantity\">\n" +
        "                            <div class=\"quantity-container\">\n" +
        "                              <select class=\"form-control quantity select \" >\n" +
        "                                <option value=0 >0</option>\n" +
        "                                <option value=1 selected>1</option>\n" +
        "                                <option value=2 >2</option>\n" +
        "                                <option value=3 >3</option>\n" +
        "                                <option value=4 >4</option>\n" +
        "                                <option value=5 >5</option>\n" +
        "                                <option value=6 >6</option>\n" +
        "                                <option value=7 >7</option>\n" +
        "                                <option value=8 >8</option>\n" +
        "                                <option value=9 >9</option>\n" +
        "                                <option value=10+ >10+</option>\n" +
        "                              </select>\n" +
        "                              <input class=\"form-control quantity input collapse\" value=\"1\" />\n" +
        "                              <label class=\"quantity-output hidden\" data-input=\"text\">1</label>\n" +
        "                            </div>\n" +
        "                </td>\n" +
        "                <td class=\"entryTotal\"><!-- price.tag: start -->\n" +
        "$25.99<!-- price.tag: end -->\n" +
        "</td>\n" +
        "              </tr>\n" +
        "            <tr data-product=\"9781460751756\">\n" +
        "                <td class=\"product-col cell\">\n" +
        "                <div class=\"cell half-height\">\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <a href=\"/books/pieces-of-her-karin-slaughter/p/9781460751756\"><img class=\"image-modal\"  width=\"50\" src=\"https://covers.angusrobertson.com.au/images/9781460751756.jpg?width=50\" alt=\"Pieces of Her\" title=\"Pieces of Her\" />\n" +
        "\t\t  </a>\n" +
        "                  </div>\n" +
        "                  <div class=\"cell inline\">\n" +
        "                    <div class=\"cell half-height\">\n" +
        "                      <a href=\"/books/pieces-of-her-karin-slaughter/p/9781460751756\">Pieces of Her</a>\n" +
        "                    </div>\n" +
        "                    <div class=\"cell contributor\">\n" +
        "                      by <a title=\"Browse all products by Karin Slaughter\" href=\"/by/Karin Slaughter\">Karin Slaughter</a> |\n" +
        "                      Paperback / softback<br/>\n" +
        "                    <!-- BLOCK: AvailableToBuy -->\n" +
        "<!-- BLOCK: CartPage -->\n" +
        "\t\t\t<a href=\"#\">\n" +
        "\t\t\t<span class=\"availability\" data-toggle=\"modal\" data-target=\"#delivery_info_9781460751756\">\n" +
        "                <span class=\"bt-instock\">In Stock | 2-4 Days</span></span>\n" +
        "\t\t\t</a>\n" +
        "\t\t<!-- BLOCK: CartPage -->\n" +
        "\t\t<!-- Delivery messaging -->\n" +
        "<div id=\"delivery_info_9781460751756\" class=\"popModal modal fade\">\n" +
        "\t\t\t<div class=\"modal-dialog delivery-dialog\">\n" +
        "\t\t\t\t<div class=\"modal-content\">\n" +
        "\t\t\t\t\t<div class=\"modal-body\">\n" +
        "                        <ul style=\"padding-left: 20px;\"> <li>Typically received within 2-4 working days for most Australian capitals.</li>  <li>Please allow additional time for regional areas.</li>  <li>Once received into our distribution centre, we will despatch and inform you via email.</li>  <li>Tracking is available for this item via Australia Post.</li> </ul></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\t<!-- ENDBLOCK: AvailableToBuy -->\n" +
        "</div>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "                </td>\n" +
        "    \n" +
        "                <td class=\"basePrice\"><!-- price.tag: start -->\n" +
        "$25.99<!-- price.tag: end -->\n" +
        "</td>\n" +
        "                <td class=\"quantity\">\n" +
        "                            <div class=\"quantity-container\">\n" +
        "                              <select class=\"form-control quantity select \" >\n" +
        "                                <option value=0 >0</option>\n" +
        "                                <option value=1 selected>1</option>\n" +
        "                                <option value=2 >2</option>\n" +
        "                                <option value=3 >3</option>\n" +
        "                                <option value=4 >4</option>\n" +
        "                                <option value=5 >5</option>\n" +
        "                                <option value=6 >6</option>\n" +
        "                                <option value=7 >7</option>\n" +
        "                                <option value=8 >8</option>\n" +
        "                                <option value=9 >9</option>\n" +
        "                                <option value=10+ >10+</option>\n" +
        "                              </select>\n" +
        "                              <input class=\"form-control quantity input collapse\" value=\"1\" />\n" +
        "                              <label class=\"quantity-output hidden\" data-input=\"text\">1</label>\n" +
        "                            </div>\n" +
        "                </td>\n" +
        "                <td class=\"entryTotal\"><!-- price.tag: start -->\n" +
        "$25.99<!-- price.tag: end -->\n" +
        "</td>\n" +
        "              </tr>\n" +
        "            <!-- Gift wrapping -->\n" +
        "\t\t\t\t  <tr id=\"gift-wrapping-row\" >\n" +
        "\t\t\t\t  \t<td colspan=\"3\" class=\"gift-wrapping-col\">\n" +
        "\t\t\t\t  \t\t<input type=\"checkbox\" id=\"checkout_select_gift_wrapping\" />\n" +
        "\t\t\t\t  \t\t<label for=\"checkout_select_gift_wrapping\"><span></span><div class=\"glyphicon glyphicon-gift\"></div> Please wrap my order - Each item is individually gift-wrapped for $4.95 per item</label>\n" +
        "\t\t\t\t  \t\t</td>\n" +
        "\t\t\t\t  \t<td id=\"giftWrapTotal\">-</td>\n" +
        "\t\t\t\t  \t\t</tr>\n" +
        "\t\t\t\t</tbody>\n" +
        "\t\t  </table>\n" +
        "\t\t  <table class=\"table cart-info\">\n" +
        "\t\t\t<tbody>\n" +
        "\t\t\t  <tr>\n" +
        "\t\t\t\t<td>\n" +
        "\t\t\t\t  <form id=\"frmRemoveAll\" name=\"frmRemoveAll\" action=\"/cart/removeall\" method=\"post\"><input type=\"hidden\" name=\"entries\" value=\"\" />\n" +
        "\t\t\t\t\t  <p>\n" +
        "\t\t\t\t\t\t<a class=\"remove removeAll\" href=\"#\"> Remove all items from basket</a>\n" +
        "\t\t\t\t\t  </p>\n" +
        "\t\t\t\t\t</form></td>\n" +
        "\t\t\t\t<td class=\"cart-details\">\n" +
        "\t\t\t\t  <table class=\"table\">\n" +
        "\t\t\t\t\t<tbody>\n" +
        "\t\t\t\t\t  <tr id=\"promo-code-form-wrapper\" class=\"promo\">\n" +
        "\t\t\t\t\t\t<td colspan=\"2\">\n" +
        "\t\t\t\t\t\t\t<a id=\"promo-code-show\" href=\"#\">Enter a promotional code</a>\n" +
        "\n" +
        "\t\t\t\t\t\t\t<form id=\"promo-code-form\" class=\"hidden\" method=\"post\" role=\"form\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"form-inline form-group\">\n" +
        "\t\t\t\t\t\t\t\t\t<div id=\"promo-code-input\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<input class=\"form-control input\" type=\"text\" name=\"voucherCode\" placeholder=\"Your Promo Code\" required>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<button id=\"promo-apply-btn\" class=\"btn btn-action\" type=\"submit\" data-action=\"redeem\">Apply</button>\n" +
        "\t\t\t\t\t\t\t\t\t<button id=\"promo-remove-btn\" class=\"hide\" class=\"btn btn-secondary\" type=\"submit\" data-action=\"release\">Remove</button>\n" +
        "\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"giftWrapMessage\"/>\n" +
        "\t\t\t\t\t\t\t\t\t<div id=\"promo-submit-status\"></div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</form>\n" +
        "\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t  </tr>\n" +
        "\n" +
        "\t\t\t\t\t  <tr class=\"total delivery standard\">\n" +
        "\t\t\t\t\t\t<td>\n" +
        "\t\t\t\t\t\t  <input type=\"radio\" id=\"standard-shipping\" name=\"shipping-method\" checked/>\n" +
        "\n" +
        "              <label for=\"standard-shipping\"  style=\"display:none\">\n" +
        "                  <span></span>\n" +
        "                </label>\n" +
        "              <span class=\"shipping-message\">\n" +
        "                Standard Delivery</span>\n" +
        "\t\t\t\t\t\t\t<span class=\"delivery-info\" data-toggle=\"modal\" data-target=\"#delivery_info_standard\"></span>\n" +
        "\t\t\t\t\t\t\t<div class=\"delivery-free-gap promo delivery  alone \">\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t<td class=\"delivery-cost\">\n" +
        "              <span class=\"cost\">\n" +
        "                  FREE</span>\n" +
        "              </td>\n" +
        "\t\t\t\t\t  </tr>\n" +
        "\t\t\t\t\t  \n" +
        "\t\t\t\t\t  <tr class=\"total delivery express\" id=\"express-shipping-row\" style=\"display:none;\">\n" +
        "\t\t\t\t\t    <td>\n" +
        "                <input type=\"radio\" id=\"express-shipping\" name=\"shipping-method\" />\n" +
        "                <label for=\"express-shipping\">\n" +
        "                  <span></span>\n" +
        "                </label>\n" +
        "                <span class=\"shipping-message\">\n" +
        "                  <span class=\"cost\">$14.95</span>\n" +
        "                  Express Delivery</span>\n" +
        "\t\t\t\t\t      <span class=\"delivery-info\" data-toggle=\"modal\" data-target=\"#delivery_info_express\"></span>\n" +
        "\t\t\t\t\t    </td>\n" +
        "\t\t\t\t\t    <td class=\"delivery-cost\">\n" +
        "\t\t\t\t\t      </td>\n" +
        "\t\t\t\t\t  </tr>\n" +
        "\t\t\t\t\t</tbody>\n" +
        "\t\t\t\t  </table>\n" +
        "\t\t\t\t  <table class=\"table table-grandtotal\">\n" +
        "\t\t\t\t\t<tbody>\n" +
        "\t\t\t\t\t\t<tr class=\"total grandtotal\">\n" +
        "\t\t\t\t\t\t<td><strong>Order Total</strong></td>\n" +
        "\t\t\t\t\t\t<td id=\"order-total-amount\">\n" +
        "\t\t\t\t\t\t\t<strong><!-- price.tag: start -->\n" +
        "$92.01<!-- price.tag: end -->\n" +
        "</strong>\n" +
        "\t\t\t\t\t\t\t<div class=\"order-total-savings\" style=display:none;>Total savings : &nbsp;\n" +
        "\t\t\t\t\t\t\t\t<span>\n" +
        "\t\t\t\t\t\t\t\t\t$0.00</span>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t  </tr>\n" +
        "\t\t\t\t   </tbody>\n" +
        "\t\t\t\t  </table>\n" +
        "\t\t\t\t  <table class=\"table table-grandtotal\">\n" +
        "\t\t\t\t\t<tbody>\n" +
        "\t\t\t\t\t  <tr class=\"total afterpay\">\n" +
        "\t\t\t\t\t  <td colspan=\"2\">\n" +
        "\t\t\t\t\t  <div id=\"div_afterpay\" class=\"\">\n" +
        "    <div id=\"span_afterpay_gap\" class=\"afterpay hidden\">Spend another <span id=\"afterpay-gap-amount\" class=\"emph\">{0}</span> to pay with</div>\n" +
        "    <div id=\"span_afterpay_installment\" class=\"afterpay\">or 4 easy payments of <span id=\"afterpay-installment-amount\" class=\"emph\">$23.00</span> with</div>\n" +
        "    <div class=\"afterpay\"><img itemprop=\"image\" src=\"https://cdn.angusrobertson.com.au/_ui/desktop/theme-arbw/images/afterpay.png\" alt=\"afterpay\" title=\"\" class=\"\"/>\n" +
        "\t<span class=\"afterpay-info\" data-toggle=\"modal\" data-target=\"#afterpay_info\"></span></div>\n" +
        "</div>\n" +
        "<div id=\"afterpay_info\" class=\"modal fade\">\n" +
        "    <div class=\"modal-dialog\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <div class=\"modal-body\">\n" +
        "                <a href=\"https://www.afterpay.com/en-AU/terms\" target=\"_blank\">\n" +
        "                    <img class=\"afterpay-modal-image\" src=\"https://static.secure-afterpay.com.au/banner-large.png\" alt=\"Afterpay\">\n" +
        "                </a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div></td>\n" +
        "\t\t\t\t\t  </tr>\n" +
        "\t\t\t\t\t</tbody>\n" +
        "\t\t\t\t  </table>\n" +
        "\t\t\t\t</td>\n" +
        "\t\t\t  </tr>\n" +
        "\t\t\t</tbody>\n" +
        "\t\t  </table>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "  <!-- standard popup -->\n" +
        "  <div id=\"delivery_info_standard\" class=\"modal fade\">\n" +
        "    <div class=\"modal-dialog delivery-dialog\">\n" +
        "      <div class=\"modal-content\">\n" +
        "        <div class=\"modal-body\">\n" +
        "          <div class=\"content\"><p style=\"text-align: left;\"><span style=\"font-size: larger;\"><span style=\"color: rgb(51, 153, 102);\"><u><strong>STANDARD SHIPPING</strong></u></span></span><br />\n" +
        "<br />\n" +
        "We use the Australia Post eParcel service to send your item directly from our Sydney warehouse in almost all cases.*<br />\n" +
        "<br />\n" +
        "You will receive a tracking link via email when your item has been sent.<br />\n" +
        "<br />\n" +
        "We also provide updates via text message in addition to email if you have provided your number.<br />\n" +
        "<br />\n" +
        "More information can be found on <a href=\"delivery-information\"><strong>our delivery information page</strong></a>.<br />\n" +
        "<em><br />\n" +
        "* In some cases your parcel may be shipped to you directly from an external supplier and in these cases tracking is not available.</em></p></div></div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <!-- express popup -->\n" +
        "  <div id=\"delivery_info_express\" class=\"modal fade\">\n" +
        "    <div class=\"modal-dialog delivery-dialog\">\n" +
        "      <div class=\"modal-content\">\n" +
        "        <div class=\"modal-body\">\n" +
        "          <div class=\"content\"><p><span style=\"color: rgb(51, 153, 102);\"><span style=\"font-size: larger;\"><u><strong>EXPRESS SHIPPING</strong></u></span></span></p>\n" +
        "<p><!--[if gte mso 9]><xml>\n" +
        "<o:OfficeDocumentSettings>\n" +
        "<o:AllowPNG />\n" +
        "</o:OfficeDocumentSettings>\n" +
        "</xml><![endif]--></p>\n" +
        "<p><!--[if gte mso 9]><xml>\n" +
        "<w:WordDocument>\n" +
        "<w:View>Normal</w:View>\n" +
        "<w:Zoom>0</w:Zoom>\n" +
        "<w:TrackMoves />\n" +
        "<w:TrackFormatting />\n" +
        "<w:PunctuationKerning />\n" +
        "<w:ValidateAgainstSchemas />\n" +
        "<w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>\n" +
        "<w:IgnoreMixedContent>false</w:IgnoreMixedContent>\n" +
        "<w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>\n" +
        "<w:DoNotPromoteQF />\n" +
        "<w:LidThemeOther>EN-US</w:LidThemeOther>\n" +
        "<w:LidThemeAsian>X-NONE</w:LidThemeAsian>\n" +
        "<w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>\n" +
        "<w:Compatibility>\n" +
        "<w:BreakWrappedTables />\n" +
        "<w:SnapToGridInCell />\n" +
        "<w:WrapTextWithPunct />\n" +
        "<w:UseAsianBreakRules />\n" +
        "<w:DontGrowAutofit />\n" +
        "<w:SplitPgBreakAndParaMark />\n" +
        "<w:EnableOpenTypeKerning />\n" +
        "<w:DontFlipMirrorIndents />\n" +
        "<w:OverrideTableStyleHps />\n" +
        "</w:Compatibility>\n" +
        "<m:mathPr>\n" +
        "<m:mathFont m:val=\"Cambria Math\" />\n" +
        "<m:brkBin m:val=\"before\" />\n" +
        "<m:brkBinSub m:val=\"&#45;-\" />\n" +
        "<m:smallFrac m:val=\"off\" />\n" +
        "<m:dispDef />\n" +
        "<m:lMargin m:val=\"0\" />\n" +
        "<m:rMargin m:val=\"0\" />\n" +
        "<m:defJc m:val=\"centerGroup\" />\n" +
        "<m:wrapIndent m:val=\"1440\" />\n" +
        "<m:intLim m:val=\"subSup\" />\n" +
        "<m:naryLim m:val=\"undOvr\" />\n" +
        "</m:mathPr></w:WordDocument>\n" +
        "</xml><![endif]--><!--[if gte mso 9]><xml>\n" +
        "<w:LatentStyles DefLockedState=\"false\" DefUnhideWhenUsed=\"false\"\n" +
        "DefSemiHidden=\"false\" DefQFormat=\"false\" DefPriority=\"99\"\n" +
        "LatentStyleCount=\"374\">\n" +
        "<w:LsdException Locked=\"false\" Priority=\"0\" QFormat=\"true\" Name=\"Normal\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" QFormat=\"true\" Name=\"heading 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 7\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 8\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 9\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 6\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 7\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 8\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index 9\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 7\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 8\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"toc 9\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Normal Indent\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"footnote text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"annotation text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"header\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"footer\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"index heading\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"35\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"caption\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"table of figures\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"envelope address\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"envelope return\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"footnote reference\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"annotation reference\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"line number\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"page number\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"endnote reference\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"endnote text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"table of authorities\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"macro\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"toa heading\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Bullet\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Number\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Bullet 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Bullet 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Bullet 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Bullet 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Number 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Number 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Number 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Number 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"10\" QFormat=\"true\" Name=\"Title\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Closing\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Signature\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"1\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"Default Paragraph Font\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text Indent\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Continue\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Continue 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Continue 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Continue 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"List Continue 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Message Header\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"11\" QFormat=\"true\" Name=\"Subtitle\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Salutation\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Date\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text First Indent\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text First Indent 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Note Heading\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text Indent 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Body Text Indent 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Block Text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Hyperlink\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"FollowedHyperlink\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"22\" QFormat=\"true\" Name=\"Strong\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"20\" QFormat=\"true\" Name=\"Emphasis\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Document Map\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Plain Text\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"E-mail Signature\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Top of Form\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Bottom of Form\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Normal (Web)\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Acronym\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Address\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Cite\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Code\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Definition\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Keyboard\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Preformatted\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Sample\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Typewriter\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"HTML Variable\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Normal Table\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"annotation subject\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"No List\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Outline List 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Outline List 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Outline List 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Simple 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Simple 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Simple 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Classic 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Classic 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Classic 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Classic 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Colorful 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Colorful 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Colorful 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Columns 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Columns 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Columns 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Columns 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Columns 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 6\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 7\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Grid 8\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 4\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 5\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 6\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 7\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table List 8\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table 3D effects 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table 3D effects 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table 3D effects 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Contemporary\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Elegant\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Professional\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Subtle 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Subtle 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Web 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Web 2\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Web 3\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Balloon Text\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" Name=\"Table Grid\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Table Theme\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Placeholder Text\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"1\" QFormat=\"true\" Name=\"No Spacing\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Revision\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"34\" QFormat=\"true\"\n" +
        "Name=\"List Paragraph\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"29\" QFormat=\"true\" Name=\"Quote\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"30\" QFormat=\"true\"\n" +
        "Name=\"Intense Quote\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"19\" QFormat=\"true\"\n" +
        "Name=\"Subtle Emphasis\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"21\" QFormat=\"true\"\n" +
        "Name=\"Intense Emphasis\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"31\" QFormat=\"true\"\n" +
        "Name=\"Subtle Reference\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"32\" QFormat=\"true\"\n" +
        "Name=\"Intense Reference\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"33\" QFormat=\"true\" Name=\"Book Title\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"37\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" Name=\"Bibliography\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\"\n" +
        "UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"TOC Heading\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"41\" Name=\"Plain Table 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"42\" Name=\"Plain Table 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"43\" Name=\"Plain Table 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"44\" Name=\"Plain Table 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"45\" Name=\"Plain Table 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"40\" Name=\"Grid Table Light\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"Grid Table 1 Light Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"Grid Table 6 Colorful Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"Grid Table 7 Colorful Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 1\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 2\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 3\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 4\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 5\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"46\"\n" +
        "Name=\"List Table 1 Light Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"51\"\n" +
        "Name=\"List Table 6 Colorful Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" Priority=\"52\"\n" +
        "Name=\"List Table 7 Colorful Accent 6\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Mention\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Smart Hyperlink\" />\n" +
        "<w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\"\n" +
        "Name=\"Hashtag\" />\n" +
        "</w:LatentStyles>\n" +
        "</xml><![endif]--><!--[if gte mso 10]>\n" +
        "<style>\n" +
        "/* Style Definitions */\n" +
        "table.MsoNormalTable\n" +
        "{mso-style-name:\"Table Normal\";\n" +
        "mso-tstyle-rowband-size:0;\n" +
        "mso-tstyle-colband-size:0;\n" +
        "mso-style-noshow:yes;\n" +
        "mso-style-priority:99;\n" +
        "mso-style-parent:\"\";\n" +
        "mso-padding-alt:0in 5.4pt 0in 5.4pt;\n" +
        "mso-para-margin-top:0in;\n" +
        "mso-para-margin-right:0in;\n" +
        "mso-para-margin-bottom:8.0pt;\n" +
        "mso-para-margin-left:0in;\n" +
        "line-height:107%;\n" +
        "mso-pagination:widow-orphan;\n" +
        "font-size:11.0pt;\n" +
        "font-family:\"Calibri\",sans-serif;\n" +
        "mso-ascii-font-family:Calibri;\n" +
        "mso-ascii-theme-font:minor-latin;\n" +
        "mso-hansi-font-family:Calibri;\n" +
        "mso-hansi-theme-font:minor-latin;}\n" +
        "</style>\n" +
        "<![endif]--></p>\n" +
        "<p class=\"MsoNormal\">Express Shipping is via the Australia Post Express Post service.<span style=\"mso-spacerun:yes\">&nbsp; </span><span style=\"mso-spacerun:yes\">&nbsp;</span>We send your item from our Sydney warehouse on the next business day after ordering and delivery timeframes are subject to the Express Post network.</p>\n" +
        "<p class=\"MsoNormal\">All Express Post items are trackable and you will receive a tracking link via email when your item has been sent.</p>\n" +
        "<p class=\"MsoNormal\">We also provide updates via text message in addition to email if you have provided your number.</p>\n" +
        "<p class=\"MsoNormal\">Please note that this is not a guaranteed overnight delivery service.</p>\n" +
        "<p class=\"MsoNormal\">More information can be found on our <a href=\"/delivery-information\"><strong>our delivery information page</strong></a> or at <a href=\"https://auspost.com.au/parcels-mail/sending-in-australia/domestic-parcels/express-post-parcels/express-post-guarantee\"><strong>Australia Post</strong></a>.</p>\n" +
        "<p>&nbsp;</p></div></div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\t<!-- end order total container -->\n" +
        "\t    <div class=\"span-4 last\">\n" +
        "            <div class=\"span-4\">\n" +
        "                    </div>\n" +
        "            </div>\n" +
        "\n" +
        "\n" +
        "\t<!-- begin citizen container -->\n" +
        "\t<!--  end citizen container -->\n" +
        "\n" +
        "\t<div id=\"cart_popup\" class=\"cart_popup\"></div>\n" +
        "\t<!-- begin tab -->\n" +
        "\t<div id=\"loginFocus\">\n" +
        "\t\t<div id=\"content\">\n" +
        "\t<h3 class=\"text-center\">How would you like to checkout?</h3>\n" +
        "\t<ul id=\"checkout-nav-tabs\" class=\"nav nav-tabs nav-justified\">\n" +
        "\t\t<li class=\"active\">\n" +
        "\t\t\t<a data-toggle=\"tab\" href=\"#user-gateway\">\n" +
        "\t\t\t\tSign In & Checkout<span>For returning customers</span>\n" +
        "\t\t\t</a>\n" +
        "\t\t</li>\n" +
        "\t\t<li>\n" +
        "\t\t\t\t<a data-toggle=\"tab\" href=\"#paypal-express\">\n" +
        "\t\t\t\t\tPayPal Express<span>Express checkout with PayPal</span>\n" +
        "\t\t\t\t</a>\n" +
        "\t\t\t</li>\n" +
        "\t\t<li>\n" +
        "\t\t\t<a data-toggle=\"tab\" href=\"#anon_checkout_container\">\n" +
        "\t\t\t\tInstant Checkout<span>Shop now and register later</span>\n" +
        "\t\t\t</a>\n" +
        "\t\t</li>\n" +
        "\t</ul>\n" +
        "\t<div class=\"tab-content\">\n" +
        "\t\t<div id=\"user-gateway\" class=\"tab-pane fade in active\">\n" +
        "\t\t\t<div class=\"two-column-wrapper clearfix\">\n" +
        "\t\t\t\t<div class=\"anon-wrap clearfix\">\n" +
        "\t\t\t\t\t<div class=\"login full\">\n" +
        "        <form id=\"loginForm\" data-toggle=\"validator\" role=\"form\" class=\"row\" action=\"/j_spring_security_check\" method=\"post\"><fieldset>\n" +
        "            <input type=\"hidden\" name=\"currentPage\" value=\"\" />\n" +
        "            <input type=\"hidden\" name=\"nextView\" value=\"/cart\" />\n" +
        "            <legend>\n" +
        "            Sign in with your account</legend>\n" +
        "            <div class=\"form-group has-feedback\">\n" +
        "            <label for=\"j_username\" class=\"control-label\">\n" +
        "            Email Address</label>\n" +
        "            <input type=\"email\" class=\"form-control\" id=\"j_username\" name=\"j_username\" placeholder=\"name@email.com\" value=\"\" required>\n" +
        "            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "            <div class=\"help-block with-errors\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"form-group has-feedback\">\n" +
        "            <label for=\"j_password\" class=\"control-label\">\n" +
        "            Password</label>\n" +
        "            <input type=\"password\" class=\"form-control\" id=\"j_password\" name=\"j_password\" placeholder=\"Please enter your password\" required data-minlength=\"6\">\n" +
        "            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "            <div class=\"help-block with-errors\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"form-group row\">\n" +
        "            <div class=\"col-half\">\n" +
        "            <a href=\"/password-reminder\" class=\"btn btn-link\">\n" +
        "            Forgotten password?</a>\n" +
        "            </div>\n" +
        "            <div class=\"col-sm-6\">\n" +
        "            <button type=\"submit\" class=\"btn btn-action\">\n" +
        "            Sign In</button>\n" +
        "            </div>\n" +
        "            </div>\n" +
        "            <div class=\"or\">or</div>\n" +
        "            </fieldset>\n" +
        "        </form><div class=\"row social\">\n" +
        "\n" +
        "        <fieldset>\n" +
        "        <legend>\n" +
        "        Sign in using<br/>\n" +
        "        Facebook or Twitter</legend>\n" +
        "        <div class=\"col\">\n" +
        "        <a title=\"Sign in with Facebook\" href=\"/login/facebook?nextView=%2fcart\" class=\"btn btn-link\">\n" +
        "        <span class=\"icon icon-facebook\"></span> Sign in with Facebook</a>\n" +
        "        </div>\n" +
        "        <div class=\"col\">\n" +
        "        <a title=\"Sign in with Twitter\" href=\"/login/tw?nextView=%2fcart\" class=\"btn btn-link\">\n" +
        "        <span class=\"icon icon-twitter\"></span> Sign in with Twitter</a>\n" +
        "        </div>\n" +
        "        <div class=\"col\">\n" +
        "        <a href=\"/register?nextView=%2fcart\" class=\"btn btn-link register\">\n" +
        "        Register A New Account</a>\n" +
        "        </div>\n" +
        "        </fieldset>\n" +
        "        </div>\n" +
        "        </div></div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\n" +
        "\t\t<div id=\"paypal-express\" class=\"tab-pane fade\">\n" +
        "\t\t\t\t<div class=\"anon-paypal\">\n" +
        "\t\t\t\t\t<div class=\"authority_to_leave\" style=\"display:none;\" data-eligible=\"false\">\n" +
        "\t<input type=\"checkbox\" id=\"authority_to_leave_paypal\" name=\"authorityToLeave\" />\n" +
        "\t<label for=\"authority_to_leave_paypal\"><span></span> <em>I give Australia Post the authority to leave the parcel unattended at this address.</em></label>\n" +
        "\t<textarea class=\"form-control authority_to_leave_message\" id=\"authority_to_leave_paypal_message\" name=\"authorityToLeaveComment\"\n" +
        "\t\t placeholder=\"Any special instructions for Australia Post contractor?\" autocomplete=\"false\"></textarea>\n" +
        "\t<p><span class=\"authority_to_leave_chars_left\">100</span> characters left</p>\n" +
        "</div><button id=\"paypalExpress\" class=\"btn-paypal\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#ajaxResponse\"></button>\n" +
        "\t\t\t\t\t<p class=\"paypal-instructions\">Simply enter your PayPal account details and confirm to place your order.</p>\n" +
        "\t\t\t\t\t<div class=\"paypal-extrainfo\">\n" +
        "\t\t\t\t\t\t<p>Please note that we only ship to addresses in Australia.</p>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t<div id=\"anon_checkout_container\" class=\"tab-pane fade\">\n" +
        "\t\t\t<div class=\"two-column-wrapper clearfix\">\n" +
        "\t\t\t\t<div class=\"anon-wrap clearfix\">\n" +
        "\t<form id=\"guestCheckoutForm\" data-toggle=\"validator\" role=\"form\" action=\"/cart/placeorderguest\" method=\"post\"><div id=\"guest-checkout-container\">\n" +
        "\t\t<div class=\"checkout-giftcard-container\">\n" +
        "\t\t\t</div>\n" +
        "\t\t<div class=\"guest-checkout\">\n" +
        "\t\t\t\t<div id=\"delivery-details-container\">\n" +
        "\t\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t\t<label for=\"email\" class=\"control-label\">Email Address<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t\t\t<input id=\"email\" name=\"emailAddressDelivery\" data-error=\"Please enter a valid email address\" name=\"emailAddressDelivery\" placeholder=\"name@email.com\" type=\"email\" class=\"form-control\" required=\"required\" value=\"\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t\t<label for=\"contactPhoneNumber\" class=\"label-with-note\">Mobile Number <span>(We'll text you the tracking details)</span></label>\n" +
        "\t\t\t\t\t\t<input id=\"contactPhoneNumber\" type=\"text\" class=\"form-control\" name=\"contactPhoneNumber\" placeholder=\"0400123888\" value=\"\" minlength=\"10\" maxlength=\"10\" data-restrictnumeric=\"true\">\n" +
        "\t\t\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t<h2>DELIVERY DETAILS</h2>\n" +
        "\t\t\t\t\t<div id=\"delivery_address_form_container\" data-autocomplete=\"bans_\">\n" +
        "\t\t\t\t\t\t<input id=\"countryIsobans_\" name=\"countryIsoDelivery\" type=\"hidden\" value=\"AU\"/>\n" +
        "<input id=\"regionIsobans_\" name=\"regionIsoDelivery\"  type=\"hidden\" value=\"\"/>\n" +
        "<input id=\"countryNamebans_\" name=\"countryNameDelivery\" type=\"hidden\" value=\"AUSTRALIA\"/>\n" +
        "<input id=\"regionNamebans_\" name=\"regionNameDelivery\"  type=\"hidden\" value=\"\"/>\n" +
        "<div id=\"address-form-fields\">\n" +
        "\t<fieldset>\n" +
        "\t\t<div class=\"form-group has-feedback form-group-firstname\">\n" +
        "\t\t\t<label for=\"bans__firstname\">First name<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t<input id=\"bans__firstname\" name=\"firstNameDelivery\" class=\"form-control\" data-error=\"Please enter a first name\" name=\"firstNameDelivery\" placeholder=\"Jane\" required=\"required\" type=\"text\" value=\"\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"form-group has-feedback form-group-lastname\">\n" +
        "\t\t\t<label for=\"bans__lastname\">Last name<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t<input id=\"bans__lastname\" name=\"lastNameDelivery\" class=\"form-control\" data-error=\"Please enter a last name\" name=\"lastNameDelivery\" placeholder=\"Smith\" required=\"required\" type=\"text\" value=\"\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"clearfix\"></div>\n" +
        "\t\t<div class=\"form-address\">\n" +
        "\t\t\t<div class=\"form-group has-feedback address-line1\">\n" +
        "\t\t\t\t<label for=\"bans__line1\">Address<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t<input id=\"bans__line1\" name=\"line1Delivery\" class=\"form-control\" data-error=\"Please enter your address\" name=\"line1Delivery\" placeholder=\"42 Wallaby Way\" required=\"required\" type=\"text\" value=\"\"/><a class=\"add-line\">add another line</a>\n" +
        "\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"form-group has-feedback address-line2\">\n" +
        "\t\t\t\t<input id=\"bans__line2\" name=\"line2Delivery\" class=\"form-control\" tabindex=\"-1\" name=\"line2Delivery\" type=\"text\" value=\"\"/></div>\t\t\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"row address-extrainfo-row\">\n" +
        "\t\t\t<div class=\"col-sm-4\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"bans_postcode\">Postcode<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t\t<input id=\"bans_postcode\" name=\"postcodeDelivery\" class=\"form-control\" data-error=\"Please enter a Postcode\" data-minlength=\"4\" name=\"postcodeDelivery\" placeholder=\"2000\" required=\"required\" type=\"text\" value=\"\" maxlength=\"4\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"col-sm-8\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"bans_townCity\">Suburb<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t\t<select id=\"bans_townCity\" name=\"townCityDelivery\" class=\"form-control\" data-error=\"Please enter a Suburb\" name=\"townCityDelivery\" placeholder=\"Sydney, NSW\" required=\"required\"><option value=\"\" selected=\"selected\"></option></select><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<p class=\"postcode_note\">\n" +
        "\t\t\tPlease enter the first few characters of your post code or suburb and make a selection from the list.</p>\n" +
        "\t</fieldset>\n" +
        "</div>\n" +
        "</div>\n" +
        "\t\t\t\t\t<div class=\"authority_to_leave\" style=\"display:none;\" data-eligible=\"false\">\n" +
        "\t<input type=\"checkbox\" id=\"authority_to_leave_guest\" name=\"authorityToLeave\" />\n" +
        "\t<label for=\"authority_to_leave_guest\"><span></span> <em>I give Australia Post the authority to leave the parcel unattended at this address.</em></label>\n" +
        "\t<textarea class=\"form-control authority_to_leave_message\" id=\"authority_to_leave_guest_message\" name=\"authorityToLeaveComment\"\n" +
        "\t\t placeholder=\"Any special instructions for Australia Post contractor?\" autocomplete=\"false\"></textarea>\n" +
        "\t<p><span class=\"authority_to_leave_chars_left\">100</span> characters left</p>\n" +
        "</div><div id=\"billing-selection\">\n" +
        "\t\t\t\t\t\t<h2>BILLING ADDRESS</h2>\n" +
        "\t\t\t\t\t\t<div class=\"form-group\">\n" +
        "\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"billing-use-same-notsignin\" value=\"true\" checked=\"checked\"/>\n" +
        "\t\t\t\t\t\t\t<label for=\"billing-use-same-notsignin\">\n" +
        "\t\t\t\t\t\t\t\t<span></span>\n" +
        "\t\t\t\t\t\t\t\tSame as delivery address<input type=\"hidden\" id=\"isBillingSimilarDelivery\" name=\"isBillingSimilarDelivery\" value=\"true\"/>\n" +
        "\t\t\t\t\t\t\t</label>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div id=\"billing_address_form_container_notsignin\" data-autocomplete=\"babns_\">\n" +
        "\t\t\t\t\t\t\t<input id=\"countryIsobabns_\" name=\"countryIsoBilling\" type=\"hidden\" value=\"AU\"/>\n" +
        "<input id=\"regionIsobabns_\" name=\"regionIsoBilling\"  type=\"hidden\" value=\"\"/>\n" +
        "<input id=\"countryNamebabns_\" name=\"countryNameBilling\" type=\"hidden\" value=\"AUSTRALIA\"/>\n" +
        "<input id=\"regionNamebabns_\" name=\"regionNameBilling\"  type=\"hidden\" value=\"\"/>\n" +
        "<div id=\"address-form-fields\">\n" +
        "\t<fieldset>\n" +
        "\t\t<div class=\"form-group has-feedback form-group-firstname\">\n" +
        "\t\t\t<label for=\"babns__firstname\">First name<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t<input id=\"babns__firstname\" name=\"firstNameBilling\" class=\"form-control\" data-error=\"Please enter a first name\" name=\"firstNameBilling\" placeholder=\"Jane\" required=\"required\" type=\"text\" value=\"\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"form-group has-feedback form-group-lastname\">\n" +
        "\t\t\t<label for=\"babns__lastname\">Last name<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t<input id=\"babns__lastname\" name=\"lastNameBilling\" class=\"form-control\" data-error=\"Please enter a last name\" name=\"lastNameBilling\" placeholder=\"Smith\" required=\"required\" type=\"text\" value=\"\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"clearfix\"></div>\n" +
        "\t\t<div class=\"form-address\">\n" +
        "\t\t\t<div class=\"form-group has-feedback address-line1\">\n" +
        "\t\t\t\t<label for=\"babns__line1\">Address<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t<input id=\"babns__line1\" name=\"line1Billing\" class=\"form-control\" data-error=\"Please enter your address\" name=\"line1Billing\" placeholder=\"42 Wallaby Way\" required=\"required\" type=\"text\" value=\"\"/><a class=\"add-line\">add another line</a>\n" +
        "\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"form-group has-feedback address-line2\">\n" +
        "\t\t\t\t<input id=\"babns__line2\" name=\"line2Billing\" class=\"form-control\" tabindex=\"-1\" name=\"line2Billing\" type=\"text\" value=\"\"/></div>\t\t\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"row address-extrainfo-row\">\n" +
        "\t\t\t<div class=\"col-sm-4\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"babns_postcode\">Postcode<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t\t<input id=\"babns_postcode\" name=\"postcodeBilling\" class=\"form-control\" data-error=\"Please enter a Postcode\" data-minlength=\"4\" name=\"postcodeBilling\" placeholder=\"2000\" required=\"required\" type=\"text\" value=\"\" maxlength=\"4\"/><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"col-sm-8\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"babns_townCity\">Suburb<span class=\"form-required\">*</span></label>\n" +
        "\t\t\t\t\t<select id=\"babns_townCity\" name=\"townCityBilling\" class=\"form-control\" data-error=\"Please enter a Suburb\" name=\"townCityBilling\" placeholder=\"Sydney, NSW\" required=\"required\"><option value=\"\" selected=\"selected\"></option></select><span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<p class=\"postcode_note\">\n" +
        "\t\t\tPlease enter the first few characters of your post code or suburb and make a selection from the list.</p>\n" +
        "\t</fieldset>\n" +
        "</div>\n" +
        "</div>\n" +
        "\t\t\t\t\t</div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t\t\n" +
        "\t\t\t\t<div id=\"billing-details-container\">\n" +
        "\t\t\t\t<div id=\"gift_card_container\">\n" +
        "\t<h2>USE YOUR GIFT CARDS</h2>\n" +
        "\t<div id=\"allocation-container\" class=\"checkedGift\">\n" +
        "\t\t<table class=\"table\">\n" +
        "\t\t\t<thead>\n" +
        "\t\t\t\t<tr>\n" +
        "\t\t\t\t\t<th class=\"table-code\">Code</th>\n" +
        "\t\t\t\t\t<th class=\"table-balance\">Balance</th>\n" +
        "\t\t\t\t\t<th class=\"table-allocation\">Amount</th>\n" +
        "\t\t\t\t\t<th></th>\n" +
        "\t\t\t\t</tr>\n" +
        "\t\t\t</thead>\n" +
        "\t\t\t<tbody id=\"allocation-rows\">\n" +
        "\t\t\t</tbody>\n" +
        "\t\t</table>\n" +
        "\t</div>\n" +
        "\t<span id=\"add-another\">\n" +
        "\t\t<a class=\"btn-add-another\">Add another gift card</a>\n" +
        "\t\t<a class=\"btn-hide-add\">( Hide )</a>\n" +
        "\t</span>\n" +
        "\t<div id=\"add-another-form\">\n" +
        "\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t<input id=\"useGiftCard\" name=\"useGiftCard\" value=\"false\" type=\"hidden\"/>\n" +
        "\t\t\t<input id=\"codeGiftCard\" name=\"codeGiftCard\" class=\"form-control\" placeholder=\"Gift card code\"/>\n" +
        "\t\t\t<input type=\"button\" class=\"btn btn-checkgift\" value=\"Check\"/>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "\t<div id=\"breakdown-container\">\n" +
        "\t\t<table class=\"table\">\n" +
        "\t\t\t<tbody>\n" +
        "\t\t\t\t<tr>\n" +
        "\t\t\t\t\t<th>Order Total</th>\n" +
        "\t\t\t\t\t<td>&nbsp;<span>$</span><span id=\"giftCard_BasketTotal\"></span></td>\n" +
        "\t\t\t\t</tr>\n" +
        "\t\t\t\t<tr>\n" +
        "\t\t\t\t\t<th>Gift Card Payment</th>\n" +
        "\t\t\t\t\t<td>-<span>$</span><span id=\"giftCard_CreditAmount\"></span></td>\n" +
        "\t\t\t\t</tr>\n" +
        "\t\t\t\t<tr id=\"giftCard_TotalToPay_row\">\n" +
        "\t\t\t\t\t<th>Outstanding Amount</th>\n" +
        "\t\t\t\t\t<td>&nbsp;<span>$</span><span id=\"giftCard_TotalToPay\"></span></td>\n" +
        "\t\t\t\t</tr>\n" +
        "\t\t\t</tbody>\n" +
        "\t\t</table>\n" +
        "\t</div>\n" +
        "\t<p class=\"helptext\">\n" +
        "\t\tGift cards cannot be used in conjuction with PayPal.<br>\n" +
        "\t\tYou can use up to 5 gift cards.<br>\n" +
        "\t</p>\n" +
        "</div>\n" +
        "<div id=\"payment-selection\">\n" +
        "\t\t\t\t\t<h2>PAYMENT METHOD</h2>\n" +
        "          <div class=\"panel-group\" id=\"payment-method-accordian\">\n" +
        "            <div class=\"panel panel-default\">\n" +
        "              <div class=\"panel-heading credit-panel-heading\">\n" +
        "                <h4 class=\"panel-title clearfix\">\n" +
        "                  <div class=\"col-sm-6 no-gutter\">\n" +
        "                    <div class=\"card-header\">\n" +
        "                      <input type=\"radio\" id=\"anon-payment-method-credit\" name=\"payment_method_section\" checked=\"checked\" value=\"credit_card_new\">\n" +
        "                      <label class=\"cart-credit-card-tab\" for=\"anon-payment-method-credit\" data-toggle=\"collapse\" data-parent=\"#payment-method-accordian\" data-target=\"#payment-method-creditcard\" data-selected-payment-radio-id=\"anon-payment-method-credit\">\n" +
        "                          <span></span>\n" +
        "                      </label>\n" +
        "                      Credit Card</div>\n" +
        "                  </div>\n" +
        "                  <div class=\"col-sm-6 no-gutter\">\n" +
        "                    <span class=\"icon-cardtypes\"></span>\n" +
        "                  </div>\n" +
        "                </h4>\n" +
        "              </div>\n" +
        "              <div id=\"payment-method-creditcard\" class=\"panel-collapse collapse in\">\n" +
        "                <div class=\"panel-body\">\n" +
        "                  <div class=\"form-group\" id=\"credit-card-form-group\">\n" +
        "                    <fieldset>\n" +
        "\t<div id=\"creditCardDataSection\">\n" +
        "\t\t<input type=\"hidden\" id=\"cardSelectedItem\"/>\n" +
        "\t\t<input type=\"hidden\" id=\"cardCode\"/>\n" +
        "\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t<label for=\"bans_card_holder\">Card holder name</label>\n" +
        "\t\t\t<input id=\"bans_card_holder\" class=\"form-control\" placeholder=\"Jane Smith\" data-error=\"Please enter the cardholder name\" required/>\n" +
        "\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"row\" id=\"card-number-ccv-row\">\n" +
        "\t\t\t<div class=\"col-sm-8\">\n" +
        "\t\t\t\t<div id=\"ccnum-formgroup\" class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"bans_card_number\">Card number</label>\n" +
        "\t\t\t\t\t<input id=\"bans_card_number\" class=\"form-control\" data-ccnum=\"bans_card_number\" data-error=\"Please enter a valid card number\" required/>\n" +
        "\t\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"col-sm-4\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"bas_card_security\">CCV</label>\n" +
        "\t\t\t\t\t<input type=\"text\" id=\"bas_card_security\" class=\"form-control\" data-ccv=\"bas_card_security\" placeholder=\"000\" data-error=\"Invalid security number\" required data-minlength=\"3\" maxlength=\"4\"/>\n" +
        "\t\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"row\" id=\"card-extrainfo-row\">\n" +
        "\t\t\t<div class=\"col-sm-5\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"anon-payment-card-month-guest\">Valid to</label>\n" +
        "\t\t\t\t\t<select class=\"form-control\" id=\"anon-payment-card-month-guest\" data-ccmonth=\"anon-payment-card-month-guest\" required data-error=\"Invalid month\">\n" +
        "\t\t\t\t\t\t<option value='' disabled selected style='display:none;'>Month</option>\n" +
        "\t\t\t\t\t\t<option value=\"01\">01</option>\n" +
        "\t\t\t\t\t\t<option value=\"02\">02</option>\n" +
        "\t\t\t\t\t\t<option value=\"03\">03</option>\n" +
        "\t\t\t\t\t\t<option value=\"04\">04</option>\n" +
        "\t\t\t\t\t\t<option value=\"05\">05</option>\n" +
        "\t\t\t\t\t\t<option value=\"06\">06</option>\n" +
        "\t\t\t\t\t\t<option value=\"07\">07</option>\n" +
        "\t\t\t\t\t\t<option value=\"08\">08</option>\n" +
        "\t\t\t\t\t\t<option value=\"09\">09</option>\n" +
        "\t\t\t\t\t\t<option value=\"10\">10</option>\n" +
        "\t\t\t\t\t\t<option value=\"11\">11</option>\n" +
        "\t\t\t\t\t\t<option value=\"12\">12</option>\n" +
        "\t\t\t\t\t\t</select>\n" +
        "\t\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<div class=\"col-sm-5\">\n" +
        "\t\t\t\t<div class=\"form-group has-feedback\">\n" +
        "\t\t\t\t\t<label for=\"anon-payment-card-year-guest\">&nbsp;</label>\n" +
        "\t\t\t\t\t<select class=\"form-control\" id=\"anon-payment-card-year-guest\" data-ccyear=\"anon-payment-card-year-guest\" required data-error=\"Invalid year\">\n" +
        "\t\t\t\t\t\t<option value='' disabled selected style='display:none;'>Year</option>\n" +
        "\t\t\t\t\t\t<option value=\"2018\">2018</option>\n" +
        "\t\t\t\t\t\t<option value=\"2019\">2019</option>\n" +
        "\t\t\t\t\t\t<option value=\"2020\">2020</option>\n" +
        "\t\t\t\t\t\t<option value=\"2021\">2021</option>\n" +
        "\t\t\t\t\t\t<option value=\"2022\">2022</option>\n" +
        "\t\t\t\t\t\t<option value=\"2023\">2023</option>\n" +
        "\t\t\t\t\t\t<option value=\"2024\">2024</option>\n" +
        "\t\t\t\t\t\t<option value=\"2025\">2025</option>\n" +
        "\t\t\t\t\t\t<option value=\"2026\">2026</option>\n" +
        "\t\t\t\t\t\t<option value=\"2027\">2027</option>\n" +
        "\t\t\t\t\t\t<option value=\"2028\">2028</option>\n" +
        "\t\t\t\t\t\t</select>\n" +
        "\t\t\t\t\t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t</div>\n" +
        "</fieldset></div>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <div class=\"panel panel-default\">\n" +
        "              <div class=\"panel-heading paypal-panel-heading\">\n" +
        "                <div class=\"paypal-giftcard-message\" data-toggle=\"tooltip\" title=\"Gift Cards cannot be used in conjunction with PayPal\">\n" +
        "                  <input type=\"hidden\" name=\"giftWrapMessage\">\n" +
        "                  <input type=\"hidden\" id=\"isUsePaypal\" name=\"isUsePaypal\" value=\"\"/>             \n" +
        "                  <input type=\"radio\" id=\"anon_payment_method_paypal\" name=\"payment_method_section\" value=\"paypal\">\n" +
        "                  <label id=\"paypal-radio-label\" class=\"cart-paypal-tab\" for=\"anon_payment_method_paypal\" data-toggle=\"collapse\" data-parent=\"#payment-method-accordian\" data-target=\"#payment-method-paypal\" data-selected-payment-radio-id=\"anon_payment_method_paypal\">\n" +
        "                      <span></span>\n" +
        "                  </label>\n" +
        "                  <span class=\"icon-paypal\"></span>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "              <div id=\"payment-method-paypal\" class=\"panel-collapse collapse\">\n" +
        "                <div class=\"panel-body\">\n" +
        "                    <div class=\"form-group\">You will be redirected to PayPal to complete your purchase</div>\n" +
        "                </div>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <script type=\"text/javascript\">\n" +
        "      var afterpayMin = 80\n" +
        "      var afterpayMax = 1200</script>\n" +
        "    <div class=\"panel panel-default\">\n" +
        "        <div class=\"panel-heading afterpay-panel-heading \">\n" +
        "            <input type=\"radio\" id=\"payment_method_afterpay\" name=\"payment_method_section\" value=\"afterpay\">\n" +
        "            <label id=\"afterpay-radio-label\" class=\"cart-afterpay-tab\" for=\"payment_method_afterpay\"\n" +
        "                data-toggle=\"collapse\" data-parent=\"#payment-method-accordian\" data-target=\"#payment-method-afterpay\" data-selected-payment-radio-id=\"payment_method_afterpay\">\n" +
        "                <span></span>\n" +
        "            </label>\n" +
        "            <span class=\"icon-afterpay\"></span>\n" +
        "        </div>\n" +
        "        <div id=\"payment-method-afterpay\" class=\"panel-collapse collapse\">\n" +
        "            <div class=\"panel-body\">\n" +
        "                Four interest free fortnightly installments totalling&nbsp;<strong class=\"afterpay-total-amount\"><!-- price.tag: start -->\n" +
        "$92.01<!-- price.tag: end -->\n" +
        "</strong>\n" +
        "                <span>\n" +
        "                    <a href=\"#\" data-toggle=\"modal\" data-target=\"#afterpay_info\">Terms and Conditions</a>\n" +
        "                </span>\n" +
        "                <div class=\"afterpay-installments clearfix\">\n" +
        "                    <div class=\"col-sm-3 no-gutter installment\">\n" +
        "                        <span class=\"amount\">$23.00</span>\n" +
        "                        <span class=\"installment-icon first\"></span>\n" +
        "                        First payment</div>\n" +
        "                    <div class=\"col-sm-3 no-gutter installment\">\n" +
        "                        <span class=\"amount\">$23.00</span>\n" +
        "                        <span class=\"installment-icon second\"></span>\n" +
        "                        2 weeks later</div>\n" +
        "                    <div class=\"col-sm-3 no-gutter installment\">\n" +
        "                        <span class=\"amount\">$23.00</span>\n" +
        "                        <span class=\"installment-icon third\"></span>\n" +
        "                        4 weeks later</div>\n" +
        "                    <div class=\"col-sm-3 no-gutter installment\">\n" +
        "                        <span class=\"amount\">$23.00</span>\n" +
        "                        <span class=\"installment-icon forth\"></span>\n" +
        "                        6 weeks later</div>\n" +
        "                </div>\n" +
        "                <div id=\"afterpay_info\" class=\"modal fade\">\n" +
        "    <div class=\"modal-dialog\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <div class=\"modal-body\">\n" +
        "                <a href=\"https://www.afterpay.com/en-AU/terms\" target=\"_blank\">\n" +
        "                    <img class=\"afterpay-modal-image\" src=\"https://static.secure-afterpay.com.au/banner-large.png\" alt=\"Afterpay\">\n" +
        "                </a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div></div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "        </div>\n" +
        "        <div id=\"payment_handling\">\n" +
        "          <input type=\"hidden\" id=\"paymentMode\" name=\"paymentMode\">\n" +
        "\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkout_guest_signup_newsletter\" value=\"true\" checked=\"checked\"/>\n" +
        "\t\t\t\t\t\t\t<label for=\"checkout_guest_signup_newsletter\">\n" +
        "\t\t\t\t\t\t\t\t<span></span>\n" +
        "\t\t\t\t\t\t\t\tAlso sign me up for the VIP newsletter<input type=\"hidden\" id=\"signupGuestForNewsletter\" name=\"signupGuestForNewsletter\" value=\"true\"/>\n" +
        "\t\t\t\t\t\t\t</label>\t\t \n" +
        "          <button type=\"submit\" data-disable=\"true\" class=\"btn btn-submitorder\">Place Order</button>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  </form></div></div>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "\t<!-- end tab -->\n" +
        "</div>\n" +
        "<div id=\"popup_store_pickup_form\" class=\"pickup_store_search clear_fix\" style=\"display: none\">\n" +
        "\t<div class=\"item_container_holder clearfix\">\n" +
        "\t\t<div class=\"title_holder\">\n" +
        "\t\t\t<h2>\n" +
        "\t\t\t\tProduct Availability by Store Location</h2>\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "\t<div class=\"prod_grid span-4\">\n" +
        "\t\t<span class=\"thumb\"></span>\n" +
        "\t\t<strong class=\"details\"></strong>\n" +
        "\t\t<div class=\"cart\">\n" +
        "\t\t\t<p>\n" +
        "\t\t\t\t<strong></strong>\n" +
        "\t\t\t</p>\n" +
        "\t\t\t</div>\n" +
        "\t\t<div class=\"quantity pickup_store_search-quantity\">\n" +
        "\t\t\t<label data-for=\"pickupQty\">Quantity</label>\n" +
        "\t\t\t<input type=\"text\" size=\"1\" maxlength=\"3\" data-id=\"pickupQty\" name=\"qty\" class=\"qty\" />\n" +
        "\t\t</div>\n" +
        "\t</div>\n" +
        "\t<div class=\"span-17 last\">\n" +
        "\t\t<div class=\"pickup_store_search-form\">\n" +
        "\t\t\t<form name=\"pickupInStoreForm\" action=\"#\" method=\"post\" class=\"form_field-input\">\n" +
        "\t\t\t\t<label for=\"locationForSearch\" class=\"nostyle\">Enter a Town/City or Zip Code:</label> \n" +
        "\t\t\t\t<input type=\"text\" name=\"locationQuery\" data-id=\"locationForSearch\" />\n" +
        "\t\t\t\t<input type=\"hidden\" name=\"cartPage\" data-id=\"atCartPage\" value=\"\" />\n" +
        "\t\t\t\t<input type=\"hidden\" name=\"entryNumber\" value=\"\" class=\"entryNumber\" />\n" +
        "\t\t\t\t<button type=\"button\" class=\"form\" data-id=\"pickupstore_search_button\">\n" +
        "\t\t\t\t\tFind Stores</button>\n" +
        "\t\t\t\t<button type=\"button\" class=\"form\" data-id=\"find_pickupStoresNearMe_button\">\n" +
        "\t\t\t\t\tFind stores near me</button>\n" +
        "\t\t\t</form>\n" +
        "\t\t</div>\n" +
        "\t\t<div data-id=\"pickup_store_results\" class=\"pickup_store_results\"></div>\n" +
        "\t</div>\n" +
        "</div></div>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\t<div class=\"span-20\">\n" +
        "\t\t\t\t<div class=\"right\">\n" +
        "\t\t\t\t\t<input type=\"hidden\" name=\"flow\" id=\"flow\"/>\n" +
        "\t\t\t\t\t<input type=\"hidden\" name=\"pci\" id=\"pci\"/>\n" +
        "\t\t\t\t\t<select id=\"selectPciOption\" style=\"margin-left: 10px; display: none;\">\n" +
        "\t\t\t\t\t\t<option value=\"\">Select a PCI option</option>\n" +
        "\t\t\t\t\t\t<option value=\"default\">PCI-Default</option>\n" +
        "\t\t\t\t\t\t\t<option value=\"hop\">PCI-HOP</option>\n" +
        "\t\t\t\t\t\t<option value=\"sop\">PCI-SOP</option>\n" +
        "\t\t\t\t\t</select>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t\n" +
        "\t<script src=\"https://www.secure-afterpay.com.au/afterpay.js\" async></script>\n" +
        "\t<form method=\"post\" id=\"creditCardDataFormHidden\">\n" +
        "\t<input type=\"hidden\" name=\"EWAY_ACCESSCODE\" id=\"creditCard_SessionId\">\n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_PAYMENTTYPE\" value=\"Credit Card\">\n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_CARDNUMBER\" id=\"creditCard_CardNumber\">\n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_CARDEXPIRYMONTH\" id=\"creditCard_ExpiryMonth\">\n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_CARDEXPIRYYEAR\" id=\"creditCard_ExpiryYear\">\n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_CARDNAME\" id=\"creditCard_CardHolderName\"> \n" +
        "\t\t<input type=\"hidden\" name=\"EWAY_CARDCVN\" id=\"creditCard_Cvc2\">\n" +
        "\t</form></div>\n" +
        "        <div id=\"footer-container\" class=\"container-fluid footer\">\n" +
        "            <!-- START - FOOTER -->\n" +
        "<div class=\"seotext-container row cartPageFooter\" data-toggle=\"collapse\" data-target=\".seotext-content\">\n" +
        "    <div class=\"col-sm-11 col-md-10 col-lg-8 col-centered text-center\">\n" +
        "        <div class=\"seotext-header\"></div>\n" +
        "        <div class=\"seotext-content collapse\"></div>\n" +
        "        <div>\n" +
        "            <span class=\"seotext-expand-arrow glyphicon glyphicon-menu-down text-center\" aria-hidden=\"true\"></span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<div class=\"footer-fineprint row\">\n" +
        "    <div class=\"container\">\n" +
        "        <img class=\"ribbon\" src=\"https://cdn.angusrobertson.com.au/_ui/desktop/theme-arbw/images/footer_help_ribbon.png\" width=\"240\" height=\"113\">\n" +
        "        <div class=\"row\">\n" +
        "            <div class=\"fineprint\">\n" +
        "                Copyright 2018. All rights reserved.</div>\n" +
        "            <div class=\"fineprint\">\n" +
        "                <a href=\"/privacy\">Privacy Policy</a> |\n" +
        "                <a href=\"/terms-and-conditions\">Terms &amp; Conditions</a> |\n" +
        "                <a href=\"/product-content-policy\">Product Content Policy</a>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <img class=\"the-end\" src=\"https://cdn.angusrobertson.com.au/_ui/desktop/theme-arbw/images/the_end.png\" alt=\"The end.\" width=\"124\" height=\"33\">\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<!-- END - FOOTER --></div>\n" +
        "\t<div class=\"modal fade \" id=\"ajaxResponse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ajaxResponseLabel\">\n" +
        "      <div class=\"modal-dialog\" role=\"document\">\n" +
        "        <div class=\"modal-content\">\n" +
        "          <div class=\"modal-header\">\n" +
        "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
        "          </div>\n" +
        "          <div class=\"modal-body\">\n" +
        "            Hold on while we process your request.</div>\n" +
        "          <div class=\"modal-footer\">\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "    \n" +
        "    <div class=\"modal fade\" id=\"loginRegisterForgottenPwdModal\" tabindex=\"-1\" role=\"dialog\">\n" +
        "\t\t<div class=\"modal-dialog modal-sm\" role=\"document\">\n" +
        "\t\t\t<div class=\"modal-content\">\n" +
        "\t\t\t\t<div class=\"modal-body\">\n" +
        "\t\t\t\t\t<!-- Login panel -->\n" +
        "<div class=\"login_register_panel login full\" id=\"login_panel\">\n" +
        "\t<h2>Please sign in to continue</h2>\n" +
        "    <form id=\"loginForm\" data-toggle=\"validator\" role=\"form\" class=\"row\" action=\"/j_spring_security_check\" method=\"post\"><fieldset>\n" +
        "        \t<input type=\"hidden\" name=\"currentPage\" value=\"\" />\n" +
        "        \t<input type=\"hidden\" name=\"nextView\" value=\"/cart\"/>\n" +
        "        \t<div class=\"form-field form-group\">\n" +
        "           \t \t<input type=\"email\" class=\"form-control\" id=\"j_username\" name=\"j_username\" placeholder=\"Email Address\" value=\"\" required>\n" +
        "           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "        \t</div>\n" +
        "        \t<div class=\"form-field form-group form-field-login-pwd\">\n" +
        "           \t \t<input type=\"password\" class=\"form-control\" id=\"j_password\" name=\"j_password\" placeholder=\"Password\" required data-minlength=\"6\">\n" +
        "           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "        \t</div>\n" +
        "\n" +
        "        \t<input type=\"submit\" class=\"btn btn-action\" value=\"Sign In\" />\n" +
        "\n" +
        "            <p class=\"password-reminder\"><a href=\"javascript:;\" onclick=\"changeSignInRegisterPanel('forgot_password_panel');\" data-role=\"none\" data-ajax=\"false\">Forgotten your password?</a></p>\n" +
        "\n" +
        "        \t<div class=\"sign-in-option-separator\">\n" +
        "\t\t\t\t<strong>or</strong>\n" +
        "\t\t\t</div>\n" +
        "\n" +
        "            <div class=\"social-login-options\">\n" +
        "                <a href=\"/login/facebook?nextView=%2fcart\" class=\"login-facebook\">\n" +
        "                    <span class=\"icon icon-facebook\"></span> Continue with Facebook</a>\n" +
        "                <a href=\"/login/tw?nextView=%2fcart\" class=\"login-twitter\">\n" +
        "                    <span class=\"icon icon-twitter\"></span> Continue with Twitter</a>\n" +
        "            </div>\n" +
        "        </fieldset>\n" +
        "    </form><div class=\"sign-in-register-footer\">\n" +
        "        Don't have an account?<br><a href=\"javascript:;\" onclick=\"changeSignInRegisterPanel('register_panel');\">Create an account</a>\n" +
        "    </div>\n" +
        "</div><div class=\"login_register_panel register full\" id=\"register_panel\">\n" +
        "\t<h2>Create an account</h2>\n" +
        "    <form id=\"registerForm\" data-toggle=\"validator\" role=\"form\" class=\"row\" action=\"/register/newcustomer\" method=\"post\"><fieldset>\n" +
        "\t\t\t<input type=\"hidden\" name=\"currentPage\" value=\"\" />\n" +
        "\t\t\t<input type=\"hidden\" name=\"nextView\" value=\"/cart\"/>\n" +
        "\t\t\t<div class=\"form-field-firstname\">\n" +
        "            \t<div class=\"form-field form-group\">\n" +
        "\t            \t<input id=\"regFirstName\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name *\" required=\"required\" value=\"\" type=\"text\">\n" +
        "\t           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t            </div>\n" +
        "            </div>\n" +
        "            <div class=\"form-field-lastname\">\n" +
        "            \t<div class=\"form-field form-group\">\n" +
        "\t            \t<input id=\"regLastName\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name *\" required=\"required\" value=\"\" type=\"text\">\n" +
        "\t           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "\t            </div>\n" +
        "            </div>\n" +
        "           \t<div class=\"form-field form-group\">\n" +
        "            \t<input id=\"regEmail\" class=\"form-control\" name=\"email\" placeholder=\"Email Address *\" required=\"required\" value=\"\" type=\"email\">\n" +
        "           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "            </div>\n" +
        "            <input id=\"regCheckEmail\" name=\"checkEmail\" data-match=\"#regEmail\" value=\"\" type=\"hidden\">\n" +
        "           \t<div class=\"form-field form-group\">\n" +
        "            \t<input id=\"regPassword\" class=\"form-control\" name=\"pwd\" data-minlength=\"8\" data-minlength-error=\"Your password is shorter than the required eight characters\" data-validatealpha=\"regPassword\" data-validatedigit=\"regPassword\" placeholder=\"Password (min 8 characters and 1 number) *\" required=\"required\" value=\"\" type=\"password\">\n" +
        "           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "            </div>\n" +
        "            <input id=\"regCheckPwd\" name=\"checkPwd\" required=\"required\" data-match=\"#regPassword\" value=\"\" type=\"hidden\">\n" +
        "           \t<div class=\"form-field form-group\">\n" +
        "            \t<input id=\"regMobileNumber\" class=\"form-control\" name=\"mobileNumber\" maxlength=\"10\" minlength=\"10\" placeholder=\"Mobile Number (optional)\" data-restrictnumeric=\"true\" value=\"\" type=\"text\">\n" +
        "           \t \t<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "\t\t\t\t<div class=\"help-block with-errors\"></div>\n" +
        "            </div>\n" +
        "           \t<div class=\"form-field form-group\">\n" +
        "\t\t\t\t<label>\n" +
        "\t\t\t\t\t<input id=\"regEmailSignup\" name=\"signedUpForEmail\" inputCSS=\"form-control\" type=\"checkbox\" value=\"true\" checked=\"checked\"/>\n" +
        "\t\t\t\t\t<input type=\"hidden\" name=\"_signedUpForEmail\" value=\"on\"/><label for=\"regEmailSignup\"><span></span></label>\n" +
        "\t\t\t\t\t<span class=\"register-signup-message\">I would like to receive emails with the latest releases, great offers and exclusive content</span>\n" +
        "\t\t\t\t</label>\n" +
        "\t\t\t\t<p class=\"hint-msg\"><a href=\"/privacy\">Privacy Collection Statement</a></p>\n" +
        "\t\t\t</div>\n" +
        "\t\t\t<button id=\"modalRegisterSubmit\" type=\"submit\" class=\"btn btn-action btn-wide disabled\">Sign Up</button>\n" +
        "\n" +
        "        \t<div class=\"sign-in-option-separator\">\n" +
        "\t\t\t\t<strong>or</strong>\n" +
        "\t\t\t</div>\n" +
        "            <div class=\"social-login-options\">\n" +
        "                <a href=\"/login/facebook?nextView=%2fcart\" class=\"login-facebook\" target=\"_blank\">\n" +
        "                    <span class=\"icon icon-facebook\"></span> Sign up with Facebook</a>\n" +
        "                <a href=\"/login/tw?nextView=%2fcart\" class=\"login-twitter\" target=\"_blank\">\n" +
        "                    <span class=\"icon icon-twitter\"></span> Sign up with Twitter</a>\n" +
        "            </div>\n" +
        "        </fieldset>\n" +
        "    </form><div class=\"sign-in-register-footer\">\n" +
        "        Have an account?&nbsp;<a href=\"javascript:;\" onclick=\"changeSignInRegisterPanel('login_panel');\">Sign in</a>\n" +
        "    </div>\n" +
        "</div><div class=\"login_register_panel forgot-pwd full\" id=\"forgot_password_panel\">\n" +
        "\t<h2>Forgot your password?</h2>\n" +
        "    <form id=\"forgotPwdForm\" data-toggle=\"validator\" role=\"form\" class=\"row\" action=\"/ajax/password-reminder\" method=\"post\"><div class=\"form-group has-feedback\">\n" +
        "            <input id=\"forgottenPwd.email\" name=\"email\" value=\"\" placeholder=\"Email Address\" type=\"email\" required=\"required\" class=\"form-control\">\n" +
        "            <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n" +
        "            <div class=\"help-block with-errors\"></div>\n" +
        "        </div>\n" +
        "        <p class=\"small-grey-text clearfix\">This is the email address that you previously registered with on angusrobertson.com.au or bookworld.com.au.<br><br> We will send you an email with instructions on how to reset your password.</p>\n" +
        "        <input id=\"forgottenPassword\" class=\"button-login-register button-reset-password\" value=\"Reset Password\" type=\"submit\">\n" +
        "    </form><div class=\"pwd-result-message\"></div>\n" +
        "\t<div class=\"sign-in-register-footer\">\n" +
        "        <a href=\"javascript:;\" onclick=\"changeSignInRegisterPanel('login_panel');\" class=\"sign-in-link\" data-role=\"none\" data-ajax=\"false\">Sign in</a>\n" +
        "    </div>\n" +
        "</div></div>\n" +
        "\t\t\t\t<div class=\"modal-footer\">\n" +
        "\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Close</button>\n" +
        "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t</div><div class=\"modal fade\" id=\"marketingModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"marketingModalLabel\">\n" +
        "\t  <div class=\"modal-dialog\" role=\"document\">\n" +
        "\t\t<div class=\"modal-content\">\n" +
        "\t\t  <div class=\"modal-header\">\n" +
        "\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
        "\t\t  </div>\n" +
        "\t\t  <div class=\"modal-body\">\n" +
        "\t\t\tHold on while we process your request.</div>\n" +
        "\t\t  <div class=\"modal-footer\">\n" +
        "\t\t  </div>\n" +
        "\t\t</div>\n" +
        "\t  </div>\n" +
        "\t</div>\n" +
        "\t\n" +
        "\t<script src=\"/wro/20180719 1128/arbw.js\"></script>\n" +
        "\n" +
        "\t<div class=\"modal fade\" id=\"accountMigrationModal\" tabindex=\"-1\" role=\"dialog\">\n" +
        "    <div class=\"modal-dialog\" role=\"document\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <div class=\"modal-body\">\n" +
        "                <div id=\"accountMigrationPopup\">\n" +
        "                    <div class=\"greeting\">\n" +
        "                        <h1>Welcome!</h1>\n" +
        "                        <strong>Angus & Robertson</strong> and <strong>Bookworld</strong> have recently merged to create the exciting new bookshop, <strong>Angus & Robertson</strong>.</div>\n" +
        "\n" +
        "                    <div class=\"migration-messages\">\n" +
        "                        <p>\n" +
        "                            We have kept your A&amp;R details for your new Angus & Robertson account.</p>\n" +
        "                        <p class=\"migrate-prompt-guest\" style=\"display:none;\">\n" +
        "                            We also noticed that you have previously shopped at Bookworld. Would you like us to keep your Bookworld order history?</p>\n" +
        "                        <p class=\"migrate-prompt-registered\" style=\"display:none;\">\n" +
        "                            We also noticed that you have an account on Bookworld. Would you like us to keep your Bookworld details, including delivery addresses, order history and citizenship information?</p>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <form id=\"mergeForm\" name=\"migrateDetailsForm\" action=\"/ajax/migration/mergeUser\" method=\"post\">\n" +
        "                        <div>\n" +
        "                            <button id=\"migrateDetails-yes\" class=\"btn btn-action btn-wide\" name=\"migrateDetails\" value=\"true\">Yes</button>\n" +
        "                            <label>\n" +
        "                                <span class=\"migrate-prompt-accept-guest\" style=\"display:none;\">\n" +
        "                                    Yes, please keep my Bookworld order history on Angus & Robertson.</span>\n" +
        "                                <span class=\"migrate-prompt-accept-registered\" style=\"display:none;\">\n" +
        "                                    Yes, please keep my Bookworld details on Angus & Robertson.</span>\n" +
        "                            </label>\n" +
        "                        </div>\n" +
        "                        <div>\n" +
        "                            <button id=\"migrateDetails-no\" class=\"btn btn-action btn-wide\" name=\"migrateDetails\" value=\"false\">No</button>\n" +
        "                            <label>\n" +
        "                                No, I don't need my Bookworld details anymore.</label>\n" +
        "                        </div>\n" +
        "                    </form>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div><div id=\"fadefocus-backdrop\" class=\"modal-backdrop\"></div>\n" +
        "\n" +
        "\t\n" +
        "<script type=\"text/javascript\">window.NREUM||(NREUM={});NREUM.info={\"errorBeacon\":\"bam.nr-data.net\",\"licenseKey\":\"ca060ef88a\",\"agent\":\"\",\"beacon\":\"bam.nr-data.net\",\"applicationTime\":330,\"applicationID\":\"44927853\",\"transactionName\":\"b1YDYRZTWUFUBhcKW1YcMkUWW1lVdgoNF0ZXXw1QFh1UU0cRQ0tzfWdI\",\"queueTime\":0}</script><script type=\"text/javascript\" src=\"//cdn.optimizely.com/js/3434090278.js\"></script>\n" +
        "\n" +
        "</body>\n" +
        "\n" +
        "</html>\n";
}


//Determine which site the data is from and scrape appropriate book data
function check_site(data, array_thingo) {
    let angus_pattern = /Angus &amp; Robertson/;
    let qbd_pattern = /www.qbd.com.au/;

    //Scrape A&R data
    if (angus_pattern.test(data) === true) {
        var identifier = 'angus';
        angus_isbn = /id:.*?"([0-9]{13})/g;
        angus_price = /ubtotal:.*?([0-9.]*),/g;
        nested_match = /line_items:.*?language/gs;
        return scrape_page(data, angus_isbn, angus_price, identifier, array_thingo, nested_match);

        //Scrape QBD Data
    } else if (qbd_pattern.test(data) === true) {
        var identifier = 'qbd';
        qdb_isbn = /isbn="([0-9]{13})/;
        qdb_price = /data-price="([0-9.]*)/;
        return scrape_page(data, qdb_isbn, qdb_price, identifier, array_thingo);

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


function scrape_page(data, isbn_pattern, price_pattern, identifier, array_thingo, nested_match = false) {

    if (nested_match !== false) {
        while (match = nested_match.exec(data)) {
            match_string = match[0];
            var isbns = get_matched_groups(isbn_pattern, match_string);
            var prices = get_matched_groups(price_pattern, match_string);
            // var isbns = match_string.match(isbn_pattern);
            // var prices = match_string.match(price_pattern);
            console.log(isbns, prices);
        }

    } else {
        var isbns = get_matched_groups(isbn_pattern, data);
        var prices = get_matched_groups(price_pattern, data);
    }

    //Array containing price/isbn pairs
    var combined_array = array_thingo;
    for (var i = 0; i < isbns.length; i++) {
        try {
            combined_array[isbns[i]][identifier] = prices[i];
        } catch {
            combined_array[isbns[i]] = {identifier: prices[i]};
        }


    }
    console.log(combined_array);
    // array_thingo[identifier] = [isbn, price];
    return combined_array;
}

