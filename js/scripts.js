$().ready(function () {
    $("#Click").on("click", function() {
        $(".menu").toggleClass("menu--disable" ) &  
        $(".header__logotype").toggleClass("header__logotype--color" );
}) 
    });
