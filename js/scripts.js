$().ready(function () {
    $("#Click").on("click", function() {
        $(".menu").toggleClass("menu--disable" ) &  
        $(".header-logotype").toggleClass("header-logotype--color" );
}) 
    });
