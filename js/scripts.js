$().ready(function () {
    $("#Click").on("click", function() {
        $(".main__menu").toggleClass("main__menu_disable" ) &  $(".header__logotype").toggleClass("header__logotype_color" );
}) 
    });
