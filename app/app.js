function initListeners() {
    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });


    $(".links a").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });
}

function changeRoute() {
    let route = window.location.hash;
    let pageID = route.replace("#", "");

    // console.log(pageID);
    $.get(`pages/${pageID}/${pageID}.html`, function(data) {
        $("#app").html(data);
    })
    if (pageID == "") {
        $.get(`pages/home/home.html`, function(data) {
            $("#app").html(data);
        })
    }
}



function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();

}

$(document).ready(function() {
    initListeners();
    initURLListener();
});