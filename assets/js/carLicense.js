jQuery(document).ready(function($) {

    $('select.dropdown').dropdown(); //Start of車牌介面
    $(".ui.dropdown.selection").bind('touchstart click', function(event) {
        console.log($(".default.text").text().length);
        if ($(".default.text").text().length >= 2) {
            $("#Sheng").show();
        }
        if ($(".default.text").text().length == 1) {
            $("#Sheng").hide();
            $("#Abc").show();
        }
       
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
