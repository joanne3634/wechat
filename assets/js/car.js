jQuery(document).ready(function($) {

    $('select.dropdown').dropdown(); //Star of車牌介面
    $(".dropdown").click(function(event) {
        if ($(".default.text").text().length >= 2) {
            $("#Sheng").show();
        } else if ($(".default.text").text().length == 1) {
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
        var ShengText = $(".default.text").text();
        $(this).addClass("active").siblings().removeClass('active');
        var getAbc = $(this).text();
        $(".default.text").append(getAbc);
        $("#Abc").hide();
    }); //End of 車牌介面

});
