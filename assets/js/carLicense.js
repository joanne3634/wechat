jQuery(document).ready(function($) {


    $('select.dropdown').dropdown(); //Start of車牌介面
    $(".ui.dropdown.selection").bind('touchstart click', function(event) {
        console.log($(".default.text").text().length);
        if ($(".default.text").text().length >= 2) {
            $("#Sheng").show();
            $("#mask").show().css('height', $(window).height());;
        }
        if ($(".default.text").text().length == 1) {
            $("#Sheng").hide();
            $("#Abc").show();
        }

    });

    $("#mask").bind('touchstart click', function(event) {
        $("#Sheng").hide();
        $("#Abc").hide();
        $(this).hide();
    });

    $("#Sheng fieldset label").mousedown(function(event) {
        $(this).addClass("active").siblings().removeClass('active');
        $(".default.text").text($(this).text());
        $("#Sheng").hide();
        $("#Abc").show();
    });

    $("#Abc fieldset label").mousedown(function(event) {
        $(this).addClass("active").siblings().removeClass('active');
        var getAbc = $(this).text();
        $(".default.text").append(getAbc);
        $("#Abc").hide();
    }); //End of 車牌介面
});
