function initListeners() {
    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });


    $(".links a").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });
    $(".button").click(function(e) {
        let btnID = e.currentTarget.id;
        console.log("clicked " + btnID);
        alert("clicked " + btnID);
    });
}




function changeRoute() {

    let route = window.location.hash;
    let pageID = route.replace("#", "");

    // console.log(pageID);
    $.get(`pages/${pageID}/${pageID}.html`, function(data) {
        $("#app").html(data);
        initListeners();

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